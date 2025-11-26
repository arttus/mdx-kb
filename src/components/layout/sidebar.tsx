'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, ChevronRight, ChevronDown } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/lib/mdx';
import { useState } from 'react';

interface SidebarProps {
  navigation: NavItem[];
}

export function Sidebar({ navigation }: SidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(navigation.map((item) => item.title || ''))
  );

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  return (
    <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r bg-background md:sticky md:block">
      <ScrollArea className="h-full py-6 px-4">
        <nav className="space-y-6">
          {navigation.map((item, index) => {
            // If item has href, it's a direct link (root-level document)
            if (item.href) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted',
                    pathname === item.href
                      ? 'bg-muted font-medium text-foreground'
                      : 'text-muted-foreground'
                  )}
                >
                  <FileText className="h-4 w-4" />
                  {item.title}
                </Link>
              );
            }

            // Otherwise, it's a section with sub-items
            const isExpanded = expandedSections.has(item.title || '');

            return (
              <div key={item.title || index}>
                <button
                  onClick={() => toggleSection(item.title || '')}
                  className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-semibold transition-colors hover:bg-muted"
                >
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                  {item.title}
                </button>
                {isExpanded && item.items && (
                  <ul className="mt-1 space-y-1 ml-2">
                    {item.items.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          href={subItem.href || '#'}
                          className={cn(
                            'flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted',
                            pathname === subItem.href
                              ? 'bg-muted font-medium text-foreground'
                              : 'text-muted-foreground'
                          )}
                        >
                          <FileText className="h-4 w-4" />
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      </ScrollArea>
    </aside>
  );
}