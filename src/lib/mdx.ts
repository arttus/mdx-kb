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
    const filePath = path.join(contentDirectory, ...slug) + '.mdx';
    
    if (!fs.existsSync(filePath)) {
      return null;
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
        readDirectory(filePath, [...slugPrefix, file]);
      } else if (file.endsWith('.mdx')) {
        const slug = [...slugPrefix, file.replace('.mdx', '')];
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