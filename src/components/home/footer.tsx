export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-4 w-full border-t border-black/[0.06] pt-6 dark:border-white/[0.08]">
      <div className="flex flex-col items-center gap-1.5 text-center">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Designed &amp; Developed by{" "}
          <span className="font-semibold text-neutral-900 dark:text-neutral-200">
            Himanshu Jain
          </span>
        </p>
        <p className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
          © {year} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
