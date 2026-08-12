const projects = [
  { name: "Project One", description: "A short, honest sentence about the problem this solved.", tags: ["React", "Node.js", "PostgreSQL"], link: "#" },
  { name: "Project Two", description: "What it does, who it's for, and one technical decision you're proud of.", tags: ["Next.js", "Tailwind", "Stripe"], link: "#" },
  { name: "Project Three", description: "Keep it concrete — a metric, a constraint, or a launch outcome.", tags: ["TypeScript", "Docker", "AWS"], link: "#" },
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <p className="mb-3 font-mono text-sm text-blue-600">Projects</p>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Things I've built</h1>
      <p className="mt-4 max-w-xl text-base text-slate-600">Replace these with real case studies — link out to a repo or live demo whenever you can.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a key={project.name} href={project.link} className="group rounded-xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg">
            <h2 className="font-display text-lg font-semibold text-slate-900 group-hover:text-blue-600">{project.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-xs text-slate-600">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}