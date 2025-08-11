import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200",
  {
    variants: {
      variant: {
        default: "hover:shadow-md",
        interactive: "hover:shadow-lg hover:scale-[1.02] cursor-pointer hover:border-primary/50",
        elevated: "shadow-lg hover:shadow-xl",
        outline: "border-2 border-dashed hover:border-solid hover:bg-muted/50",
        success: "border-green-200 bg-green-50 hover:bg-green-100",
        warning: "border-yellow-200 bg-yellow-50 hover:bg-yellow-100",
        error: "border-red-200 bg-red-50 hover:bg-red-100",
        info: "border-blue-200 bg-blue-50 hover:bg-blue-100",
        medical: "border-medical-blue/20 bg-medical-blue/5 hover:bg-medical-blue/10",
      },
      size: {
        default: "",
        sm: "p-3",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
  href?: string;
  loading?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, asChild = false, href, loading, onClick, ...props }, ref) => {
    const Comp = href ? "a" : "div";
    const isClickable = onClick || href;

    return (
      <Comp
        ref={ref}
        className={cn(
          cardVariants({ variant: isClickable && !variant ? "interactive" : variant, size }),
          loading && "animate-pulse pointer-events-none opacity-70",
          className
        )}
        href={href}
        onClick={onClick}
        role={isClickable ? "button" : undefined}
        tabIndex={isClickable ? 0 : undefined}
        onKeyDown={isClickable ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick?.(e as any);
          }
        } : undefined}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  action?: React.ReactNode;
  badge?: React.ReactNode;
  collapsible?: boolean;
  collapsed?: boolean;
  onToggle?: () => void;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, action, badge, collapsible, collapsed, onToggle, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col space-y-1.5 p-6",
        collapsible && "cursor-pointer hover:bg-muted/30 transition-colors",
        className
      )}
      onClick={collapsible ? onToggle : undefined}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-1.5">
          {children}
        </div>
        <div className="flex items-center space-x-2">
          {badge}
          {action}
          {collapsible && (
            <button
              className="p-1 hover:bg-muted rounded"
              onClick={(e) => {
                e.stopPropagation();
                onToggle?.();
              }}
            >
              <svg
                className={cn(
                  "h-4 w-4 transition-transform",
                  collapsed ? "rotate-180" : ""
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const cardContentVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "p-6 pt-0",
      compact: "p-4 pt-0",
      spacious: "p-8 pt-0",
      flush: "p-0",
      interactive: "p-6 pt-0 hover:bg-muted/30 cursor-pointer",
    },
    loading: {
      true: "animate-pulse",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    loading: false,
  },
});

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContentVariants> {
  loading?: boolean;
  empty?: boolean;
  emptyMessage?: string;
  emptyIcon?: React.ReactNode;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({
    className,
    variant,
    loading,
    empty,
    emptyMessage = "No data available",
    emptyIcon,
    children,
    ...props
  }, ref) => {
    if (empty) {
      return (
        <div
          ref={ref}
          className={cn(cardContentVariants({ variant, loading }), "text-center py-8", className)}
          {...props}
        >
          <div className="flex flex-col items-center space-y-3 text-muted-foreground">
            {emptyIcon && <div className="opacity-50">{emptyIcon}</div>}
            <p className="text-sm">{emptyMessage}</p>
          </div>
        </div>
      );
    }

    if (loading) {
      return (
        <div
          ref={ref}
          className={cn(cardContentVariants({ variant, loading: true }), className)}
          {...props}
        >
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded animate-pulse" />
            <div className="h-4 bg-muted rounded animate-pulse w-3/4" />
            <div className="h-4 bg-muted rounded animate-pulse w-1/2" />
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(cardContentVariants({ variant, loading }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
