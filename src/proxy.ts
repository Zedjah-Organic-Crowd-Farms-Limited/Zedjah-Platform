import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // If we are already on the maintenance page, do nothing
  if (request.nextUrl.pathname.startsWith('/maintenance')) {
    return NextResponse.next();
  }

  // Redirect all other requests to the maintenance page
  return NextResponse.redirect(new URL('/maintenance', request.url));
}

// Configure which paths the proxy should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - images, public files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
