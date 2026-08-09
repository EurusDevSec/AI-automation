// Vite eager glob import for all markdown files in src/content
const allMarkdownFiles = import.meta.glob('../content/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
});

/**
 * Dynamically resolves lesson markdown content.
 * Supports both:
 * 1. Sub-folder mode: src/content/buoi_X/ (index.md, bai_1.md, bai_2.md, ...)
 * 2. Single file mode: src/content/buoi_X.md
 */
export function getLessonMarkdown(sessionNumber, fallbackContent = '') {
  const subFolderPrefix = `../content/buoi_${sessionNumber}/`;
  const subFiles = Object.keys(allMarkdownFiles)
    .filter((path) => path.startsWith(subFolderPrefix))
    .sort();

  if (subFiles.length > 0) {
    let introContent = '';
    const tabParts = [];

    for (const path of subFiles) {
      const fileName = path.replace(subFolderPrefix, '');
      const rawText = allMarkdownFiles[path] || '';

      if (fileName === 'index.md') {
        introContent = rawText + '\n\n';
      } else {
        // If rawText already contains === SUBTAB:, use as is
        if (rawText.includes('=== SUBTAB:')) {
          tabParts.push(rawText);
        } else {
          // Extract first H1/H2 header for subtab title
          let tabTitle = '';
          const lines = rawText.split('\n');
          for (const l of lines) {
            if (l.trim().startsWith('# ') || l.trim().startsWith('## ')) {
              tabTitle = l.trim().replace(/^#{1,2}\s+/, '');
              break;
            }
          }
          if (!tabTitle) {
            const numMatch = fileName.match(/\d+/);
            tabTitle = numMatch ? `Bài ${numMatch[0]}` : fileName.replace('.md', '');
          }
          tabParts.push(`=== SUBTAB: ${tabTitle} ===\n${rawText}`);
        }
      }
    }

    return (introContent + tabParts.join('\n\n')).trim();
  }

  // Fallback to single file src/content/buoi_X.md
  const singleFilePath = `../content/buoi_${sessionNumber}.md`;
  if (allMarkdownFiles[singleFilePath]) {
    return allMarkdownFiles[singleFilePath];
  }

  return fallbackContent;
}
