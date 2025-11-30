import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 5 team members",
      "Basic AI automation",
      "5,000 tasks/month",
      "Email support",
      "Core integrations",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "79",
    description: "For growing teams and organizations",
    features: [
      "Up to 50 team members",
      "Advanced AI automation",
      "Unlimited tasks",
      "Priority support",
      "500+ integrations",
      "Advanced analytics",
      "Custom workflows",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations",
    features: [
      "Unlimited team members",
      "Custom AI models",
      "Unlimited everything",
      "24/7 dedicated support",
      "SSO & SAML",
      "Advanced security",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-muted-foreground">Choose the perfect plan for your team. No hidden fees.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border transition ${
                plan.highlighted
                  ? "border-primary bg-primary/5 scale-105 md:scale-100 relative"
                  : "border-border bg-background"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">${plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition mb-8 ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {plan.cta}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
