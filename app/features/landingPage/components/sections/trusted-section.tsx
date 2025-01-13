// import React from "react";

// type Logo = {
//   alt: string;
//   src: string;
// };

// type TrustSectionProps = {
//   logos: Logo[];
// };

// export function TrustSection({ logos }: TrustSectionProps) {
//   return (
//     <div className="bg-black py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
//           {logos.map((logo, index) => (
//             <img
//               key={index}
//               alt={logo.alt}
//               src={logo.src}
//               width={158}
//               height={48}
//               className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

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
      {/* <section className="py-20 px-4 md:px-6 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-12 ">
            <h2 className=" text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted By
            </h2>
            <div className="bg-black lg:py-2 sm:py-12">
              <div className="mx-auto max-w-7xl px-3 lg:px-4">
                <div className="mx-auto mt-5 grid max-w-lg grid-cols-4  sm:max-w-xl sm:grid-cols-6  lg:mx-0 lg:max-w-none lg:grid-cols-5">
                  {logos.map((logo, index) => (
                    <img
                      key={index}
                      alt={logo.alt}
                      src={logo.src}
                      width={158}
                      height={48}
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 px-4 md:px-6 bg-muted/50">
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
