'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/lib/mdx';

interface SidebarProps {
  navigation: NavItem[];
}

export function Sidebar({ navigation }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r bg-background md:sticky md:block">
      <ScrollArea className="h-full py-6 px-4">
        <nav className="space-y-6">
          {navigation.map((section) => (
            <div key={section.title}>
              <h4 className="mb-2 px-2 text-sm font-semibold">{section.title}</h4>
              {section.items && (
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href || '#'}
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
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}