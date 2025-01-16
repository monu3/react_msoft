// TrustSection.tsx
"use client";

import { useState, useEffect } from "react";

// Define the Logo type
type Logo = {
  alt: string;
  src: string;
};

const LOCAL_STORAGE_KEY = "logos_data";

// Function to get logos from local storage
function getLogos(): Logo[] {
  if (typeof window !== "undefined") {
    const storedLogos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedLogos ? JSON.parse(storedLogos) : [];
  }
  return [];
}

export function TrustSection() {
  const [logos, setLogos] = useState<Logo[]>([]);

  useEffect(() => {
    setLogos(getLogos());
  }, []);

  return (
    <>
      <section className="py-20 px-4 md:px-6 bg-[#FAB73B1A]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted By
            </h2>
            <div className="bg-black lg:py-2 sm:py-12 overflow-hidden relative">
              <div className="mx-auto max-w-7xl px-3 lg:px-4">
                <div className="relative overflow-hidden flex items-center">
                  <div className="flex animate-scroll">
                    {logos.map((logo, index) => (
                      <img
                        key={index}
                        alt={logo.alt}
                        src={logo.src}
                        width={158}
                        height={48}
                        className="max-h-12 w-full object-contain mx-4"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// animation-timeline: auto;
//     animation-range-start: normal;
//     animation-range-end: normal;
//     display: flex
// ;
//     justify-content: space-between;
//     align-items: center;
//     animation: 90s linear 0s infinite normal none running logoloop;
//     flex: 0 0 auto;
//     margin: 0px;
