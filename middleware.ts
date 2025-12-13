import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  
  // 1. Define your route lists
  const publicRoutes = [
    '/auth/signin', 
    '/auth/signup', 
    '/auth/forgotpassword', 
    '/auth/verify', 
    '/auth/updateforgotPassword'
  ]

  // Add root '/' to public if you have a landing page, otherwise remove it
  const isPublicRoute = publicRoutes.includes(path)

  // 2. Get the token from cookies (Ensure your backend sets this cookie name)
  const token = request.cookies.get('token')?.value

  // 3. Logic: User HAS Token
  if (token) {
    // If user tries to access public auth routes (like login), redirect to /home
    if (isPublicRoute) {
      return NextResponse.redirect(new URL('/home', request.url))
    }
  }

  // 4. Logic: User DOES NOT Have Token
  if (!token) {
    // If route is NOT public (meaning it is private), redirect to login
    if (!isPublicRoute) {
      return NextResponse.redirect(new URL('/auth/signin', request.url))
    }
  }

  return NextResponse.next()
}

// 5. Matcher: Apply middleware to all routes EXCEPT static files, images, etc.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}