import { Suspense } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Star, Users, Zap, Globe } from "lucide-react"
import VideoPlayer from "@/components/video-player"
import PerformanceMetrics from "@/components/performance-metrics"
import TestimonialSection from "@/components/testimonial-section"

// Simulate server-side data fetching
async function getServerData() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  return {
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
}

export default async function HomePage() {
  const data = await getServerData()

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
                {Object.entries(data.stats).map(([key, value]) => (
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
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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

          <Suspense fallback={<div className="w-full h-96 bg-gray-200 rounded-lg animate-pulse" />}>
            <VideoPlayer />
          </Suspense>
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
            {data.features.map((feature, index) => (
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
      <Suspense
        fallback={
          <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 h-64 bg-gray-200 rounded-lg animate-pulse" />
          </div>
        }
      >
        <PerformanceMetrics />
      </Suspense>

      {/* Testimonials */}
      <Suspense
        fallback={
          <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 h-64 bg-gray-200 rounded-lg animate-pulse" />
          </div>
        }
      >
        <TestimonialSection />
      </Suspense>

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
              className="text-lg px-8 text-white border-white hover:bg-white hover:text-blue-600"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
