import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

interface PlanCardProps {
  name: string;
  id: string;
  href: string;
  priceMonthly: string;
  description: string;
  features: string[];
  featured: boolean;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function PlanCard({
  name,
  id,
  href,
  priceMonthly,
  description,
  features,
  featured,
}: PlanCardProps) {
  return (
    <div
  className={classNames(
    featured ? 'relative bg-gray-900 dark:bg-gray-800' : 'bg-white/60 dark:bg-gray-700',
    'rounded-3xl p-6 ring-1 ring-gray-900/10 sm:p-8 min-h-[250px] shadow-custom'
  )}
>
<h3
  className={classNames(
    featured ? 'text-indigo-400 dark:text-indigo-300' : 'text-indigo-600 dark:text-indigo-400',
    'text-lg font-semibold'
  )}
>
  {name}
</h3>
      <p className="mt-3 flex items-baseline gap-x-2"> {/* Reduced top margin */}
        <span
          className={classNames(
            featured ? 'text-white' : 'text-gray-800',
            'text-4xl font-semibold tracking-tight' // Reduced font size for price
          )}
        >
          {priceMonthly}
        </span>
        <span className={classNames(featured ? 'text-gray-400' : 'text-gray-700', 'text-base')}>
          /month
        </span>
      </p>
      <p className={classNames(featured ? 'text-gray-300' : 'text-gray-600', 'mt-4 text-sm', 'break-words')}>
        {description} {/* Reduced font size for description */}
      </p>
      <ul
        role="list"
        className={classNames(
          featured ? 'text-gray-900' : 'text-gray-500',
          'mt-6 space-y-2 text-sm sm:mt-8' // Reduced space and text size for features
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex gap-x-2">
            <CheckIcon
              aria-hidden="true"
              className={classNames(
                featured ? 'text-indigo-400' : 'text-indigo-600',
                'h-5 w-4 flex-none' // Adjusted size for check icon
              )}
            />
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={href}
        aria-describedby={id}
        className={classNames(
          featured
            ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
            : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600',
          'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-8'
        )}
      >
        Get started today
      </a>
    </div>
  );
}
