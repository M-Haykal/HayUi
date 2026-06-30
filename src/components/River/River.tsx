import React from "react";

export interface RiverProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  max?: number;
  variant?: "primary" | "success" | "warning" | "error";
  height?: "xs" | "sm" | "md" | "lg";
  showLabel?: boolean;
}

const variantClasses = {
  primary: "bg-blue-400",
  success: "bg-green-400",
  warning: "bg-amber-400",
  error: "bg-red-400",
};

const heightClasses = {
  xs: "h-1",
  sm: "h-2",
  md: "h-3",
  lg: "h-4",
};

export const River: React.FC<RiverProps> = ({
  value,
  max = 100,
  variant = "primary",
  height = "sm",
  showLabel = false,
  className = "",
  ...props
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`w-full ${className}`} {...props}>
      <div className="flex justify-between items-center mb-1.5">
        {showLabel && (
          <span className="text-xs font-medium text-neutral-600">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
      <div className={`w-full bg-neutral-100 rounded-full overflow-hidden ${heightClasses[height]}`}>
        <div
          className={`h-full transition-all duration-500 ease-out rounded-full ${variantClasses[variant]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
