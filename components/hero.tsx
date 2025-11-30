import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block mb-4 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Introducing TaskFlow Pro
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Build Faster, Ship Smarter
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            TaskFlow uses advanced AI to streamline your workflow, automate tedious tasks, and help teams collaborate
            seamlessly. Ship products 10x faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition font-semibold flex items-center justify-center gap-2 group">
              Start Building Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </button>
            <button className="px-8 py-4 border border-border text-foreground rounded-full hover:bg-muted transition font-semibold">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="mt-16">
          <img
            src="/dashboard-interface-with-analytics-and-task-manage.jpg"
            alt="TaskFlow Dashboard"
            className="w-full rounded-2xl border border-border shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
