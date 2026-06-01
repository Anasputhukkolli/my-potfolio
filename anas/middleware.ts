// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Just let it through — the page handles its own password gate
  return NextResponse.next();
}

export const config = { matcher: ['/admin'] };