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

const cardTitleVariants = cva("font-semibold leading-none tracking-tight", {
  variants: {
    size: {
      sm: "text-lg",
      default: "text-2xl",
      lg: "text-3xl",
    },
    status: {
      default: "",
      success: "text-green-700",
      warning: "text-yellow-700",
      error: "text-red-700",
      info: "text-blue-700",
    },
  },
  defaultVariants: {
    size: "default",
    status: "default",
  },
});

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof cardTitleVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, size, status, as: Comp = "h3", ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn(cardTitleVariants({ size, status }), className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  truncate?: boolean;
  lines?: number;
}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, truncate, lines, ...props }, ref) => (
    <p
      ref={ref}
      className={cn(
        "text-sm text-muted-foreground",
        truncate && "truncate",
        lines && `line-clamp-${lines}`,
        className
      )}
      {...props}
    />
  )
);
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

const cardFooterVariants = cva("flex p-6 pt-0 transition-colors", {
  variants: {
    variant: {
      default: "items-center",
      actions: "items-center justify-between",
      center: "items-center justify-center",
      start: "items-center justify-start",
      end: "items-center justify-end",
      column: "flex-col items-start space-y-2",
    },
    separated: {
      true: "border-t mt-4 pt-4",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    separated: false,
  },
});

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardFooterVariants> {
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, variant, separated, primaryAction, secondaryAction, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardFooterVariants({ variant, separated }), className)}
      {...props}
    >
      {primaryAction || secondaryAction ? (
        <>
          <div className="flex-1">{children}</div>
          <div className="flex items-center space-x-2">
            {secondaryAction}
            {primaryAction}
          </div>
        </>
      ) : (
        children
      )}
    </div>
  )
);
CardFooter.displayName = "CardFooter";

// Compound Components for common patterns
export interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  trend?: {
    value: string;
    direction: "up" | "down" | "neutral";
  };
  onClick?: () => void;
  loading?: boolean;
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ title, value, description, icon, trend, onClick, loading, ...props }, ref) => (
    <Card
      ref={ref}
      variant={onClick ? "interactive" : "default"}
      onClick={onClick}
      loading={loading}
      {...props}
    >
      <CardContent variant="compact">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold">{loading ? "..." : value}</p>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
            {trend && (
              <div className={cn(
                "flex items-center text-xs",
                trend.direction === "up" ? "text-green-600" :
                trend.direction === "down" ? "text-red-600" : "text-muted-foreground"
              )}>
                <span className="mr-1">
                  {trend.direction === "up" ? "↗" : trend.direction === "down" ? "↘" : "→"}
                </span>
                {trend.value}
              </div>
            )}
          </div>
          {icon && (
            <div className="text-muted-foreground">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
);
StatCard.displayName = "StatCard";

export interface ActionCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action: React.ReactNode;
  status?: "default" | "success" | "warning" | "error";
  onClick?: () => void;
}

const ActionCard = React.forwardRef<HTMLDivElement, ActionCardProps>(
  ({ title, description, icon, action, status = "default", onClick, ...props }, ref) => (
    <Card
      ref={ref}
      variant={status === "default" ? (onClick ? "interactive" : "default") : status}
      onClick={onClick}
      {...props}
    >
      <CardHeader>
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="flex-shrink-0">
              {icon}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <CardTitle size="sm">{title}</CardTitle>
            {description && (
              <CardDescription>{description}</CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
      <CardFooter variant="end">
        {action}
      </CardFooter>
    </Card>
  )
);
ActionCard.displayName = "ActionCard";

export interface CollapsibleCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  defaultCollapsed?: boolean;
  badge?: React.ReactNode;
}

const CollapsibleCard = React.forwardRef<HTMLDivElement, CollapsibleCardProps>(
  ({ title, description, children, defaultCollapsed = false, badge, ...props }, ref) => {
    const [collapsed, setCollapsed] = React.useState(defaultCollapsed);

    return (
      <Card ref={ref} {...props}>
        <CardHeader
          collapsible
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
          badge={badge}
        >
          <CardTitle size="sm">{title}</CardTitle>
          {description && (
            <CardDescription>{description}</CardDescription>
          )}
        </CardHeader>
        {!collapsed && (
          <CardContent>
            {children}
          </CardContent>
        )}
      </Card>
    );
  }
);
CollapsibleCard.displayName = "CollapsibleCard";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  StatCard,
  ActionCard,
  CollapsibleCard,
};
