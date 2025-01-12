// import { Button } from "@/components/ui/button"

// export function PricingSection() {
//   return (
//     <section className="py-20 px-4 md:px-6 bg-background">
//       <div className="container mx-auto max-w-7xl">
//         <div className="text-center space-y-4 mb-12">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Plan</h2>
//           <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
//             CRMGo SaaS - Projects, Accounting, Leads, Deals & HRM Tool
//           </p>
//         </div>
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {/* Add pricing plans here */}
//         </div>
//       </div>
//     </section>
//   )
// }

// import { useEffect, useState } from "react";
// import type { PricingPlan } from "../../admin/landing-page/pricing/types";

// export function PricingSection() {
//   const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]); // Typing the pricingPlans state

//   useEffect(() => {
//     const savedPlans = JSON.parse(localStorage.getItem("pricingPlans") || "[]") as PricingPlan[];
//     setPricingPlans(savedPlans);
//   }, []);

//   return (
//     <section className="py-20 px-4 md:px-6 bg-background">
//       <div className="container mx-auto max-w-7xl">
//         <div className="text-center space-y-4 mb-12">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Plan</h2>
//           <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
//             CRMGo SaaS - Projects, Accounting, Leads, Deals & HRM Tool
//           </p>
//         </div>
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {pricingPlans.map((plan) => (
//             <div key={plan.id} className="p-6 border rounded-md">
//               <h3 className="text-xl font-semibold">{plan.name}</h3>
//               <p className="text-sm text-muted-foreground">${plan.price}</p>
//               <p className="text-sm mt-2">{plan.description}</p>
//               <ul className="mt-4 space-y-2">
//                 {plan.features.map((feature, index) => (
//                   <li key={index} className="text-sm">
//                     - {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import type { PricingPlan } from "../../admin/landing-page/pricing/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

export function PricingSection() {
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);

  useEffect(() => {
    const savedPlans = JSON.parse(
      localStorage.getItem("pricingPlans") || "[]"
    ) as PricingPlan[];
    setPricingPlans(savedPlans);
  }, []);

  return (
    <section className="py-20 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Plan
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Choose the perfect plan tailored to your needs. Explore features,
            compare options, and find the ideal solution for you
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.id} className="p-2 border shadow-custom">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-2xl text-muted-foreground">
                  ${plan.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg mt-2">{plan.description}</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-sm">
                      - {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
