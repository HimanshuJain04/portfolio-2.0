import { cn } from "@/lib/utils";

// The HJ shield rendered as a CSS mask filled with `currentColor`, so it is
// transparent (no box) and adapts to the theme: dark shield in light mode,
// white shield in dark mode. The mask (public/images/hj-logo.png) is the exact
// original artwork with the black box removed. Aspect ratio ≈ 196:252.
const maskStyle: React.CSSProperties = {
  WebkitMaskImage: "url(/images/hj-logo.png)",
  maskImage: "url(/images/hj-logo.png)",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskPosition: "center",
  maskPosition: "center",
};

export function Logo({ className }: { className?: string }) {
  return (
    <span
      role="img"
      aria-label="Himanshu Jain logo"
      style={maskStyle}
      className={cn("inline-block bg-current", className)}
    />
  );
}
