import React from "react";

export interface FlameProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "info" | "success" | "warning" | "error";
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  closeable?: boolean;
}

const typeClasses = {
  info: "bg-blue-50 border-blue-200 text-blue-800",
  success: "bg-green-50 border-green-200 text-green-800",
  warning: "bg-amber-50 border-amber-200 text-amber-800",
  error: "bg-red-50 border-red-200 text-red-800",
};

const titleClasses = {
  info: "text-blue-900 font-semibold",
  success: "text-green-900 font-semibold",
  warning: "text-amber-900 font-semibold",
  error: "text-red-900 font-semibold",
};

export const Flame: React.FC<FlameProps> = ({
  type = "info",
  title,
  children,
  onClose,
  closeable = false,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`
        border rounded-lg p-4
        ${typeClasses[type]}
        ${className}
      `}
      {...props}>
      <div className="flex items-start gap-3">
        <div className="flex-1">
          {title && <h3 className={titleClasses[type]}>{title}</h3>}
          <div className="text-sm mt-1">{children}</div>
        </div>
        {closeable && (
          <button
            onClick={onClose}
            className="text-current opacity-60 hover:opacity-100 transition-opacity flex-shrink-0">
            ✕
          </button>
        )}
      </div>
    </div>
  );
};
