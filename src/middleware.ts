import { NextResponse } from 'next/server';
  import type { NextRequest } from 'next/server';

  export function middleware(req: NextRequest) {
    const token = req.cookies.get('token') || req.headers.get('authorization')?.split(' ')[1];
    const { pathname } = req.nextUrl;

    if (!token && pathname.startsWith('/dashboard')) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    if (token && (pathname === '/login' || pathname === '/sign-up')) {
      return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return NextResponse.next();
  }

  export const config = {
    matcher: ['/dashboard/:path*', '/login', '/sign-up'],
  };