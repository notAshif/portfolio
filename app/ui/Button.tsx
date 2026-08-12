"use client";

import React from "react";
import { Plus, LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "secondary";
  showPlusIcon?: boolean;
  icon?: LucideIcon;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      showPlusIcon = true,
      icon: CustomIcon,
      className = "",
      ...props
    },
    ref
  ) => {
    const IconToRender = CustomIcon || (showPlusIcon ? Plus : null);

    const baseStyles =
      "inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B0909] active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-[#0B0909] text-white hover:bg-black/85 border border-transparent shadow-sm",
      outline:
        "bg-black/[0.05] hover:bg-black/10 text-[#767676] hover:text-[#0B0909] border border-black/[0.04]",
      secondary:
        "bg-[#464858]/10 text-[#0B0909] hover:bg-[#464858]/20 border border-transparent",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {IconToRender && <IconToRender className="w-3.5 h-3.5 stroke-[2]" />}
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
