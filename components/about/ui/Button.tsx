import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "secondary";
  size?: "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  asLink?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  asLink = false,
  href,
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-semibold transition-all duration-200 focus:outline-hidden disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-center";

  const variants = {
    primary:
      "bg-brand-primary text-white active:scale-[0.98]",
    outline:
      "border border-brand-primary text-brand-primary hover:bg-footer-bg active:scale-[0.98]",
    secondary:
      "bg-white border border-slate-200 text-foreground hover:bg-slate-50 active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-full",
    md: "px-6 py-3 text-base rounded-full",
    lg: "px-8 py-4 text-lg rounded-full",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} className={combinedStyles}>
        {iconLeft && <span className="mr-2 inline-flex">{iconLeft}</span>}
        {children}
        {iconRight && <span className="ml-2 inline-flex">{iconRight}</span>}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {iconLeft && <span className="mr-2 inline-flex">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2 inline-flex">{iconRight}</span>}
    </button>
  );
};
