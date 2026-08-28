export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/checkout', '/report'],
    },
    sitemap: 'https://www.askmymoon.com/sitemap.xml',
  };
}