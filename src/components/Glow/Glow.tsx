import React from "react";

export interface GlowProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  helperText?: string;
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

const sizeClasses = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Glow: React.FC<GlowProps> = ({
  label,
  error,
  helperText,
  size = "md",
  icon,
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
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
            {icon}
          </span>
        )}
        <input
          className={`
            w-full rounded-lg border border-neutral-200
            bg-white text-neutral-900 placeholder-neutral-400
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
            transition-all duration-200
            ${icon ? "pl-10" : ""}
            ${error ? "border-red-400 focus:ring-red-400" : ""}
            ${sizeClasses[size]}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      {helperText && !error && (
        <p className="text-neutral-500 text-sm mt-1">{helperText}</p>
      )}
    </div>
  );
};
