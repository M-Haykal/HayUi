import React, { useState } from "react";

export interface HarmonyItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export interface HarmonyProps extends React.HTMLAttributes<HTMLDivElement> {
  items: HarmonyItemProps[];
  allowMultiple?: boolean;
}

export const Harmony: React.FC<HarmonyProps> = ({
  items,
  allowMultiple = false,
  className = "",
  ...props
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    items.reduce((acc, item, index) => (item.defaultOpen ? [...acc, index] : acc), [] as number[])
  );

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`space-y-2 ${className}`} {...props}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            className="border border-neutral-200 rounded-lg overflow-hidden bg-white shadow-sm transition-all duration-300">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-4 text-left font-medium text-neutral-800 hover:bg-neutral-50 transition-colors">
              <span>{item.title}</span>
              <svg
                className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}>
              <div className="p-4 pt-0 text-neutral-600 text-sm border-t border-neutral-100">
                {item.children}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
