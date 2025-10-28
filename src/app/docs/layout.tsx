import type { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/sidebar';

interface DocsLayoutProps {
  children: ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="container mx-auto px-4 max-w-7xl flex-1">
      <div className="flex gap-6 lg:gap-10">
        <Sidebar />
        <div className="flex-1 py-6 lg:py-8">
          {children}
        </div>
      </div>
    </div>
  );
}