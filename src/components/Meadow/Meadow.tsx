import React from "react";

export interface MeadowOption {
  label: string;
  value: string | number;
}

export interface MeadowProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  options: MeadowOption[];
  error?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Meadow: React.FC<MeadowProps> = ({
  label,
  options,
  error,
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={`
            w-full appearance-none rounded-lg border border-neutral-200
            bg-white text-neutral-900
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
            transition-all duration-200 cursor-pointer
            ${error ? "border-red-400 focus:ring-red-400" : ""}
            ${sizeClasses[size]}
            ${className}
          `}
          {...props}>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-neutral-400">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
