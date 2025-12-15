import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  const sessionCookie = request.cookies.get("session")
  const pathname = request.nextUrl.pathname

  // Public routes
  const publicRoutes = ["/login", "/cadastro"]
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route))

  // If no session and trying to access protected route
  if (!sessionCookie && !isPublicRoute && pathname !== "/") {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // If has session and trying to access auth pages
  if (sessionCookie && isPublicRoute) {
    try {
      const session = JSON.parse(sessionCookie.value)
      const redirectUrl = session.user.role === "admin" ? "/admin" : "/dashboard"
      return NextResponse.redirect(new URL(redirectUrl, request.url))
    } catch {
      // Invalid session, let them through to login
    }
  }

  // Role-based access control
  if (sessionCookie) {
    try {
      const session = JSON.parse(sessionCookie.value)

      // Admin routes
      if (pathname.startsWith("/admin") && session.user.role !== "admin") {
        return NextResponse.redirect(new URL("/dashboard", request.url))
      }

      // Dentist routes
      if (pathname.startsWith("/dashboard") && session.user.role === "admin") {
        return NextResponse.redirect(new URL("/admin", request.url))
      }
    } catch {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
