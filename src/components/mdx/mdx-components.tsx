import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import { CodeBlock } from './code-block';
import { Mermaid } from './mermaid';
import { Callout } from './callout';
import { FileTree } from './file-tree';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const mdxComponents: MDXComponents = {
  // Override default HTML elements
  h1: ({ children }) => (
    <h1 className="text-4xl font-bold mb-4 mt-2">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-3xl font-bold mt-8 mb-4 scroll-mt-20">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold mt-6 mb-3 scroll-mt-20">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-xl font-semibold mt-4 mb-2">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="mb-4 leading-7">{children}</p>
  ),
  a: ({ href, children }) => (
    <Link 
      href={href || '#'} 
      className="text-primary underline underline-offset-2 hover:no-underline"
    >
      {children}
    </Link>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 ml-6 list-disc [&>li]:mt-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 ml-6 list-decimal [&>li]:mt-2">{children}</ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-6 border-l-4 border-border pl-4 italic text-muted-foreground">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-border bg-muted px-4 py-2 text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-border px-4 py-2">{children}</td>
  ),
  pre: ({ children }) => <>{children}</>,
  code: ({ children, className }) => {
    const isInline = !className;
    
    if (isInline) {
      return (
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm font-semibold">
          {children}
        </code>
      );
    }

    // Check if this is a Mermaid diagram
    const language = className?.replace('language-', '');
    if (language === 'mermaid') {
      return <Mermaid chart={String(children).trim()} />;
    }

    return (
      <CodeBlock className={className}>
        {String(children)}
      </CodeBlock>
    );
  },
  
  // Custom components
  Callout,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  FileTree,
  Mermaid,
};