# Documentation Structure

This directory contains all the documentation pages for the MDX Knowledge Base.

## Automatic Navigation

The sidebar navigation is **automatically generated** from the folder structure. You don't need to manually update any configuration files - just organize your files and folders, and the menu will reflect the structure!

## How It Works

1. **Folders become sections** - Any folder in `content/docs/` becomes a navigation section
2. **Markdown files become menu items** - Each `.md` or `.mdx` file becomes a clickable link
3. **Titles come from frontmatter** - The `title` field in frontmatter is used for the menu label
4. **Automatic ordering** - Files are sorted alphabetically by default

## Controlling Order

You can control the order of items by adding an `order` field to the frontmatter:

```yaml
---
title: "Introduction"
description: "Welcome to the docs"
order: 1
---
```

Lower numbers appear first. Items without an `order` field default to 999.

## Example Structure

```
content/docs/
├── introduction.mdx          (order: 1)
├── installation.mdx          (order: 2)
├── quick-start.mdx           (order: 3)
├── guides/
│   ├── writing-mdx.mdx
│   ├── code-blocks.mdx
│   └── diagrams.mdx
└── api/
    ├── configuration.mdx
    └── theming.mdx
```

This creates a sidebar with:
- Introduction (root level)
- Installation (root level)
- Quick Start (root level)
- Guides (section)
  - Writing MDX
  - Code Blocks
  - Diagrams
- API (section)
  - Configuration
  - Theming

## Adding New Pages

To add a new page:

1. Create a new `.md` or `.mdx` file in the appropriate folder
2. Add frontmatter with at least a `title` field
3. Optionally add an `order` field to control position
4. The page will automatically appear in the sidebar!

**Note:** Both `.md` (Markdown) and `.mdx` (MDX with JSX components) files are supported!

## Nested Folders

You can nest folders as deep as you want. Each folder level becomes a nested section in the sidebar.

## Tips

- Use descriptive folder names (they're converted to Title Case for display)
- Use the `order` field for important pages that should appear first
- Keep related content together in folders
- Use clear, concise titles in frontmatter

