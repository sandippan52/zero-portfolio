
const technologies = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

const projects = [
  {
    number: "01",
    name: "PixelSpace",
    category: "CREATIVE PLATFORM",
    description:
      "A digital playground for turning bold ideas into beautiful experiences.",
    color: "from-violet-500/20 to-indigo-500/5",
    tags: ["Next.js", "Design"],
  },
  {
    number: "02",
    name: "DevConnect",
    category: "DEVELOPER COMMUNITY",
    description:
      "Meet creative minds, share knowledge, and build something extraordinary.",
    color: "from-cyan-500/20 to-blue-500/5",
    tags: ["React", "Community"],
  },
  {
    number: "03",
    name: "Nomad",
    category: "TRAVEL EXPERIENCE",
    description:
      "Discover hidden gems and find inspiration for your next adventure.",
    color: "from-orange-500/20 to-rose-500/5",
    tags: ["UI/UX", "Web"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08080d] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-violet-400">✳</span> devspace
        </a>

        <a
          href="#projects"
          className="rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-violet-400 hover:bg-white/5"
        >
          Explore work <span className="ml-1">↗</span>
        </a>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-24 text-center sm:pt-32">
        <div className="pointer-events-none absolute left-1/2 top-16 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[110px]" />

        <div className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Turning coffee into code
        </div>

        <h1 className="relative mt-9 max-w-4xl text-5xl font-bold leading-[1.12] tracking-tight sm:text-7xl lg:text-8xl">
          Ideas deserve
          <span className="mt-2 block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            to go live.
          </span>
        </h1>

        <p className="mt-7 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
          A little creativity, a lot of curiosity, and a few thousand lines
          of code. Welcome to my corner of the internet.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:bg-violet-200"
          >
            See what I build <span className="ml-1">↗</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-7 py-3.5 font-medium transition hover:bg-white/10"
          >
            GitHub profile
          </a>
        </div>

        {/* Tech stack */}
        <div className="mt-16 w-full max-w-2xl border-t border-white/10 pt-7">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
            Tools of the trade
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-gray-300 transition hover:border-violet-400/50 hover:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl scroll-mt-10 px-6 pb-28"
      >
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              The playground
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Things I've imagined.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-gray-400">
            Three little concepts. Endless possibilities. Every project starts
            with a simple question: what if?
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              {/* Abstract visual made entirely with CSS */}
              <div
                className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}
              >
                <div className="absolute h-32 w-32 rounded-full border border-white/10 transition duration-500 group-hover:scale-125" />
                <div className="absolute h-24 w-24 rotate-45 rounded-2xl border border-white/20 transition duration-500 group-hover:rotate-90" />
                <span className="relative text-5xl font-bold tracking-tighter text-white/90 transition duration-300 group-hover:scale-110">
                  {project.number}
                </span>
                <span className="absolute right-4 top-4 text-xl text-white/50">
                  ↗
                </span>
              </div>

              <div className="p-6">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-violet-300">
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/[0.06] px-3 py-1.5 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/15 via-[#11101b] to-cyan-500/10 px-6 py-14 text-center sm:px-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-64 -translate-x-1/2 rounded-full bg-violet-500/15 blur-[70px]" />
          <p className="relative text-sm text-violet-300">
            YOUR NEXT IDEA STARTS HERE
          </p>
          <h2 className="relative mt-4 text-3xl font-bold sm:text-5xl">
            Stop dreaming. Start building.
          </h2>
          <p className="relative mx-auto mt-5 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
            The internet is full of possibilities. All you need is the
            courage to ship your first project.
          </p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="relative mt-8 inline-flex rounded-full bg-white px-7 py-3.5 font-semibold text-black transition hover:bg-violet-200"
          >
            Start building ↗
          </a>
        </div>
      </section>

      
      
    </main>
  );
}
