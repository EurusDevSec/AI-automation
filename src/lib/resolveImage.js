// Vite eager glob import for all images and videos in src/content
const contentAssets = import.meta.glob('../content/**/*.{png,jpg,jpeg,svg,gif,webp,JPG,PNG,JPEG,mp4,webm,mov,MP4,WEBM}', {
  eager: true,
  import: 'default'
});

/**
 * Resolves relative markdown image and video URLs (e.g. "image.png", "video.mp4")
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
  for (const path in contentAssets) {
    if (path.endsWith('/' + cleanName) || path === '../content/' + cleanName) {
      return contentAssets[path];
    }
  }

  // 2. Fallback to public folder
  return url.startsWith('/') ? url : '/' + cleanName;
}
