// export function FeaturesSection() {
//     const features = [
//       {
//         title: "Feature 1",
//         description: "Description for feature 1"
//       },
//       {
//         title: "Support",
//         description: "24/7 customer support"
//       },
//       {
//         title: "Integration",
//         description: "Easy integration with other tools"
//       }
//     ]

//     return (
//       <section className="py-20 px-4 md:px-6 bg-muted/50">
//         <div className="container mx-auto max-w-7xl">
//           <div className="text-center space-y-4 mb-12">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features</h2>
//             <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
//               CRMGo SaaS - Projects, Accounting, Leads, Deals & HRM Tool
//             </p>
//           </div>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {features.map((feature, index) => (
//               <div key={index} className="p-6 bg-background rounded-lg shadow-sm">
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-muted-foreground">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     )
//   }

// --------------------------------------------------------------------------------------------------------

"use client";

import { useFeatures } from "../../admin/landing-page/features/featuresData";

interface Feature {
  title: string;
  description: string;
}

export function FeaturesSection() {
  const [features, setFeatures] = useFeatures() as [
    Feature[],
    React.Dispatch<React.SetStateAction<Feature[]>>
  ];
  return (
    <section className="py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Features
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            CRMGo SaaS - Projects, Accounting, Leads, Deals & HRM Tool
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature: Feature, index: number) => (
            <div key={index} className="p-6 bg-background rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
