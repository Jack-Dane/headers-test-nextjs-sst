import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  let headers = new Headers(request.headers);
  headers.set("test-header", "abc");

  return NextResponse.next({
    headers: headers
  });
}
