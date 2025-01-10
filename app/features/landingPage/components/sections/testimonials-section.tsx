import {
    Card,
    CardContent,
    CardHeader,
  } from "@/components/ui/card"
  
  export function TestimonialsSection() {
    return (
      <section className="py-20 px-4 md:px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">From our Clients</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Use these awesome forms to login or create new account in your project for free.
            </p>
          </div>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-muted" />
                <div>
                  <h3 className="font-semibold">Client Name</h3>
                  <p className="text-sm text-muted-foreground">Position</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                WooCommerce package offers you a "bulletproof" secure online store. The package puts all the key pieces together, from design to payment processing. This gives you a headstart in your eCommerce venture. Every store is built using a reliable PHP framework Laravel. This speeds up the development process while increasing the store's security and performance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }
  
  