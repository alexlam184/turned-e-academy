/* eslint-disable @next/next/no-html-link-for-pages */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a className="flex items-center gap-3" href="/">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--ember)] text-white font-display text-xl">
            TE
          </span>
          <div>
            <p className="font-display text-2xl leading-none">Turned-E Academy</p>
            <p className="text-xs uppercase tracking-[0.22em] text-black/50">
              STEM education Canada
            </p>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-black/70 lg:flex">
          <a className="hover:text-black" href="/#about">
            About
          </a>
          <div className="group relative">
            <a className="inline-flex items-center gap-2 hover:text-black" href="/#programs">
              Programs
              <span className="text-xs">▾</span>
            </a>
            <div className="pointer-events-none invisible absolute left-0 top-full z-20 mt-3 w-64 rounded-2xl border border-black/10 bg-white p-3 text-sm text-black/70 opacity-0 shadow-xl transition group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
              <a className="block rounded-xl px-3 py-2 hover:bg-black/5" href="/programs/sat-prep-program">
                SAT Prep Program
              </a>
              <a className="block rounded-xl px-3 py-2 hover:bg-black/5" href="/programs/head-start-learning">
                Head Start Learning
              </a>
              <a className="block rounded-xl px-3 py-2 hover:bg-black/5" href="/programs/academic-support-program">
                Academic Support Program
              </a>
              <a className="block rounded-xl px-3 py-2 hover:bg-black/5" href="/programs/hardware">
                Hardware
              </a>
              <a className="block rounded-xl px-3 py-2 hover:bg-black/5" href="/programs/ai">
                AI
              </a>
              <a className="block rounded-xl px-3 py-2 hover:bg-black/5" href="/programs/pcb">
                PCB
              </a>
              <a className="block rounded-xl px-3 py-2 hover:bg-black/5" href="/programs/empowerment-classes">
                Empowerment Classes
              </a>
            </div>
          </div>
          <div className="group relative">
            <a className="inline-flex items-center gap-2 hover:text-black" href="/camp">
              Camps
              <span className="text-xs">▾</span>
            </a>
            <div className="pointer-events-none invisible absolute left-0 top-full z-20 mt-3 w-48 rounded-2xl border border-black/10 bg-white p-3 text-sm text-black/70 opacity-0 shadow-xl transition group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
              <a className="block rounded-xl px-3 py-2 hover:bg-black/5" href="/camp?season=march">
                March Camp
              </a>
              <a className="block rounded-xl px-3 py-2 hover:bg-black/5" href="/camp?season=summer">
                Summer Camp
              </a>
            </div>
          </div>
          <a className="hover:text-black" href="/careers">
            Careers
          </a>
          <a className="hover:text-black" href="/blog">
            Blog
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-black/15 px-4 py-2 text-sm font-semibold text-black/70 transition hover:border-black/40 hover:text-black lg:inline-flex">
            Parent Portal
          </button>
          <button className="rounded-full bg-[color:var(--night)] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-black">
            Book a Tour
          </button>
        </div>
      </div>
    </header>
  );
}
