export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-400 sm:flex-row">
        <p className="font-mono">© {new Date().getFullYear()} Your Name</p>
        <div className="flex gap-5 font-mono">
          <a href="https://github.com" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:you@example.com" className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}