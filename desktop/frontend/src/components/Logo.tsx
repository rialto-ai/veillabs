import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { VisuallyHidden } from "./ui/visually-hidden";
import { About } from "./About";

interface LogoProps {
    isCollapsed: boolean;
}

const Logo = React.forwardRef<HTMLButtonElement, LogoProps>(({ isCollapsed }, ref) => {
  return (
    <Dialog aria-describedby={undefined}>
      {isCollapsed ? (
        <DialogTrigger asChild>
          <button ref={ref} aria-label="About Veil Scribe" className="flex items-center justify-center mb-2 cursor-pointer bg-transparent border-none p-0 hover:opacity-80 transition-opacity">
            {/* The wordmark collapses to a single V with the violet dot. */}
            <span className="text-2xl font-black tracking-tight text-foreground leading-none">
              V<span className="text-primary">.</span>
            </span>
          </button>
        </DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          {/* Veil wordmark: title case, heavy weight, tight tracking. The violet
              period is the signature — never recolor it, never drop it. */}
          <span className="text-xl font-black tracking-tight text-foreground mb-2 block cursor-pointer hover:opacity-80 transition-opacity">
            Veil<span className="text-primary">.</span>
            <span className="ml-1.5 align-middle font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Scribe
            </span>
          </span>
        </DialogTrigger>
      )}
      <DialogContent>
        <VisuallyHidden>
          <DialogTitle>About Veil Scribe</DialogTitle>
        </VisuallyHidden>
        <About />
      </DialogContent>
    </Dialog>
  );
});

Logo.displayName = "Logo";

export default Logo;