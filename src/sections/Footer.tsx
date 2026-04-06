export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-sm text-text-secondary">
          &copy; {currentYear} Ashikul Islam. Built with Next.js & Tailwind.
        </div>
        <div className="flex gap-8 text-xs font-medium uppercase tracking-widest text-text-secondary">
          <a href="https://github.com/ashikulislamm" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ashikulislammm/" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
            LinkedIn
          </a>
          <a href="https://scholar.google.com/citations?hl=en&authuser=1&user=fFdckfgAAAAJ" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
            Google Scholar
          </a>
        </div>
      </div>
    </footer>
  );
};
