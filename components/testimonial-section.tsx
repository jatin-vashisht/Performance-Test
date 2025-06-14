import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

// Simulate server-side testimonial data
async function getTestimonials() {
  await new Promise((resolve) => setTimeout(resolve, 50))

  return [
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
}

export default async function TestimonialSection() {
  const testimonials = await getTestimonials()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted by Developers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what developers and teams are saying about our performance platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
  )
}
