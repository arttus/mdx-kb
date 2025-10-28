import type { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/sidebar';
import { generateNavigation } from '@/lib/mdx';

interface DocsLayoutProps {
  children: ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const navigation = generateNavigation();

  return (
    <div className="container mx-auto px-4 max-w-7xl flex-1">
      <div className="flex gap-6 lg:gap-10">
        <Sidebar navigation={navigation} />
        <div className="flex-1 py-6 lg:py-8">
          {children}
        </div>
      </div>
    </div>
  );
}