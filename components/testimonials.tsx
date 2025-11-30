import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Lead at TechCorp",
    content:
      "TaskFlow transformed how our team works. We went from managing 5 different tools to one unified platform. Incredible productivity boost.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "CEO at StartupXYZ",
    content:
      "The AI automation alone has saved us hundreds of hours per month. Best investment we made for our team. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Engineering Manager at InnovateLabs",
    content:
      "The real-time collaboration features are game-changing. Our sprint cycles are now 40% faster. TaskFlow is a must-have tool.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Loved by Teams Worldwide</h2>
          <p className="text-xl text-muted-foreground">See what our customers have to say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
