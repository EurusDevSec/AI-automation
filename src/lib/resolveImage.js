// Vite eager glob import for all images, videos, and audio files in src/content
const contentAssets = import.meta.glob('../content/**/*.{png,jpg,jpeg,svg,gif,webp,JPG,PNG,JPEG,mp4,webm,mov,MP4,WEBM,mp3,wav,ogg,m4a,flac,MP3,WAV,OGG,M4A}', {
  eager: true,
  import: 'default'
});

/**
 * Resolves relative markdown media URLs (e.g. "image.png", "video.mp4", "song.mp3", "/file.docx")
 * to actual Vite bundled URLs or static public folder URLs.
 */
export function resolveMarkdownImageUrl(url, sessionNumber, lessonNumber) {
  if (!url) return '';

  // Return as-is if already absolute, base64, or public root path starting with /
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:') || url.startsWith('/')) {
    return url;
  }

  // Normalize path
  const cleanName = url.replace(/^\.\//, '').trim();

  // 1. If both sessionNumber and lessonNumber are provided, search lesson folder first (e.g. ../content/buoi_3/bai_1/)
  if (sessionNumber && lessonNumber) {
    const lessonPrefix = `../content/buoi_${sessionNumber}/bai_${lessonNumber}/`;
    for (const path in contentAssets) {
      if (path.startsWith(lessonPrefix) && path.endsWith('/' + cleanName)) {
        return contentAssets[path];
      }
    }
  }

  // 2. If sessionNumber is provided, search matching session folder (e.g. ../content/buoi_3/)
  if (sessionNumber) {
    const sessionPrefix = `../content/buoi_${sessionNumber}/`;
    for (const path in contentAssets) {
      if (path.startsWith(sessionPrefix) && path.endsWith('/' + cleanName)) {
        return contentAssets[path];
      }
    }
  }

  // 3. Search in src/content glob map
  for (const path in contentAssets) {
    if (path.endsWith('/' + cleanName) || path === '../content/' + cleanName) {
      return contentAssets[path];
    }
  }

  // 4. Fallback to public folder root
  return '/' + cleanName;
}
