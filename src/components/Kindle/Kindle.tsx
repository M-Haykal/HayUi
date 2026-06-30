import React from "react";

export interface KindleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
  type?: "checkbox" | "radio";
}

export const Kindle: React.FC<KindleProps> = ({
  label,
  description,
  type = "checkbox",
  className = "",
  ...props
}) => {
  return (
    <label className={`flex items-start gap-3 cursor-pointer group ${className}`}>
      <div className="relative flex items-center mt-1">
        <input
          type={type}
          className={`
            peer appearance-none w-5 h-5 border border-neutral-300 bg-white
            transition-all duration-200 outline-none
            checked:bg-blue-400 checked:border-blue-400
            hover:border-blue-400 focus:ring-2 focus:ring-blue-100
            ${type === "checkbox" ? "rounded-md" : "rounded-full"}
          `}
          {...props}
        />
        {type === "checkbox" && (
          <svg
            className="absolute inset-0 w-5 h-5 text-white scale-0 peer-checked:scale-100 transition-transform pointer-events-none p-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
        {type === "radio" && (
          <div className="absolute inset-0 flex items-center justify-center scale-0 peer-checked:scale-100 transition-transform pointer-events-none">
            <div className="w-2.5 h-2.5 bg-white rounded-full" />
          </div>
        )}
      </div>
      {(label || description) && (
        <div className="flex flex-col select-none">
          {label && (
            <span className="text-sm font-medium text-neutral-800 group-hover:text-neutral-900 transition-colors">
              {label}
            </span>
          )}
          {description && (
            <span className="text-xs text-neutral-500">
              {description}
            </span>
          )}
        </div>
      )}
    </label>
  );
};
