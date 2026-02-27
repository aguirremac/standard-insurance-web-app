import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT = 5; // requests
const WINDOW_MS = 60 * 1000; // per minute

// simple in-memory store
const ipStore = new Map<string, { count: number; time: number }>();

const BOT_UA = [
  "bot",
  "crawler",
  "spider",
  "curl",
  "wget",
  "python",
  "axios",
  "node-fetch",
];

export function middleware(req: NextRequest) {
  const ua = req.headers.get("user-agent")?.toLowerCase() || "";

  // 🚫 block empty UA
  if (!ua) {
    return new NextResponse("Blocked", { status: 403 });
  }

  // 🚫 block known bots
  if (BOT_UA.some((b) => ua.includes(b))) {
    return new NextResponse("Blocked", { status: 403 });
  }

  const ip =
    req?.ip ??
    req.headers.get("x-forwarded-for")?.split(",")[0] ??
    "anonymous";

  const now = Date.now();
  const record = ipStore.get(ip);

  if (!record) {
    ipStore.set(ip, { count: 1, time: now });
  } else {
    if (now - record.time < WINDOW_MS) {
      record.count++;

      if (record.count > RATE_LIMIT) {
        return new NextResponse("Too many requests", { status: 429 });
      }
    } else {
      ipStore.set(ip, { count: 1, time: now });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"], // protect API only
};