import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    <section className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Plan</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            CRMGo SaaS - Projects, Accounting, Leads, Deals & HRM Tool
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Add pricing plans here */}
        </div>
      </div>
    </section>
  )
}

