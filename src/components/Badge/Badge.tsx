import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "success" | "warning" | "error" | "neutral";
  size?: "sm" | "md";
  dot?: boolean;
  children: React.ReactNode;
}

const variantClasses = {
  primary: "bg-blue-50 text-blue-600 border-blue-200",
  success: "bg-green-50 text-green-600 border-green-200",
  warning: "bg-amber-50 text-amber-600 border-amber-200",
  error: "bg-red-50 text-red-600 border-red-200",
  neutral: "bg-neutral-50 text-neutral-600 border-neutral-200",
};

const dotClasses = {
  primary: "bg-blue-400",
  success: "bg-green-400",
  warning: "bg-amber-400",
  error: "bg-red-400",
  neutral: "bg-neutral-400",
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "neutral",
  size = "md",
  dot = false,
  children,
  className = "",
  ...props
}) => {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 rounded-full border font-medium
        ${variantClasses[variant]}
        ${size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-sm"}
        ${className}
      `}
      {...props}>
      {dot && (
        <span className={`h-1.5 w-1.5 rounded-full ${dotClasses[variant]}`} />
      )}
      {children}
    </span>
  );
};
