import { notFound } from 'next/navigation';
import { getDocBySlug, getAllDocs, generateToc } from '@/lib/mdx';
import { TableOfContents } from '@/components/layout/table-of-contents';
import { Separator } from '@/components/ui/separator';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/mdx/mdx-components';

interface DocPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const docs = getAllDocs();
  
  return docs.map((doc) => ({
    slug: doc.slug.split('/'),
  }));
}

export async function generateMetadata({ params }: DocPageProps) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${doc.frontmatter.title} - MDX Knowledge Base`,
    description: doc.frontmatter.description,
  };
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const toc = generateToc(doc.content);

  return (
    <div className="flex gap-10">
      <article className="prose prose-slate dark:prose-invert max-w-3xl flex-1">
        <div className="mb-8">
          <h1 className="mb-2">{doc.frontmatter.title}</h1>
          {doc.frontmatter.description && (
            <p className="text-xl text-muted-foreground">
              {doc.frontmatter.description}
            </p>
          )}
          <Separator className="mt-4" />
        </div>
        <MDXRemote source={doc.content} components={mdxComponents} />
      </article>
      <TableOfContents items={toc} />
    </div>
  );
}