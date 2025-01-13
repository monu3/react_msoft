"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export function HomeSection() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    offerText: "70% Special Offer",
    heading: "CRMGo SaaS - Projects, Accounting, Leads, Deals & HRM Tool",
    description:
      "Use these awesome forms to login or create new account in your project for free.",
    trustedBy: "Trusted by 1000+ Customers",
    liveDemoLink: "#",
    buyNowLink: "#",
    bannerImage:
      "https://c8.alamy.com/comp/H3H09E/businessman-touching-financial-dashboard-with-key-performance-indicators-H3H09E.jpg",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("homeSectionData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  return (
    <section className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              {data.offerText}
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              {data.heading}
            </h1>
            <p className="text-muted-foreground text-lg">{data.description}</p>
            <div className="flex flex-wrap gap-4">
              <a href={data.liveDemoLink} target="_blank" rel="noreferrer">
                <Button size="lg">Live Demo</Button>
              </a>
              <a href={data.buyNowLink} target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline">
                  Buy Now
                </Button>
              </a>

              {/* Get Started Button */}
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate("/dashboard")} // Navigate to /monuhome route
              >
                Get Started
              </Button>
            </div>
            <div className="text-muted-foreground">{data.trustedBy}</div>
          </div>
          <div className="relative">
            <img
              src={data.bannerImage}
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
