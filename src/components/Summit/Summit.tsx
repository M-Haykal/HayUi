import React from "react";

export interface SummitProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  status?: "online" | "offline" | "away" | "busy";
  variant?: "circular" | "rounded";
}

const sizeClasses = {
  xs: "w-6 h-6 text-[10px]",
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-12 h-12 text-base",
  xl: "w-16 h-16 text-lg",
  "2xl": "w-20 h-20 text-xl",
};

const statusClasses = {
  online: "bg-green-400",
  offline: "bg-neutral-400",
  away: "bg-amber-400",
  busy: "bg-red-400",
};

export const Summit: React.FC<SummitProps> = ({
  src,
  alt = "Avatar",
  name,
  size = "md",
  status,
  variant = "circular",
  className = "",
  ...props
}) => {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "";

  return (
    <div className="relative inline-block">
      <div
        className={`
          flex items-center justify-center overflow-hidden bg-neutral-100 text-neutral-600 font-medium
          ${variant === "circular" ? "rounded-full" : "rounded-lg"}
          ${sizeClasses[size]}
          ${className}
        `}
        {...props}>
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <span>{initials || "?"}</span>
        )}
      </div>
      {status && (
        <span
          className={`
            absolute bottom-0 right-0 block rounded-full border-2 border-white
            ${statusClasses[status]}
            ${size === "xs" || size === "sm" ? "w-2 h-2" : "w-3 h-3"}
          `}
        />
      )}
    </div>
  );
};
