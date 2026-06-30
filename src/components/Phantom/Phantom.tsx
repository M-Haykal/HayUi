import React from "react";

export interface PhantomProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
}

export const Phantom: React.FC<PhantomProps> = ({
  variant = "text",
  width,
  height,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`
        bg-neutral-200 animate-pulse
        ${variant === "circular" ? "rounded-full" : "rounded-md"}
        ${className}
      `}
      style={{
        width: width,
        height: height || (variant === "text" ? "1em" : undefined),
      }}
      {...props}
    />
  );
};
