import { Button } from "@/components/ui/button"

export function DiscoverSection() {
  return (
    <section className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Discover More
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Use these awesome forms to login or create new account in your project for free.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Button size="lg">Live Demo</Button>
          <Button size="lg" variant="outline">Buy Now</Button>
        </div>
      </div>
    </section>
  )
}

