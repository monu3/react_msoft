import React from 'react';
import { Button } from "@/components/ui/button";

export function HomeSection() {
  return (
    <section className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              70% Special Offer
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              CRMGo SaaS - Projects, Accounting, Leads, Deals & HRM Tool
            </h1>
            <p className="text-muted-foreground text-lg">
              Use these awesome forms to login or create new account in your project for free.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Live Demo</Button>
              <Button size="lg" variant="outline">
                Buy Now
              </Button>
            </div>
            <div className="text-muted-foreground">
              Trusted by 1000+ Customers
            </div>
          </div>
          <div className="relative">
            <img
              src="https://c8.alamy.com/comp/H3H09E/businessman-touching-financial-dashboard-with-key-performance-indicators-H3H09E.jpg"
              alt="Hero"
              className="w-full h-auto rounded-lg shadow-xl object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}