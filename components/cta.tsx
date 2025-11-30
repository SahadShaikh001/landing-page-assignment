import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 text-balance">
          Join thousands of teams already using TaskFlow to work smarter and ship faster.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition font-semibold flex items-center justify-center gap-2 group">
            Start Free Trial
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </button>
          <button className="px-8 py-4 border border-border text-foreground rounded-full hover:bg-muted transition font-semibold">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  )
}
