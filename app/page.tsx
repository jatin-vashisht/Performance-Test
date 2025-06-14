import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Star, Users, Zap, Globe } from "lucide-react"
import VideoPlayer from "@/components/video-player"

// Static data for export build
const staticData = {
  stats: {
    users: "10M+",
    countries: "150+",
    uptime: "99.9%",
    speed: "< 100ms",
  },
  features: [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with edge computing and advanced caching strategies.",
    },
    {
      icon: Globe,
      title: "Global CDN",
      description: "Content delivered from the nearest edge location worldwide.",
    },
    {
      icon: Users,
      title: "Scalable",
      description: "Built to handle millions of users with automatic scaling.",
    },
  ],
}

const staticPerformanceData = {
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

const staticTestimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechCorp",
    content:
      "The performance improvements were immediate. Our page load times dropped by 60% after switching to this edge computing platform.",
    avatar: "/placeholder.svg?height=60&width=60&text=SC",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Developer at StartupXYZ",
    content:
      "Incredible developer experience combined with unmatched performance. The global CDN makes our app lightning fast worldwide.",
    avatar: "/placeholder.svg?height=60&width=60&text=MR",
    rating: 5,
  },
  {
    name: "Emily Johnson",
    role: "Product Manager at ScaleUp",
    content:
      "Our Lighthouse scores went from 70 to 98 overnight. The automatic optimization features are game-changing.",
    avatar: "/placeholder.svg?height=60&width=60&text=EJ",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Star className="w-3 h-3 mr-1" />
                  Performance Optimized
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
                  Lightning Fast
                  <span className="text-blue-600"> Edge Computing</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience the future of web performance with our globally distributed edge network. Deliver content
                  at the speed of light to users worldwide.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {Object.entries(staticData.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Performance Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Zap className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">See It In Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how our edge computing platform delivers exceptional performance across the globe with real-time
              optimization.
            </p>
          </div>

          <VideoPlayer />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Built for Performance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is designed with performance in mind, from edge caching to intelligent routing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {staticData.features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
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
                {Object.entries(staticPerformanceData.lighthouse).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="capitalize font-medium">{key.replace(/([A-Z])/g, " $1")}</span>
                      <Badge variant={value >= 90 ? "default" : value >= 70 ? "secondary" : "destructive"}>
                        {value}
                      </Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${value}%` }}></div>
                    </div>
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
                {staticPerformanceData.metrics.map((metric, index) => (
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
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${metric.score}%` }}></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted by Developers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what developers and teams are saying about our performance platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {staticTestimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Experience Lightning Speed?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust our edge computing platform for their mission-critical applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 text-white border-white bg-blue-400 hover:bg-white hover:text-blue-600"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
