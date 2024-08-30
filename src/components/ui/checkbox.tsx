import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "src/libs/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-[3.2px] border border-slate-500  ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-slate-950 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-value data-[state=checked]:text-slate-50 dark:border-slate-800 dark:border-slate-300 dark:ring-offset-slate-950 dark:focus-visible:ring-0 dark:data-[state=checked]:bg-primary-value dark:data-[state=checked]:border-0 dark:data-[state=checked]:text-white-value ",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-3 w-3" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
