"use client";

import React, { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "screenshots_data";

type Screenshot = {
  title: string;
  image: string;
};

export function ScreenshotsSection() {
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);

  useEffect(() => {
    const storedScreenshots = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedScreenshots) {
      setScreenshots(JSON.parse(storedScreenshots));
    }
  }, []);

  return (
    <section className="py-20 px-4 md:px-6 bg-[#FAB73B1A]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Screenshots
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Capture and showcase your project's key features and progress with clear, impactful screenshots that leave a lasting impression
          </p>
        </div>
        {screenshots.length > 0 ? (
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
                  {screenshot.title || "Untitled"}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center">
            No screenshots available. Please add some in the admin panel.
          </p>
        )}
      </div>
    </section>
  );
}
