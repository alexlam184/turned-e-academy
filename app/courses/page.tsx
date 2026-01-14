export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-hero text-[color:var(--ink)]">
      <main>
        <section className="relative overflow-hidden px-6 pb-16 pt-16 lg:px-10 lg:pb-24">
          <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-black/60">
                Course catalog
              </div>
              <h1 className="mt-6 font-display text-5xl uppercase leading-none text-black sm:text-6xl lg:text-7xl">
                Three tracks. Endless builds.
                <span className="block text-[color:var(--ember)]">AI, PCB, and STEM.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-black/70">
                Our courses help students level up in technical skills and creative
                confidence. Choose a track or mix them across the year.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-[color:var(--ember)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:-translate-y-0.5 hover:bg-[#c53827]">
                  Request Course Info
                </button>
                <button className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold text-black transition hover:border-black/40">
                  View Schedule
                </button>
              </div>
            </div>
            <div className="glass relative overflow-hidden rounded-[32px] p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                Flexible formats
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase text-black">
                Weekly studios or intensives
              </h2>
              <div className="mt-6 space-y-4 text-sm text-black/70">
                <div className="rounded-2xl bg-black/5 p-4">
                  <p className="font-semibold text-black">After-school studios</p>
                  <p>8-week cycles with new projects every session.</p>
                </div>
                <div className="rounded-2xl bg-black/5 p-4">
                  <p className="font-semibold text-black">Weekend workshops</p>
                  <p>Rapid build sprints for quick wins and badges.</p>
                </div>
                <div className="rounded-2xl bg-black/5 p-4">
                  <p className="font-semibold text-black">Private coaching</p>
                  <p>Portfolio and competition support for teens.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                  Course categories
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase text-black">
                  Three paths for future builders.
                </h2>
              </div>
              <p className="max-w-md text-sm text-black/60">
                Each category stacks into a year-long progression and ends with a
                public demo or showcase.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--ember)] text-white font-display text-2xl">
                  AI
                </div>
                <h3 className="mt-6 font-display text-3xl uppercase text-black">
                  Artificial Intelligence
                </h3>
                <p className="mt-3 text-sm text-black/60">
                  Train models, build chatbots, and explore ethical AI design.
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-black/50">
                  Ages 10-17
                </p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--aqua)] text-black font-display text-2xl">
                  PCB
                </div>
                <h3 className="mt-6 font-display text-3xl uppercase text-black">
                  PCB Engineering
                </h3>
                <p className="mt-3 text-sm text-black/60">
                  Design circuits, solder boards, and ship working devices.
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-black/50">
                  Ages 12-17
                </p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--sun)] text-black font-display text-2xl">
                  STEM
                </div>
                <h3 className="mt-6 font-display text-3xl uppercase text-black">
                  STEM Foundations
                </h3>
                <p className="mt-3 text-sm text-black/60">
                  Core coding, robotics, design thinking, and lab science.
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-black/50">
                  Ages 7-13
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--night)] px-6 py-20 text-white lg:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Course outcomes
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase">
                  Ship real products, not worksheets.
                </h2>
                <p className="mt-4 text-sm text-white/70">
                  Students graduate with a portfolio, demo reels, and confidence to
                  collaborate on real tech teams.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Capstone demos",
                  "Mentor feedback loops",
                  "Competition prep",
                  "Portfolio coaching",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/5 p-4 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-10">
          <div className="mx-auto w-full max-w-6xl rounded-[36px] bg-[color:var(--sun)] p-10 text-black shadow-xl">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-black/60">
                  Ready to start?
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase">
                  Build a course plan with our advisors.
                </h2>
                <p className="mt-4 text-sm text-black/70">
                  Mix categories or go deep in one track over the year.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
                  Talk to an Advisor
                </button>
                <button className="rounded-full border border-black/30 px-6 py-3 text-sm font-semibold text-black">
                  Download Course Map
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
