import { NextRequest, NextFetchEvent, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.ua?.isBot) {
    return new Response("Plz Don`t be a bot", { status: 403 }); // If user is a bot, Shows the Response message on screen (prevents to access)
  } // can set a status code in Response()

  if (!req.url.includes("/api")) {
    if (!req.url.includes("/enter") && !req.cookies.carrotSession) {
      return NextResponse.redirect("/enter"); // If user is not logged in, redirects to '/enter' page
    }
  }
}
