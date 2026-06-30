import React, { useState } from "react";

export interface OrbitTab {
  label: string;
  value: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export interface OrbitProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: OrbitTab[];
  defaultTab?: string;
  variant?: "pill" | "underline";
}

export const Orbit: React.FC<OrbitProps> = ({
  tabs,
  defaultTab,
  variant = "underline",
  className = "",
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].value);

  return (
    <div className={`w-full ${className}`} {...props}>
      <div className={`flex items-center gap-2 mb-6 ${variant === "underline" ? "border-b border-neutral-100" : ""}`}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;
          return (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`
                flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200
                ${
                  variant === "pill"
                    ? `rounded-full ${isActive ? "bg-blue-400 text-white shadow-md shadow-blue-100" : "text-neutral-500 hover:bg-neutral-100"}`
                    : `border-b-2 -mb-[2px] ${isActive ? "border-blue-500 text-blue-600" : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-200"}`
                }
              `}>
              {tab.icon && <span>{tab.icon}</span>}
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
        {tabs.find((t) => t.value === activeTab)?.content}
      </div>
    </div>
  );
};
