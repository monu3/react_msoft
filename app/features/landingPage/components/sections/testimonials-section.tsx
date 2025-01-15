"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const LOCAL_STORAGE_KEY = "testimonials_data";

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<
    { clientName: string; position: string; content: string }[]
  >([]);

  useEffect(() => {
    const storedTestimonials = localStorage.getItem(LOCAL_STORAGE_KEY);
    setTestimonials(storedTestimonials ? JSON.parse(storedTestimonials) : []);
  }, []);

  return (
    <section className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            From our Clients
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Hear from our users! Explore real stories and experiences that
            highlight the impact and value we've delivered
          </p>
        </div>
        <div className="grid gap-6 relative">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-muted" />
                  <div>
                    <h3 className="font-semibold">{testimonial.clientName}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
