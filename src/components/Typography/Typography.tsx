import React from "react";

export interface TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "display-1"
    | "display-2"
    | "body-large"
    | "body-base"
    | "body-small"
    | "caption";
  weight?: "normal" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right" | "justify";
  color?: "default" | "muted" | "primary" | "secondary" | "danger" | "white";
  className?: string;
  children: React.ReactNode;
}

const variantClasses = {
  "display-1": "text-5xl md:text-7xl font-bold tracking-tight",
  "display-2": "text-4xl md:text-6xl font-bold tracking-tight",
  h1: "text-3xl md:text-4xl font-bold tracking-tight",
  h2: "text-2xl md:text-3xl font-semibold tracking-tight",
  h3: "text-xl md:text-2xl font-semibold",
  h4: "text-lg md:text-xl font-semibold",
  "body-large": "text-lg md:text-xl leading-relaxed",
  "body-base": "text-base leading-relaxed",
  "body-small": "text-sm leading-relaxed",
  caption: "text-xs uppercase tracking-wider",
};

const colorClasses = {
  default: "text-neutral-900",
  muted: "text-neutral-500",
  primary: "text-blue-500",
  secondary: "text-purple-500",
  danger: "text-red-500",
  white: "text-white",
};

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

export const Typography: React.FC<TypographyProps> = ({
  as: Component = "p",
  variant = "body-base",
  weight = "normal",
  align = "left",
  color = "default",
  className = "",
  children,
}) => {
  return (
    <Component
      className={`
        ${variantClasses[variant]}
        ${colorClasses[color]}
        ${weightClasses[weight]}
        ${alignClasses[align]}
        ${className}
      `}>
      {children}
    </Component>
  );
};
