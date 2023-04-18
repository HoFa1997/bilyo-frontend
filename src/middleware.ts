// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { HOST_URI } from "./utils/constant";

export async function middleware(request: NextRequest) {
  const token = request.headers.get("cookie");

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const res = await fetch(`${HOST_URI}/auth/isvalid`, {
    method: "GET",
    credentials: "include",
    headers: { Cookie: token },
  });
  const data = await res.json();

  if (data.message !== "OK") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
