import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

// Simulate server-side performance data
async function getPerformanceData() {
  await new Promise((resolve) => setTimeout(resolve, 50))

  return {
    lighthouse: {
      performance: 98,
      accessibility: 100,
      bestPractices: 95,
      seo: 100,
    },
    metrics: [
      { name: "First Contentful Paint", value: "0.8s", score: 95 },
      { name: "Largest Contentful Paint", value: "1.2s", score: 92 },
      { name: "Cumulative Layout Shift", value: "0.02", score: 98 },
      { name: "Time to Interactive", value: "1.5s", score: 90 },
    ],
  }
}

export default async function PerformanceMetrics() {
  const data = await getPerformanceData()

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Performance Metrics</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world performance data showing exceptional Lighthouse scores and Core Web Vitals optimization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Lighthouse Scores */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">L</span>
                </div>
                Lighthouse Scores
              </CardTitle>
              <CardDescription>Google Lighthouse performance audit results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(data.lighthouse).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="capitalize font-medium">{key.replace(/([A-Z])/g, " $1")}</span>
                    <Badge variant={value >= 90 ? "default" : value >= 70 ? "secondary" : "destructive"}>{value}</Badge>
                  </div>
                  <Progress value={value} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Core Web Vitals */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm">W</span>
                </div>
                Core Web Vitals
              </CardTitle>
              <CardDescription>Essential metrics for user experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {data.metrics.map((metric, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-sm">{metric.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono">{metric.value}</span>
                      <Badge
                        variant={metric.score >= 90 ? "default" : metric.score >= 70 ? "secondary" : "destructive"}
                      >
                        {metric.score}
                      </Badge>
                    </div>
                  </div>
                  <Progress value={metric.score} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
