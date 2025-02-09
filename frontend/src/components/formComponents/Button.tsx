import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  isLoading?: boolean;
}

export function Button({
  className,
  variant = "primary",
  isLoading,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-lg transition-all duration-200 disabled:opacity-50";

  const variants = {
    primary: "bg-red-500 text-white hover:bg-red-600",
    secondary: "bg-white text-red-500 hover:bg-red-50",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-red-500",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${
        isLoading ? "cursor-wait" : ""
      } ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}
