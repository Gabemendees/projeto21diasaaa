import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export interface CtaButtonProps extends ComponentProps<"a"> {
  variant?: "solid" | "outline";
  size?: "md" | "lg";
}

/**
 * Single source of truth for every checkout call-to-action on the page.
 * - href="#escolha-versao"  → smooth-scrolls to the plans section
 * - href="https://..."       → navigates to external checkout
 * - onClick prop             → programmatic control (takes priority over href)
 */
export function CtaButton({
  className,
  variant = "solid",
  size = "lg",
  href,
  onClick,
  children,
  ...props
}: CtaButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let custom onClick handlers run first
    if (onClick) {
      onClick(e);
      // Only prevent default if the handler didn't call preventDefault already
      if (!e.defaultPrevented) {
        e.preventDefault();
      }
      return;
    }

    // Smooth scroll for hash links (no external navigation, no full page jump)
    if (href?.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-bold tracking-wide transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-action/50 focus-visible:ring-offset-2",
        "active:scale-[0.98]",
        size === "lg" ? "px-8 py-4 text-base sm:text-lg" : "px-6 py-3 text-sm sm:text-base",
        variant === "solid" &&
          "bg-action text-action-foreground shadow-lg shadow-action/25 hover:-translate-y-0.5 hover:bg-action/90 hover:shadow-xl hover:shadow-action/35",
        variant === "outline" &&
          "border-2 border-action text-action hover:bg-action hover:text-action-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
