// components/SeriesBlock.tsx
import React from 'react';
import Link from 'next/link';

type SeriesItem = {
  label: string;
  href?: string;
  current?: boolean;
  disabled?: boolean;
};

type Props = {
  title: string;
  items: SeriesItem[];
};

export const SeriesBlock: React.FC<Props> = ({ title, items }) => {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900 shadow-md mb-10 mt-10">
      <h3 className="text-md font-semibold text-blue-gray mb-3">
        Serie: {title}
      </h3>
      <ol className="space-y-2 text-sm list-none list-inside pl-0 ml-0 mb-0">
        {items.map((item, index) => (
          <li key={index}>
            {item.current ? (
              <span className="font-bold text-blue-gray">{item.label}</span>
            ) : item.disabled || !item.href ? (
              <span className="text-zinc-400 italic">{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};
