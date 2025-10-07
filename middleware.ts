import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'fr'];

// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest) {
  const { headers } = request;
  const acceptLanguage = headers.get('accept-language');
  const browserLanguage = acceptLanguage?.split(',')[0].toLowerCase();

  // Check if the browser language is supported
  if (browserLanguage && locales.includes(browserLanguage.split('-')[0])) {
    return browserLanguage.split('-')[0];
  }

  return 'en'; // Default to English
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*) ',
    // Optional: only run on root (/) URL
    // '/',
  ],
};
