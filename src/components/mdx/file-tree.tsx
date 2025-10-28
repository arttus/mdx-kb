import type { ReactNode } from 'react';
import { File, Folder } from 'lucide-react';

interface FileTreeProps {
  children: ReactNode;
}

export function FileTree({ children }: FileTreeProps) {
  return (
    <div className="my-6 rounded-lg border bg-muted/30 p-4">
      <div className="font-mono text-sm space-y-1">
        {children}
      </div>
    </div>
  );
}

interface FileTreeItemProps {
  name: string;
  type?: 'file' | 'folder';
  level?: number;
}

export function FileTreeItem({ name, type = 'file', level = 0 }: FileTreeItemProps) {
  const Icon = type === 'folder' ? Folder : File;
  const paddingLeft = level * 1.5;

  return (
    <div 
      className="flex items-center gap-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
      style={{ paddingLeft: `${paddingLeft}rem` }}
    >
      <Icon className="h-4 w-4 flex-shrink-0" />
      <span>{name}</span>
    </div>
  );
}