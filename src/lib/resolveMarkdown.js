// Vite eager glob import for all markdown files in src/content
const allMarkdownFiles = import.meta.glob('../content/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
});

/**
 * Parses raw markdown text containing === SUBTAB: markers into structured methods/sections.
 */

function parseSubtabsFromMarkdown(rawText) {
  if (!rawText) return [];
  if (!rawText.includes('=== SUBTAB:')) {
    return [{ id: 'default', label: 'Bài học', content: rawText.trim() }];
  }

  const parts = rawText.split('=== SUBTAB: ');
  const methods = [];

  for (let i = 1; i < parts.length; i++) {
    const lines = parts[i].split('\n');
    const label = lines[0].trim();
    const content = lines.slice(1).join('\n').trim();
    methods.push({
      id: `method-${i}`,
      label: label.replace(/===/g, '').trim(),
      content
    });
  }

  return methods;
}

/**
 * Helper to extract title and icon from exercise markdown
 */
function extractTitleAndIcon(rawText, fileName) {
  const lines = rawText.split('\n');
  let title = '';

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('# ') || trimmed.startsWith('## ')) {
      title = trimmed.replace(/^#{1,2}\s+/, '').trim();
      break;
    }
  }

  if (!title) {
    const numMatch = fileName.match(/\d+/);
    title = numMatch ? `Bài ${numMatch[0]}` : fileName.replace('.md', '');
  }

  let icon = '📘';
  if (title.toLowerCase().includes('rss')) icon = '📰';
  else if (title.toLowerCase().includes('ai') || title.toLowerCase().includes('summarizer')) icon = '🤖';
  else if (title.toLowerCase().includes('notion') || title.toLowerCase().includes('calendar')) icon = '🗂️';
  else if (title.toLowerCase().includes('alert') || title.toLowerCase().includes('cảnh báo')) icon = '⚡';

  return { title, icon };
}

/**
 * Returns structured markdown data for a lesson.
 */
export function getLessonStructuredData(sessionNumber, fallbackContent = '') {
  const subFolderPrefix = `../content/buoi_${sessionNumber}/`;
  const subFiles = Object.keys(allMarkdownFiles)
    .filter((path) => path.startsWith(subFolderPrefix))
    .sort();

  if (subFiles.length > 0) {
    let intro = '';
    const exercises = [];

    for (const path of subFiles) {
      const fileName = path.replace(subFolderPrefix, '');
      const rawText = allMarkdownFiles[path] || '';

      if (fileName === 'index.md') {
        intro = rawText;
      } else {
        const { title, icon } = extractTitleAndIcon(rawText, fileName);
        const methods = parseSubtabsFromMarkdown(rawText);

        exercises.push({
          id: fileName.replace('.md', ''),
          fileName,
          title,
          icon,
          rawText,
          methods
        });
      }
    }

    return {
      type: 'multi',
      intro,
      exercises
    };
  }

  // Fallback to single file mode (src/content/buoi_X.md)
  const singleFilePath = `../content/buoi_${sessionNumber}.md`;
  const rawText = allMarkdownFiles[singleFilePath] || fallbackContent;
  const methods = parseSubtabsFromMarkdown(rawText);

  return {
    type: 'single',
    intro: '',
    exercises: [
      {
        id: `buoi_${sessionNumber}`,
        fileName: `buoi_${sessionNumber}.md`,
        title: `Buổi ${sessionNumber}`,
        icon: '📘',
        rawText,
        methods
      }
    ]
  };
}

/**
 * Backward compatibility helper that returns concatenated raw markdown string
 */
export function getLessonMarkdown(sessionNumber, fallbackContent = '') {
  const data = getLessonStructuredData(sessionNumber, fallbackContent);
  if (data.type === 'single') return data.exercises[0].rawText;

  const parts = [];
  if (data.intro) parts.push(data.intro);
  data.exercises.forEach((ex) => {
    parts.push(ex.rawText);
  });

  return parts.join('\n\n');
}
