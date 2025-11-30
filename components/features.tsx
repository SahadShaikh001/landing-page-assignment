import { Zap, Users, BarChart3, Shield, Cpu, Clock } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description:
      "Let AI handle repetitive tasks. Our intelligent algorithms learn your workflow patterns and automate them automatically.",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description:
      "Work together seamlessly with your team. Assign tasks, share feedback, and iterate faster than ever before.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Gain deep insights into your productivity metrics. Track progress, identify bottlenecks, and optimize your workflow.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Your data is protected with military-grade encryption and compliance with SOC 2, GDPR, and HIPAA standards.",
  },
  {
    icon: Cpu,
    title: "Powerful Integrations",
    description:
      "Connect with 500+ tools including Slack, Jira, GitHub, and more. Centralize your entire workflow in one place.",
  },
  {
    icon: Clock,
    title: "Lightning Fast",
    description:
      "Experience sub-millisecond response times. Built on cutting-edge infrastructure for maximum performance.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Built with teams in mind. All the tools you need to manage projects, collaborate effectively, and ship
            faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/50 transition group cursor-pointer"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
