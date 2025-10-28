'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

interface MermaidProps {
  chart: string;
  id?: string;
}

export function Mermaid({ chart, id }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const uniqueId = useRef(id || `mermaid-${Math.random().toString(36).substr(2, 9)}`);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const renderDiagram = async () => {
      try {
        const mermaid = (await import('mermaid')).default;
        
        mermaid.initialize({ 
          startOnLoad: false,
          theme: theme === 'dark' ? 'dark' : 'neutral',
          securityLevel: 'loose',
        });

        if (ref.current) {
          ref.current.innerHTML = '';
          const { svg } = await mermaid.render(uniqueId.current, chart);
          ref.current.innerHTML = svg;
          setError(null);
        }
      } catch (err) {
        console.error('Mermaid rendering error:', err);
        setError('Failed to render diagram');
      }
    };

    renderDiagram();
  }, [chart, theme]);

  if (error) {
    return (
      <div className="my-6 p-4 border border-destructive rounded-lg bg-destructive/10">
        <p className="text-sm text-destructive">{error}</p>
      </div>
    );
  }

  return <div ref={ref} className="my-6 flex justify-center overflow-x-auto" />;
}