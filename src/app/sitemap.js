export default function sitemap() {
  const baseUrl = 'https://www.askmymoon.com';
  const routes = ['', '/about', '/privacy', '/terms'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'yearly',
    priority: route === '' ? 1 : 0.5,
  }));
}