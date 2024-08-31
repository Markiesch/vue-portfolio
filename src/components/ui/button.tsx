import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/utils/cn";
import { Link } from "@builder.io/qwik-city";
import { component$, Slot } from "@builder.io/qwik";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-secondary",
        // destructive:
        //   "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // outline:
        //   "border border-input hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        // link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  asChild?: boolean;
  class?: string;
}

export const Button = component$((props: ButtonProps) => {
  return (
    <Link
      href={props.href}
      class={cn(
        buttonVariants({ variant: props.variant, size: props.size }),
        props.class,
      )}
    >
      <Slot />
    </Link>
  );
});
