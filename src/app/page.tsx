import Link from 'next/link';
import { ArrowRight, BookOpen, Code2, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 py-20">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
          <span className="mr-2">🎉</span>
          <span>Built with Next.js 15 & React 19</span>
        </div>
        
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Modern MDX Knowledge Base
        </h1>
        
        <p className="max-w-2xl text-xl text-muted-foreground">
          A beautiful, fast, and accessible documentation platform built with MDX, 
          Tailwind CSS, and shadcn/ui components.
        </p>
        
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link href="/docs/introduction">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="https://github.com/arttus/mdx-kb">View on GitHub</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <BookOpen className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <CardTitle>MDX Support</CardTitle>
                  <CardDescription>
                    Write documentation in Markdown with JSX components
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Combine the simplicity of Markdown with the power of React components
                for rich, interactive documentation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Code2 className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <CardTitle>Syntax Highlighting</CardTitle>
                  <CardDescription>
                    Beautiful code blocks with Shiki
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Support for 50+ languages with line highlighting, line numbers,
                and copy-to-clipboard functionality.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Palette className="h-10 w-10 text-primary flex-shrink-0" />
                <div>
                  <CardTitle>Dark Mode</CardTitle>
                  <CardDescription>
                    System-aware theme switching
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Automatic dark mode support with smooth transitions and
                persistent user preferences.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <div className="rounded-lg border bg-muted/50 p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explore our documentation to learn how to build amazing MDX Knowledge Bases 
            with modern web technologies.
          </p>
          <Button size="lg" asChild>
            <Link href="/docs/introduction">
              Read the Docs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}