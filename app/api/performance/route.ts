import { NextResponse } from "next/server"

export async function GET() {
  // Simulate performance data fetching
  const performanceData = {
    timestamp: new Date().toISOString(),
    metrics: {
      ttfb: Math.random() * 100 + 50, // 50-150ms
      fcp: Math.random() * 500 + 800, // 800-1300ms
      lcp: Math.random() * 800 + 1200, // 1200-2000ms
      cls: Math.random() * 0.05, // 0-0.05
      fid: Math.random() * 50 + 10, // 10-60ms
    },
    region: process.env.VERCEL_REGION || "unknown",
    deployment: process.env.VERCEL_URL || "localhost",
  }

  return NextResponse.json(performanceData, {
    status: 200,
    headers: {
      "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
      "CDN-Cache-Control": "s-maxage=300",
      "Vercel-CDN-Cache-Control": "s-maxage=3600",
    },
  })
}
