import React from "react";

export interface BreezeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  noPadding?: boolean;
  noBorder?: boolean;
  shadow?: "sm" | "md" | "lg" | "none";
}

const shadowClasses = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

export const Breeze: React.FC<BreezeProps> = ({
  children,
  noPadding = false,
  noBorder = false,
  shadow = "md",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`
        rounded-lg bg-white
        ${!noBorder ? "border border-neutral-200" : ""}
        ${!noPadding ? "p-6" : ""}
        ${shadowClasses[shadow]}
        transition-shadow duration-300 hover:shadow-lg
        ${className}
      `}
      {...props}>
      {children}
    </div>
  );
};
