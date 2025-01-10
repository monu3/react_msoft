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
        featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60',
        'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
      )}
    >
      <h3
        id={id}
        className={classNames(
          featured ? 'text-indigo-400' : 'text-indigo-600',
          'text-base/7 font-semibold'
        )}
      >
        {name}
      </h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span
          className={classNames(
            featured ? 'text-white' : 'text-gray-900',
            'text-5xl font-semibold tracking-tight'
          )}
        >
          {priceMonthly}
        </span>
        <span className={classNames(featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>
          /month
        </span>
      </p>
      <p className={classNames(featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
        {description}
      </p>
      <ul
        role="list"
        className={classNames(
          featured ? 'text-gray-300' : 'text-gray-600',
          'mt-8 space-y-3 text-sm/6 sm:mt-10'
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex gap-x-3">
            <CheckIcon
              aria-hidden="true"
              className={classNames(
                featured ? 'text-indigo-400' : 'text-indigo-600',
                'h-6 w-5 flex-none'
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
          'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
        )}
      >
        Get started today
      </a>
    </div>
  );
}

