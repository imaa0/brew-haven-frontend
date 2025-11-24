import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "large";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5":
              variant === "primary",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80":
              variant === "secondary",
            "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground":
              variant === "outline",
            "px-8 py-3 text-base": size === "default",
            "px-10 py-4 text-lg": size === "large",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
