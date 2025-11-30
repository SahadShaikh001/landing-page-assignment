const stats = [
  {
    number: "98%",
    label: "Faster Execution",
    company: "Used by Stripe",
  },
  {
    number: "10M+",
    label: "Tasks Processed Daily",
    company: "Used by Vercel",
  },
  {
    number: "50K+",
    label: "Active Teams",
    company: "Used by OpenAI",
  },
  {
    number: "99.9%",
    label: "Uptime SLA",
    company: "Used by AWS",
  },
]

export default function Stats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <p className="text-lg text-foreground mb-3">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
