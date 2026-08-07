// Vite eager glob import for all images in src/content
const contentImages = import.meta.glob('../content/**/*.{png,jpg,jpeg,svg,gif,webp,JPG,PNG,JPEG}', {
  eager: true,
  import: 'default'
});

/**
 * Resolves relative markdown image URLs (e.g. "image.png", "./image-1.png", "buoi-1/image.png")
 * to actual Vite bundled URLs.
 */
export function resolveMarkdownImageUrl(url) {
  if (!url) return '';

  // Return as-is if already absolute or base64
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) {
    return url;
  }

  // Normalize path
  const cleanName = url.replace(/^\.\//, '').trim();

  // 1. Search in src/content glob map
  for (const path in contentImages) {
    if (path.endsWith('/' + cleanName) || path === '../content/' + cleanName) {
      return contentImages[path];
    }
  }

  // 2. Fallback to public folder
  return url.startsWith('/') ? url : '/' + cleanName;
}
