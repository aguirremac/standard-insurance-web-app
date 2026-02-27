type RateLimitRecord = {
  count: number
  lastReset: number
}

const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const RATE_LIMIT_MAX = 20 // 20 requests per minute per IP

const ipMap = new Map<string, RateLimitRecord>()

export function rateLimit(ip: string) {
  const now = Date.now()
  const record = ipMap.get(ip)

  if (!record) {
    ipMap.set(ip, { count: 1, lastReset: now })
    return { success: true }
  }

  if (now - record.lastReset > RATE_LIMIT_WINDOW) {
    ipMap.set(ip, { count: 1, lastReset: now })
    return { success: true }
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return { success: false }
  }

  record.count++
  return { success: true }
}