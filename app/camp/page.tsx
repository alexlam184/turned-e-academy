export default function CampPage() {
  return (
    <div className="min-h-screen bg-hero text-[color:var(--ink)]">
      <main>
        <section className="relative overflow-hidden px-6 pb-16 pt-16 lg:px-10 lg:pb-24">
          <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-black/60">
                Camp season 2026
              </div>
              <h1 className="mt-6 font-display text-5xl uppercase leading-none text-black sm:text-6xl lg:text-7xl">
                STEM camps that feel like missions.
                <span className="block text-[color:var(--ember)]">Launch bold ideas.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-black/70">
                Turned-E Academy camps turn school breaks into immersive build labs.
                Students collaborate on real projects in coding, robotics, and STEM
                design with mentor support.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-[color:var(--ember)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:-translate-y-0.5 hover:bg-[#c53827]">
                  Reserve a Camp Seat
                </button>
                <button className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold text-black transition hover:border-black/40">
                  Download Camp Guide
                </button>
              </div>
            </div>
            <div className="glass relative overflow-hidden rounded-[32px] p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                Camp day flow
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase text-black">
                Build. Test. Showcase.
              </h2>
              <div className="mt-6 space-y-4 text-sm text-black/70">
                <div className="rounded-2xl bg-black/5 p-4">
                  <p className="font-semibold text-black">9:00 - 10:30</p>
                  <p>Team briefing and concept design.</p>
                </div>
                <div className="rounded-2xl bg-black/5 p-4">
                  <p className="font-semibold text-black">10:45 - 12:30</p>
                  <p>Build sprint with mentors and prototyping.</p>
                </div>
                <div className="rounded-2xl bg-black/5 p-4">
                  <p className="font-semibold text-black">1:15 - 3:00</p>
                  <p>Code lab, testing, and demo prep.</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.24em] text-black/50">
                  Weekly demo night
                </p>
                <button className="rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                  See projects
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--night)] px-6 py-10 text-white lg:px-10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-display text-3xl uppercase tracking-wide">
              Camps built for ages 7-17.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              <span>Full day camps</span>
              <span>Weekly intensives</span>
              <span>Teen innovation labs</span>
              <span>Mobile camp teams</span>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                  Camp formats
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase text-black">
                  Pick the experience that fits your family.
                </h2>
              </div>
              <p className="max-w-md text-sm text-black/60">
                Every camp includes team projects, mentor check-ins, and a showcase
                to celebrate student progress.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--sun)] text-black font-display text-2xl">
                  D
                </div>
                <h3 className="mt-6 font-display text-3xl uppercase text-black">
                  Day Camps
                </h3>
                <p className="mt-3 text-sm text-black/60">
                  Weekly themes with robotics, coding, and science labs.
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-black/50">
                  Ages 7-12
                </p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--aqua)] text-black font-display text-2xl">
                  W
                </div>
                <h3 className="mt-6 font-display text-3xl uppercase text-black">
                  Week Intensives
                </h3>
                <p className="mt-3 text-sm text-black/60">
                  Deep dives into game dev, AI, and engineering builds.
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-black/50">
                  Ages 9-15
                </p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--ember)] text-white font-display text-2xl">
                  T
                </div>
                <h3 className="mt-6 font-display text-3xl uppercase text-black">
                  Teen Labs
                </h3>
                <p className="mt-3 text-sm text-black/60">
                  Portfolio projects, leadership roles, and demo coaching.
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-black/50">
                  Ages 13-17
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-10">
          <div className="mx-auto w-full max-w-6xl rounded-[36px] bg-[color:var(--sun)] p-10 text-black shadow-xl">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-black/60">
                  Camp enrollment
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase">
                  Save your spot for summer or winter break.
                </h2>
                <p className="mt-4 text-sm text-black/70">
                  We accept rolling registrations until each camp is full.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
                  Register Now
                </button>
                <button className="rounded-full border border-black/30 px-6 py-3 text-sm font-semibold text-black">
                  Talk to a Camp Advisor
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
