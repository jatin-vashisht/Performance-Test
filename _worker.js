export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    
    // Handle API routes
    if (url.pathname.startsWith('/api/')) {
      return new Response(JSON.stringify({
        message: "API handled by Cloudflare Workers",
        timestamp: new Date().toISOString(),
        region: request.cf?.colo || 'unknown'
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 's-maxage=60, stale-while-revalidate=300'
        }
      })
    }
    
    // Serve static files
    return env.ASSETS.fetch(request)
  }
}