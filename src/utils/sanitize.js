import DOMPurify from 'dompurify';

/**
 * Enterprise-grade HTML Sanitization Utility.
 * Wraps local DOMPurify with strict configurations to ensure all injected HTML is safe.
 * 
 * @param {string} dirtyHtml - The untrusted HTML string
 * @returns {string} - Clean, safe HTML ready for innerHTML
 */
export function sanitizeHTML(dirtyHtml) {
  if (typeof dirtyHtml !== 'string') return '';
  
  return DOMPurify.sanitize(dirtyHtml, {
    ALLOWED_TAGS: [
      'b', 'i', 'em', 'strong', 'a', 'p', 'br', 'ul', 'ol', 'li', 
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'code', 'pre',
      'span', 'div', 'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'svg', 'path', 'circle', 'line', 'polyline', 'polygon', 'rect', 'g'
    ],
    ALLOWED_ATTR: [
      'href', 'title', 'target', 'src', 'alt', 'class', 'style', 'width', 'height',
      'viewBox', 'fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin',
      'd', 'cx', 'cy', 'r', 'xmlns'
    ],
    ALLOW_DATA_ATTR: false,
    RETURN_DOM: false,
    RETURN_DOM_FRAGMENT: false,
    RETURN_DOM_IMPORT: false
  });
}
