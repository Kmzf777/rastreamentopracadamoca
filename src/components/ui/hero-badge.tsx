"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface HeroBadgeProps {
  href?: string;
  text: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

const badgeVariants: Record<string, string> = {
  default: "bg-background hover:bg-muted",
  outline: "border-2 hover:bg-muted",
  ghost: "hover:bg-muted/50",
};

const sizeVariants: Record<string, string> = {
  sm: "px-3 py-1 text-xs gap-1.5",
  md: "px-4 py-1.5 text-sm gap-2",
  lg: "px-5 py-2 text-base gap-2.5",
};

export default function HeroBadge({
  href,
  text,
  icon,
  endIcon,
  variant = "default",
  size = "md",
  className,
  onClick,
}: HeroBadgeProps) {

  const baseClassName = cn(
    "inline-flex items-center rounded-full border transition-colors",
    badgeVariants[variant],
    sizeVariants[size],
    className
  );

  const content = (
    <div
      className={baseClassName}
    >
      {icon && (
        <div
          className="text-foreground/60 transition-colors group-hover:text-primary"
        >
          {icon}
        </div>
      )}
      <span>{text}</span>
      {endIcon && (
        <div className="text-foreground/60">{endIcon}</div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={cn("group cursor-pointer")}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="group">
      {content}
    </button>
  );
}
