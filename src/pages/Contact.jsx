export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is a demo form — connect it to Formspree, Web3Forms, or a Cloudflare Worker to actually receive messages.");
  };

  return (
    <section className="mx-auto max-w-lg px-6 py-20">
      <p className="mb-3 font-mono text-sm text-blue-600">Contact</p>
      <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Let's work together</h1>
      <p className="mt-4 text-base leading-relaxed text-slate-600">Have a project in mind or just want to say hi? Send a message below.</p>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <div>
          <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-500">Name</label>
          <input id="name" type="text" required placeholder="Your name" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-500">Email</label>
          <input id="email" type="email" required placeholder="you@example.com" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-500">Message</label>
          <textarea id="message" required rows={5} placeholder="What's on your mind?" className="w-full resize-y rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-blue-500" />
        </div>
        <button type="submit" className="rounded-lg bg-blue-600 px-6 py-3 font-mono text-sm font-medium text-white transition-colors hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}