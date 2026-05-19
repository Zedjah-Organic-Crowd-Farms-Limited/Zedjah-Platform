/**
 * Simple in-memory rate limiter using a sliding window.
 * Works per serverless instance. Good enough for basic API protection.
 * For distributed rate limiting at scale, use @upstash/ratelimit + Redis.
 */

interface RateLimitEntry {
  count: number;
  windowStart: number;
}

const store = new Map<string, RateLimitEntry>();

interface RateLimitOptions {
  /** Max number of requests allowed in the window */
  limit: number;
  /** Window duration in milliseconds */
  windowMs: number;
}

export function rateLimit(ip: string, options: RateLimitOptions): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const { limit, windowMs } = options;

  const entry = store.get(ip);

  if (!entry || now - entry.windowStart > windowMs) {
    // New window
    store.set(ip, { count: 1, windowStart: now });
    return { allowed: true, remaining: limit - 1 };
  }

  if (entry.count >= limit) {
    return { allowed: false, remaining: 0 };
  }

  entry.count++;
  return { allowed: true, remaining: limit - entry.count };
}

/** Helper to extract the real IP from a Next.js request */
export function getIP(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}
