export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-4 w-full border-t border-black/10 pt-4 dark:border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="font-mono text-xs text-neutral-500">
          © {year} Himanshu Jain
        </p>
        <p className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
          Next.js · Tailwind · Vercel
        </p>
      </div>
    </footer>
  );
}
