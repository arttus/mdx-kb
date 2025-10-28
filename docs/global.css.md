@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Space+Grotesk:wght@600;700;800&family=Jost:wght@500&display=swap');
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-inter);
  --font-display: var(--font-space-grotesk);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --color-cyan: var(--cyan);
  --color-purple: var(--purple);
  --color-pink: var(--pink);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  --radius: 12px;
  --background: #FFFFFF;
  --foreground: #0A0A0A;
  --card: #F5F5F5;
  --card-foreground: #0A0A0A;
  --popover: #FFFFFF;
  --popover-foreground: #0A0A0A;
  --primary: #00D9FF;
  --primary-foreground: #0A0A0A;
  --secondary: #F5F5F5;
  --secondary-foreground: #0A0A0A;
  --muted: #E5E5E5;
  --muted-foreground: #606060;
  --accent: #8B5CF6;
  --accent-foreground: #FFFFFF;
  --destructive: #D63D73;
  --border: #E5E5E5;
  --input: #F5F5F5;
  --ring: #00D9FF;
  --chart-1: #00D9FF;
  --chart-2: #8B5CF6;
  --chart-3: #EC4899;
  --chart-4: #F59E0B;
  --chart-5: #10B981;
  --sidebar: #FFFFFF;
  --sidebar-foreground: #0A0A0A;
  --sidebar-primary: #00D9FF;
  --sidebar-primary-foreground: #0A0A0A;
  --sidebar-accent: #F5F5F5;
  --sidebar-accent-foreground: #0A0A0A;
  --sidebar-border: #E5E5E5;
  --sidebar-ring: #00D9FF;
  --cyan: #00D9FF;
  --purple: #8B5CF6;
  --pink: #EC4899;
  --font-inter: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-space-grotesk: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.dark {
  --background: #0A0A0A;
  --foreground: #FFFFFF;
  --card: #1A1A1A;
  --card-foreground: #FFFFFF;
  --popover: #1A1A1A;
  --popover-foreground: #FFFFFF;
  --primary: #00D9FF;
  --primary-foreground: #0A0A0A;
  --secondary: #1A1A1A;
  --secondary-foreground: #FFFFFF;
  --muted: #2A2A2A;
  --muted-foreground: #A0A0A0;
  --accent: #8B5CF6;
  --accent-foreground: #FFFFFF;
  --destructive: #D6467F;
  --border: #2A2A2A;
  --input: #2A2A2A;
  --ring: #00D9FF;
  --chart-1: #00D9FF;
  --chart-2: #8B5CF6;
  --chart-3: #EC4899;
  --chart-4: #F59E0B;
  --chart-5: #10B981;
  --sidebar: #111111;
  --sidebar-foreground: #FFFFFF;
  --sidebar-primary: #00D9FF;
  --sidebar-primary-foreground: #0A0A0A;
  --sidebar-accent: #1A1A1A;
  --sidebar-accent-foreground: #FFFFFF;
  --sidebar-border: #2A2A2A;
  --sidebar-ring: #00D9FF;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground font-sans;
    font-family: var(--font-inter);
    min-width: 360px;
  }
}

/* Layout Utilities */
@utility site-container {
  max-width: 80rem; /* 5xl = 1280px */
  min-width: 360px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Custom Typography Utilities */
@utility heading-hero {
  font-family: 'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

@utility heading-xl {
  font-family: 'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

@utility heading-lg {
  font-family: 'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 500;
  line-height: 1.3;
}

@utility heading-md {
  font-family: 'Jost', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: clamp(1.25rem, 2.5vw, 1.875rem);
  font-weight: 500;
  line-height: 1.4;
}

@utility body-lg {
  font-size: 1.125rem;
  line-height: 1.7;
  font-weight: 400;
}

@utility body-base {
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
}

@utility phone-number {
  font-family: var(--font-space-grotesk);
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
  letter-spacing: 0.05em;
}

/* Gradient Utilities */
@utility gradient-cyan-purple {
  background: linear-gradient(135deg, #00D9FF 0%, #8B5CF6 100%);
  color: white !important;
  font-weight: bold !important;
}

.dark .gradient-cyan-purple {
  color: white !important;
  font-weight: bold !important;
}

@utility gradient-purple-pink {
  background: linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%);
  color: white !important;
  font-weight: bold !important;
}

.dark .gradient-purple-pink {
  color: white !important;
  font-weight: bold !important;
}

@utility gradient-text {
  background: linear-gradient(135deg, #00D9FF 0%, #8B5CF6 50%, #EC4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@utility gradient-text-cyan {
  background: linear-gradient(135deg, #00D9FF 0%, #8B5CF6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glass Morphism */
@utility glass {
  background: rgba(245, 245, 245, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

@utility glass-strong {
  background: rgba(245, 245, 245, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.dark .glass {
  background: rgba(26, 26, 26, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .glass-strong {
  background: rgba(26, 26, 26, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

/* Glow Effects */
@utility glow-cyan {
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.3), 0 0 40px rgba(0, 217, 255, 0.1);
}

@utility glow-purple {
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1);
}

@utility glow-text-cyan {
  text-shadow: 0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.2);
}

/* Animations */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 217, 255, 0.3), 0 0 40px rgba(0, 217, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 30px rgba(0, 217, 255, 0.5), 0 0 60px rgba(0, 217, 255, 0.2);
  }
}

@utility animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Mobile Optimizations */
@media (max-width: 768px) {
  /* Hide scrollbar on mobile for sticky nav */
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* Ensure touch targets are at least 48px */
  button, a {
    min-height: 44px;
    min-width: 44px;
  }

  /* Optimize card spacing on mobile */
  .site-container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Reduce heading sizes on mobile */
  .heading-xl {
    font-size: 2rem;
    line-height: 2.25rem;
  }

  .heading-lg {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  /* Optimize sticky nav for mobile */
  .sticky-nav-mobile {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}

/* Tablet Optimizations */
@media (min-width: 768px) and (max-width: 1024px) {
  .site-container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* Performance: Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}