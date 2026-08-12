const skillGroups = [
  { label: "Frontend", skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { label: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"] },
  { label: "Tooling", skills: ["Git", "Docker", "Vite", "Cloudflare Pages"] },
];

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <p className="mb-3 font-mono text-sm text-blue-600">About</p>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        A bit about how I work
      </h1>
      <p className="mt-6 text-base leading-relaxed text-slate-600">
        I'm a web and software developer who cares about the details most users never see: load times, error states, code that's easy to hand off.
      </p>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        Outside of client work, I build small tools to solve my own annoyances and I'm always looking for the next thing worth learning properly.
      </p>
      <h2 className="mt-12 font-display text-xl font-semibold text-slate-900">Skills</h2>
      <div className="mt-6 space-y-6">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 font-mono text-xs uppercase tracking-wider text-slate-500">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-sm text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}