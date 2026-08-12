import { Link } from "react-router-dom";
import Terminal from "../components/Terminal";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center gap-14 px-6 py-20 lg:flex-row lg:py-28">
      <div className="flex-1 text-center lg:text-left">
        <p className="mb-3 font-mono text-sm text-blue-600">Web &amp; Software Developer</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          I build fast, reliable
          <br className="hidden sm:block" /> software for the web.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-slate-600 lg:mx-0">
          I'm Your Name — a developer focused on clean architecture, sharp UI, and shipping things that actually work in production.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
          <Link to="/projects" className="rounded-lg bg-blue-600 px-6 py-3 font-mono text-sm font-medium text-white transition-colors hover:bg-blue-700">
            View Projects
          </Link>
          <Link to="/contact" className="rounded-lg border border-slate-300 px-6 py-3 font-mono text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50">
            Get in Touch
          </Link>
        </div>
      </div>
      <div className="flex flex-1 justify-center">
        <Terminal />
      </div>
    </section>
  );
}