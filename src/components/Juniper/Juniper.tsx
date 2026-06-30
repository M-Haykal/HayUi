import React from "react";

export interface JuniperItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface JuniperProps extends React.HTMLAttributes<HTMLElement> {
  items: JuniperItem[];
  separator?: React.ReactNode;
}

export const Juniper: React.FC<JuniperProps> = ({
  items,
  separator = " / ",
  className = "",
  ...props
}) => {
  return (
    <nav className={`flex text-sm font-medium ${className}`} aria-label="Breadcrumb" {...props}>
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center">
              {index > 0 && (
                <span className="mx-2 text-neutral-400">{separator}</span>
              )}
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="inline-flex items-center text-neutral-500 hover:text-blue-600 transition-colors">
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </a>
              ) : (
                <span className={`inline-flex items-center ${isLast ? "text-neutral-900" : "text-neutral-500"}`}>
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
