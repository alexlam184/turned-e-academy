export default function Home() {
  return (
    <div className="min-h-screen bg-hero text-[color:var(--ink)]">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--ember)] text-white font-display text-xl">
              TE
            </span>
            <div>
              <p className="font-display text-2xl leading-none">Turned-E Academy</p>
              <p className="text-xs uppercase tracking-[0.22em] text-black/50">
                STEM education Canada
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-black/70 lg:flex">
            <a className="hover:text-black" href="#programs">
              Programs
            </a>
            <a className="hover:text-black" href="#pathway">
              Pathway
            </a>
            <a className="hover:text-black" href="#locations">
              Locations
            </a>
            <a className="hover:text-black" href="#stories">
              Stories
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

      <main>
        <section className="relative overflow-hidden px-6 pb-16 pt-16 lg:px-10 lg:pb-24">
          <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-black/60">
                Hands-on STEM dojo
              </div>
              <h1 className="mt-6 font-display text-5xl uppercase leading-none text-black sm:text-6xl lg:text-7xl">
                Build. Code. Invent.
                <span className="block text-[color:var(--ember)]">Canada is our lab.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-black/70">
                Turned-E Academy is a bold STEM education company in Canada. We mix
                coding, robotics, and design challenges into a high-energy learning
                experience for ages 7-17.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-[color:var(--ember)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:-translate-y-0.5 hover:bg-[#c53827]">
                  Start a Free Trial Class
                </button>
                <button className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold text-black transition hover:border-black/40">
                  View Program Guide
                </button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                  <p className="font-display text-3xl text-black">50+</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/60">
                    STEM challenges
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                  <p className="font-display text-3xl text-black">12</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/60">
                    Canadian cities
                  </p>
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/70 p-4">
                  <p className="font-display text-3xl text-black">1:6</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/60">
                    mentor ratio
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -right-8 -top-10 h-24 w-24 rounded-full bg-[color:var(--sun)] opacity-80 blur-2xl" />
              <div className="absolute -left-8 bottom-12 h-20 w-20 rounded-full bg-[color:var(--aqua)] opacity-70 blur-2xl" />
              <div className="glass relative overflow-hidden rounded-[32px] p-8">
                <div className="absolute right-6 top-6 h-3 w-3 rounded-full bg-[color:var(--ember)]" />
                <div className="absolute right-12 top-6 h-3 w-3 rounded-full bg-[color:var(--sun)]" />
                <div className="absolute right-[72px] top-6 h-3 w-3 rounded-full bg-[color:var(--aqua)]" />
                <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                  Mission Control
                </p>
                <h2 className="mt-4 font-display text-4xl uppercase text-black">
                  STEM league season
                </h2>
                <p className="mt-4 text-sm text-black/60">
                  Weekly builds, rapid prototyping, and demo nights that turn curious
                  learners into confident creators.
                </p>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl bg-black/5 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-black/50">
                      Current quests
                    </p>
                    <p className="mt-2 text-sm font-semibold text-black">
                      Game dev sprint, Mars rover robotics, renewable energy lab
                    </p>
                  </div>
                  <div className="rounded-2xl bg-black/5 p-4 float-slow">
                    <p className="text-xs uppercase tracking-[0.24em] text-black/50">
                      Next drop
                    </p>
                    <p className="mt-2 text-sm font-semibold text-black">
                      AI creativity studio and 3D printing bootcamp
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.24em] text-black/50">
                    Coast to coast
                  </p>
                  <button className="rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                    View labs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--night)] px-6 py-10 text-white lg:px-10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-display text-3xl uppercase tracking-wide">
              STEM confidence starts with real projects.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              <span>After-school + weekend programs</span>
              <span>Camp intensives</span>
              <span>School partnerships</span>
              <span>Mobile labs</span>
            </div>
          </div>
        </section>

        <section id="programs" className="px-6 py-20 lg:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                  Programs
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase text-black">
                  Choose your mission track
                </h2>
              </div>
              <p className="max-w-md text-sm text-black/60">
                A rotating curriculum that blends creativity with core STEM skills.
                Every track ends in a public demo that shows real progress.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--sun)] text-black font-display text-2xl">
                  C
                </div>
                <h3 className="mt-6 font-display text-3xl uppercase text-black">
                  Code & Game Design
                </h3>
                <p className="mt-3 text-sm text-black/60">
                  Build playable worlds with JavaScript, Unity, and pixel art labs.
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-black/50">
                  Ages 7-13
                </p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--aqua)] text-black font-display text-2xl">
                  R
                </div>
                <h3 className="mt-6 font-display text-3xl uppercase text-black">
                  Robotics & Engineering
                </h3>
                <p className="mt-3 text-sm text-black/60">
                  Prototype robots, circuit boards, and autonomous challenges.
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-black/50">
                  Ages 9-15
                </p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--ember)] text-white font-display text-2xl">
                  S
                </div>
                <h3 className="mt-6 font-display text-3xl uppercase text-black">
                  Science & Innovation
                </h3>
                <p className="mt-3 text-sm text-black/60">
                  Chemistry labs, climate tech, and invention sprints.
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-black/50">
                  Ages 8-17
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pathway" className="bg-[color:var(--sand-dark)] px-6 py-20 lg:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                  Pathway
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase text-black">
                  A clear STEM journey from curious to confident
                </h2>
                <p className="mt-4 text-sm text-black/60">
                  Students level up every 8 weeks with new studio roles, capstones,
                  and leadership opportunities.
                </p>
                <div className="mt-6 space-y-4 text-sm text-black/70">
                  <div className="rounded-2xl bg-white/70 p-4">
                    <p className="font-semibold text-black">Level 1: Explorer</p>
                    <p>Foundations in coding logic, design thinking, teamwork.</p>
                  </div>
                  <div className="rounded-2xl bg-white/70 p-4">
                    <p className="font-semibold text-black">Level 2: Builder</p>
                    <p>Robotics builds, game loops, electronics, rapid iteration.</p>
                  </div>
                  <div className="rounded-2xl bg-white/70 p-4">
                    <p className="font-semibold text-black">Level 3: Innovator</p>
                    <p>Mentor juniors, pitch demos, solve real-world briefs.</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[32px] bg-[color:var(--night)] p-8 text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Skill spotlight
                </p>
                <h3 className="mt-4 font-display text-4xl uppercase">
                  Future-ready skills
                </h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Python + JavaScript",
                    "Robotics + sensors",
                    "3D modeling",
                    "Product design",
                    "AI creativity labs",
                    "Entrepreneurship",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <button className="mt-8 w-full rounded-full bg-[color:var(--sun)] py-3 text-sm font-semibold text-black">
                  Download Course Map
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="locations" className="px-6 py-20 lg:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="rounded-[32px] border border-black/10 bg-grid p-8">
                <div className="rounded-[24px] bg-white/90 p-6 shadow-lg">
                  <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                    Canada wide
                  </p>
                  <h3 className="mt-4 font-display text-4xl uppercase text-black">
                    Labs and mobile studios
                  </h3>
                  <p className="mt-4 text-sm text-black/60">
                    From Toronto to Vancouver, we deliver after-school programs,
                    weekend intensives, and school partnerships tailored for each
                    community.
                  </p>
                  <div className="mt-6 grid gap-3 text-sm text-black/70 sm:grid-cols-2">
                    <span>Toronto</span>
                    <span>Ottawa</span>
                    <span>Vancouver</span>
                    <span>Calgary</span>
                    <span>Montreal</span>
                    <span>Halifax</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                  Why parents choose us
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase text-black">
                  A high-energy learning culture
                </h2>
                <div className="mt-6 space-y-4 text-sm text-black/70">
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <p className="font-semibold text-black">
                      Studio mentors, not lectures
                    </p>
                    <p>Small squads, guided builds, rapid feedback loops.</p>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <p className="font-semibold text-black">Showcase moments</p>
                    <p>Every 8 weeks ends with a demo night and badges.</p>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <p className="font-semibold text-black">Inclusive by design</p>
                    <p>Programs built to welcome all skill levels and genders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--night)] px-6 py-20 text-white lg:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  STEM outcomes
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase">
                  Creativity meets career skills
                </h2>
                <p className="mt-4 text-sm text-white/70">
                  Students graduate with portfolios, confidence, and the ability to
                  collaborate like a real product team.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Portfolio-ready capstones",
                  "Pitch decks and demos",
                  "Leadership coaching",
                  "Industry guest mentors",
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

        <section id="stories" className="px-6 py-20 lg:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                  Stories
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase text-black">
                  Families feel the difference
                </h2>
              </div>
              <button className="rounded-full border border-black/20 px-5 py-2 text-sm font-semibold text-black">
                Read more reviews
              </button>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                {
                  quote:
                    "My son built a robot and now wants to be an engineer. The mentors make STEM feel exciting.",
                  name: "Priya M.",
                  city: "Toronto",
                },
                {
                  quote:
                    "Every class is hands-on. The demo nights keep my daughter motivated and proud.",
                  name: "Lucas W.",
                  city: "Vancouver",
                },
                {
                  quote:
                    "Turned-E blends creativity with real coding. We love the community vibe.",
                  name: "Danielle C.",
                  city: "Ottawa",
                },
              ].map((story) => (
                <div
                  key={story.name}
                  className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
                >
                  <p className="text-sm text-black/70">"{story.quote}"</p>
                  <p className="mt-6 text-xs uppercase tracking-[0.24em] text-black/50">
                    {story.name} · {story.city}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-10">
          <div className="mx-auto w-full max-w-6xl rounded-[36px] bg-[color:var(--sun)] p-10 text-black shadow-xl">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-black/60">
                  Ready to join?
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase">
                  Turned-E Academy is open for enrollment
                </h2>
                <p className="mt-4 text-sm text-black/70">
                  Book a tour, meet the mentors, and grab a spot in our next cohort.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
                  Schedule a Visit
                </button>
                <button className="rounded-full border border-black/30 px-6 py-3 text-sm font-semibold text-black">
                  Download Parent Packet
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-white px-6 py-10 lg:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-2xl uppercase text-black">
              Turned-E Academy
            </p>
            <p className="text-sm text-black/60">
              STEM education for Canadian innovators.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-black/60">
            <span>hello@turnede.ca</span>
            <span>1-800-555-0199</span>
            <span>Follow: Instagram · YouTube · LinkedIn</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
