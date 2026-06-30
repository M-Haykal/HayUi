import React from "react";

export interface PulseProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: { toggle: "w-8 h-4.5", circle: "w-3.5 h-3.5", translate: "translate-x-3.5" },
  md: { toggle: "w-11 h-6", circle: "w-5 h-5", translate: "translate-x-5" },
  lg: { toggle: "w-14 h-7.5", circle: "w-6.5 h-6.5", translate: "translate-x-6.5" },
};

export const Pulse: React.FC<PulseProps> = ({
  label,
  size = "md",
  className = "",
  checked,
  ...props
}) => {
  const s = sizeClasses[size];

  return (
    <label className={`inline-flex items-center gap-3 cursor-pointer group ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          {...props}
        />
        <div
          className={`
            ${s.toggle} bg-neutral-200 rounded-full transition-colors duration-200
            peer-checked:bg-blue-400 group-hover:bg-neutral-300 peer-checked:group-hover:bg-blue-500
            peer-focus:ring-2 peer-focus:ring-blue-100
          `}
        />
        <div
          className={`
            absolute top-0.5 left-0.5 ${s.circle} bg-white rounded-full
            shadow-sm transition-transform duration-200
            peer-checked:${s.translate}
          `}
        />
      </div>
      {label && (
        <span className="text-sm font-medium text-neutral-700 select-none group-hover:text-neutral-900 transition-colors">
          {label}
        </span>
      )}
    </label>
  );
};
