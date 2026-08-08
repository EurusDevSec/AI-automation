// Vite eager glob import for all images, videos, and audio files in src/content
const contentAssets = import.meta.glob('../content/**/*.{png,jpg,jpeg,svg,gif,webp,JPG,PNG,JPEG,mp4,webm,mov,MP4,WEBM,mp3,wav,ogg,m4a,flac,MP3,WAV,OGG,M4A}', {
  eager: true,
  import: 'default'
});

/**
 * Resolves relative markdown media URLs (e.g. "image.png", "video.mp4", "song.mp3", "/file.docx")
 * to actual Vite bundled URLs or static public folder URLs.
 */
export function resolveMarkdownImageUrl(url) {
  if (!url) return '';

  // Return as-is if already absolute, base64, or public root path starting with /
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:') || url.startsWith('/')) {
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

  // 2. Fallback to public folder root
  return '/' + cleanName;
}
