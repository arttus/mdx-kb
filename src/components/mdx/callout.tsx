import type { ReactNode } from 'react';
import { AlertCircle, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

interface CalloutProps {
  type?: 'info' | 'warning' | 'error' | 'success';
  children: ReactNode;
  title?: string;
}

const calloutStyles = {
  info: {
    container: 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900',
    icon: 'text-blue-600 dark:text-blue-400',
    title: 'text-blue-900 dark:text-blue-100',
    Icon: Info,
  },
  warning: {
    container: 'bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-900',
    icon: 'text-yellow-600 dark:text-yellow-400',
    title: 'text-yellow-900 dark:text-yellow-100',
    Icon: AlertTriangle,
  },
  error: {
    container: 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900',
    icon: 'text-red-600 dark:text-red-400',
    title: 'text-red-900 dark:text-red-100',
    Icon: AlertCircle,
  },
  success: {
    container: 'bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900',
    icon: 'text-green-600 dark:text-green-400',
    title: 'text-green-900 dark:text-green-100',
    Icon: CheckCircle2,
  },
};

export function Callout({ type = 'info', children, title }: CalloutProps) {
  const style = calloutStyles[type];
  const Icon = style.Icon;

  return (
    <div className={`my-6 flex gap-3 rounded-lg border p-4 ${style.container}`}>
      <Icon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${style.icon}`} />
      <div className="flex-1">
        {title && (
          <p className={`font-semibold mb-1 ${style.title}`}>{title}</p>
        )}
        <div className="text-sm [&>p]:mb-0">{children}</div>
      </div>
    </div>
  );
}