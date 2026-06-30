import React, { useState } from "react";

export interface LuminaProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

export const Lumina: React.FC<LuminaProps> = ({
  content,
  children,
  position = "top",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-neutral-800",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-neutral-800",
    left: "left-full top-1/2 -translate-y-1/2 border-l-neutral-800",
    right: "right-full top-1/2 -translate-y-1/2 border-r-neutral-800",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}>
      {children}
      {isVisible && (
        <div
          className={`
            absolute z-50 px-2 py-1 text-xs font-medium text-white bg-neutral-800
            rounded shadow-lg whitespace-nowrap pointer-events-none
            animate-in fade-in duration-200
            ${positionClasses[position]}
          `}>
          {content}
          <div
            className={`
              absolute border-4 border-transparent
              ${arrowClasses[position]}
            `}
          />
        </div>
      )}
    </div>
  );
};
