// import React from "react";
// import { Card, List } from "flowbite-react";
// import { FaRegDotCircle } from "react-icons/fa";

// // Define Props for Plan component
// interface PlanProps {
//   plan: {
//     employees: number;
//     clients: number;
//     duration: number;
//     price: number;
//     storage: number;
//     isEnabled: boolean;
//   };
// }

// const Plan: React.FC<PlanProps> = ({ plan }) => {
//   return (
//     <Card className="max-w-sm w-full no-underline flex flex-col justify-center items-center rounded-lg">
//       <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//         <span>Rs.{plan.price}</span> for {plan.duration} months
//       </h5>
//       <p className="font-normal text-gray-700 dark:text-gray-400">Storage: {plan.storage} MB</p>

//       <List className="space-y-2">
//         <List.Item icon={() => <FaRegDotCircle className="text-orange-500 mr-2" />}>
//           {plan.employees} Employees
//         </List.Item>
//         <List.Item icon={() => <FaRegDotCircle className="text-orange-500 mr-2" />}>
//           {plan.clients} Clients
//         </List.Item>
//         <List.Item icon={() => <FaRegDotCircle className="text-orange-500 mr-2" />}>
//           {plan.isEnabled ? "Feature Enabled" : "Feature Disabled"}
//         </List.Item>
//       </List>
//     </Card>
//   );
// };

// export default Plan;

import React from 'react';
import AddPlan from '../components/AddPlan';
import PlanCard from '~/common/components/PlanCardLayout';
import type { PlanData } from '../types';

const Plans = () => {
  const plans = [
    {
      name: 'Hobby',
      id: 'tier-hobby',
      href: '#',
      priceMonthly: '$29',
      description: "The perfect plan if you're just getting started with our product.",
      features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
      isEnabled: true,
    },
    {
      name: 'Enterprise',
      id: 'tier-enterprise',
      href: '#',
      priceMonthly: '$99',
      description: 'Dedicated support and infrastructure for your company.',
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        'Dedicated support representative',
        'Marketing automations',
        'Custom integrations',
      ],
      isEnabled: true,
    },
  ];

  return (
    <div>
      <div className="flex justify-end">
        <AddPlan onAddPlan={function (newPlan: PlanData): void {
          throw new Error('Function not implemented.');
        } } />
      </div>

      <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Choose the right plan for you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
          Choose an affordable plan that's packed with the best features for engaging your audience, creating customer
          loyalty, and driving sales.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {plans.map((plan) => (
            <PlanCard featured={false} key={plan.id} {...plan}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
