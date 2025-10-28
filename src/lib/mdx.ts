import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content/docs');

export interface DocFrontmatter {
  title: string;
  description?: string;
  date?: string;
  category?: string;
  tags?: string[];
}

export interface DocMeta {
  slug: string;
  frontmatter: DocFrontmatter;
  content: string;
}

export function getDocBySlug(slug: string[]): DocMeta | null {
  try {
    // Convert hyphenated slug back to spaces for filename lookup
    const slugWithSpaces = slug.map(s => s.replace(/-/g, ' '));

    // Try .mdx first, then .md
    let filePath = path.join(contentDirectory, ...slugWithSpaces) + '.mdx';

    if (!fs.existsSync(filePath)) {
      filePath = path.join(contentDirectory, ...slugWithSpaces) + '.md';
      if (!fs.existsSync(filePath)) {
        return null;
      }
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: slug.join('/'),
      frontmatter: data as DocFrontmatter,
      content,
    };
  } catch (error) {
    console.error('Error reading doc:', error);
    return null;
  }
}

export function getAllDocs(): DocMeta[] {
  const docs: DocMeta[] = [];

  function readDirectory(dir: string, slugPrefix: string[] = []) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // Convert folder names with spaces to hyphens for URLs
        const folderSlug = file.replace(/\s+/g, '-');
        readDirectory(filePath, [...slugPrefix, folderSlug]);
      } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
        // Convert filename with spaces to hyphens for URLs
        const fileName = file.replace(/\.mdx?$/, '');
        const fileSlug = fileName.replace(/\s+/g, '-');
        const slug = [...slugPrefix, fileSlug];
        const doc = getDocBySlug(slug);
        if (doc) {
          docs.push(doc);
        }
      }
    }
  }

  if (fs.existsSync(contentDirectory)) {
    readDirectory(contentDirectory);
  }

  return docs;
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function generateToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    toc.push({ id, text, level });
  }

  return toc;
}

export interface NavItem {
  title: string;
  href?: string;
  items?: NavItem[];
  order?: number;
}

interface FileNode {
  name: string;
  path: string;
  isDirectory: boolean;
  title?: string;
  order?: number;
}

function titleCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function generateNavigation(): NavItem[] {
  const navigation: NavItem[] = [];

  function buildTree(dir: string, slugPrefix: string[] = []): NavItem[] {
    if (!fs.existsSync(dir)) {
      return [];
    }

    const files = fs.readdirSync(dir);
    const nodes: FileNode[] = [];

    // First pass: collect all files and directories
    for (const file of files) {
      // Skip hidden files, underscore-prefixed files, and README files
      if (file.startsWith('.') || file.startsWith('_') || file.toUpperCase() === 'README.MD') {
        continue;
      }

      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      const isDirectory = stat.isDirectory();

      // Skip if it's a file but not .md or .mdx
      if (!isDirectory && !file.endsWith('.md') && !file.endsWith('.mdx')) {
        continue;
      }

      const name = file.replace(/\.mdx?$/, '');

      let title = titleCase(name);
      let order = 999;

      // If it's an MDX or MD file, read its frontmatter for title and order
      if (!isDirectory && (file.endsWith('.mdx') || file.endsWith('.md'))) {
        try {
          const fileContents = fs.readFileSync(filePath, 'utf8');
          const { data } = matter(fileContents);
          if (data.title) {
            title = data.title;
          }
          if (typeof data.order === 'number') {
            order = data.order;
          }
        } catch (error) {
          console.error(`Error reading frontmatter from ${filePath}:`, error);
        }
      }

      nodes.push({
        name,
        path: filePath,
        isDirectory,
        title,
        order,
      });
    }

    // Sort by order, then by name
    nodes.sort((a, b) => {
      if (a.order !== b.order) {
        return a.order - b.order;
      }
      return a.name.localeCompare(b.name);
    });

    const items: NavItem[] = [];

    for (const node of nodes) {
      if (node.isDirectory) {
        // Convert folder name with spaces to hyphens for URL slug
        const folderSlug = node.name.replace(/\s+/g, '-');
        const subItems = buildTree(node.path, [...slugPrefix, folderSlug]);
        if (subItems.length > 0) {
          items.push({
            title: node.title,
            items: subItems,
            order: node.order,
          });
        }
      } else {
        // It's an MDX/MD file - convert spaces to hyphens for URL
        const fileSlug = node.name.replace(/\s+/g, '-');
        const href = `/docs/${[...slugPrefix, fileSlug].join('/')}`;
        items.push({
          title: node.title,
          href,
          order: node.order,
        });
      }
    }

    return items;
  }

  const rootItems = buildTree(contentDirectory);

  // Group root-level items into sections if they're in subdirectories
  // Otherwise, return them as-is
  return rootItems;
}