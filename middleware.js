import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Middleware for /courses/addcourse
export async function addCourseMiddleware(request) {
    const token = await getToken({ req: request });

    if (!token) {
        return NextResponse.redirect(new URL('/notfound', request.url));
    }
}

// Middleware for /forlogin
export async function forLoginMiddleware(request) {
    const token = await getToken({ req: request });

    if (token) {
        return NextResponse.redirect(new URL('/notfound', request.url));
    }
}

// Configure middleware
export const config = {
    matcher: [
        '/courses/addcourse',
        '/forlogin'
    ],
};

export async function middleware(request) {
    if (request.nextUrl.pathname === '/courses/addcourse') {
        return addCourseMiddleware(request);
    }

    if (request.nextUrl.pathname === '/forlogin') {
        return forLoginMiddleware(request);
    }
}
