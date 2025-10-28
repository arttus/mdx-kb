'use client';

import { useState, useEffect } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { codeToHtml } from 'shiki';

interface CodeBlockProps {
  children: string;
  className?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ 
  children, 
  className,
  title,
  showLineNumbers = false
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [html, setHtml] = useState<string>('');
  
  const language = className?.replace('language-', '') || 'text';
  const code = children.trim();

  useEffect(() => {
    const highlightCode = async () => {
      try {
        const highlighted = await codeToHtml(code, {
          lang: language,
          theme: 'github-light',
        });
        setHtml(highlighted);
      } catch (error) {
        console.error('Syntax highlighting error:', error);
        // Fallback to plain code
        setHtml(`<pre><code>${code}</code></pre>`);
      }
    };

    highlightCode();
  }, [code, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6 rounded-lg border-2 overflow-hidden border-border">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b-2 border-border bg-muted/50">
          <span className="text-sm font-mono text-muted-foreground">{title}</span>
          <span className="text-xs text-muted-foreground uppercase">{language}</span>
        </div>
      )}
      <div className="relative">
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity z-10"
          onClick={handleCopy}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </Button>
        {html ? (
          <div
            className="overflow-x-auto [&>pre]:!m-0 [&>pre]:!p-4 [&>pre]:!bg-transparent [&>pre]:!border-0"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <pre className="overflow-x-auto p-4 bg-muted">
            <code className={className}>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}