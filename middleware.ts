import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //return NextResponse.next() => permite o acesso a rota.
  //return NextResponse.reWrite('rota') => reescreve a rota.
  //return NextResponse.redirect('rota') => redireciona para outra rota rota.
  if (request.nextUrl.pathname.startsWith("/nonexistent")) {
    return NextResponse.redirect("http://localhost:3000/404");
  }
}
