import createMiddleware from 'next-intl/middleware';

const middlewareConfig = {
  locales: ['en', 'es', 'zh'],
  defaultLocale: 'en',
};

const domains = [
  {
    domain: 'hyperce.io',
    defaultLocale: 'en',
  },
  {
    domain: 'hyperse.es',
    defaultLocale: 'es',
  },
  {
    domain: 'hyperse.zh',
    defaultLocale: 'zh',
  },
];

const middleware = createMiddleware(middlewareConfig, domains);

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/:locale(en|es|zh)/:path*'],
};
