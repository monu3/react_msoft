import React from "react";

export function ScreenshotsSection() {
  const screenshots = [
    {
      title: "CRM Dashboard",
      image:
        "https://c8.alamy.com/comp/H3H09E/businessman-touching-financial-dashboard-with-key-performance-indicators-H3H09E.jpg",
    },
    {
      title: "Balance Sheet",
      image:
        "https://c8.alamy.com/comp/H3H09E/businessman-touching-financial-dashboard-with-key-performance-indicators-H3H09E.jpg",
    },
    {
      title: "Profile Overview",
      image:
        "https://c8.alamy.com/comp/H3H09E/businessman-touching-financial-dashboard-with-key-performance-indicators-H3H09E.jpg",
    },
    {
      title: "Messenger",
      image:
        "https://c8.alamy.com/comp/H3H09E/businessman-touching-financial-dashboard-with-key-performance-indicators-H3H09E.jpg",
    },
    {
      title: "Kanban Page",
      image:
        "https://c8.alamy.com/comp/H3H09E/businessman-touching-financial-dashboard-with-key-performance-indicators-H3H09E.jpg",
    },
    {
      title: "Plans",
      image:
        "https://c8.alamy.com/comp/H3H09E/businessman-touching-financial-dashboard-with-key-performance-indicators-H3H09E.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Screenshots
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Use these awesome forms to login or create new account in your
            project for free.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="space-y-4">
              <img
                src={screenshot.image}
                alt={screenshot.title}
                className="w-full h-auto rounded-lg shadow-sm object-cover"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold text-center">
                {screenshot.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
