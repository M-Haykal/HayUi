import React from "react";

export interface EmberProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  isDisabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const variantClasses = {
  primary:
    "bg-blue-400 text-white hover:bg-blue-500 active:bg-blue-600 shadow-sm hover:shadow-md",
  secondary:
    "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 active:bg-neutral-300 border border-neutral-200",
  danger:
    "bg-red-400 text-white hover:bg-red-500 active:bg-red-600 shadow-sm hover:shadow-md",
  ghost:
    "bg-transparent text-blue-500 hover:bg-blue-50 active:bg-blue-100 border border-blue-200",
};

const sizeClasses = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl",
};

export const Ember: React.FC<EmberProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  isDisabled = false,
  fullWidth = false,
  icon,
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`
        inline-flex items-center justify-center gap-2
        rounded-lg font-medium transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400
        disabled:opacity-60 disabled:cursor-not-allowed
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : ""}
        ${isLoading ? "opacity-70 cursor-not-allowed" : ""}
        ${className}
      `}
      disabled={isDisabled || isLoading}
      {...props}>
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {icon && !isLoading && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
