"use client";

import { useI18n } from "../components/I18nProvider";

export default function CampPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-hero text-[color:var(--ink)]">
      <main>
        <section className="relative overflow-hidden px-6 pb-16 pt-16 lg:px-10 lg:pb-24">
          <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-black/60">
                {t("camp.hero.season")}
              </div>
              <h1 className="mt-6 font-display text-5xl uppercase leading-none text-black sm:text-6xl lg:text-7xl">
                {t("camp.hero.title")}
                <span className="block text-[color:var(--ember)]">
                  {t("camp.hero.titleEmphasis")}
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-black/70">
                {t("camp.hero.subtitle")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="rounded-full bg-[color:var(--ember)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/30 transition hover:-translate-y-0.5 hover:bg-[#c53827]">
                  {t("camp.hero.cta.primary")}
                </button>
                <button className="rounded-full border border-black/20 px-6 py-3 text-sm font-semibold text-black transition hover:border-black/40">
                  {t("camp.hero.cta.secondary")}
                </button>
              </div>
            </div>
            <div className="glass relative overflow-hidden rounded-[32px] p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                {t("camp.dayFlow.label")}
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase text-black">
                {t("camp.dayFlow.title")}
              </h2>
              <div className="mt-6 space-y-4 text-sm text-black/70">
                <div className="rounded-2xl bg-black/5 p-4">
                  <p className="font-semibold text-black">
                    {t("camp.dayFlow.slot1.time")}
                  </p>
                  <p>{t("camp.dayFlow.slot1.body")}</p>
                </div>
                <div className="rounded-2xl bg-black/5 p-4">
                  <p className="font-semibold text-black">
                    {t("camp.dayFlow.slot2.time")}
                  </p>
                  <p>{t("camp.dayFlow.slot2.body")}</p>
                </div>
                <div className="rounded-2xl bg-black/5 p-4">
                  <p className="font-semibold text-black">
                    {t("camp.dayFlow.slot3.time")}
                  </p>
                  <p>{t("camp.dayFlow.slot3.body")}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.24em] text-black/50">
                  {t("camp.dayFlow.footer.label")}
                </p>
                <button className="rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                  {t("camp.dayFlow.footer.cta")}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--night)] px-6 py-10 text-white lg:px-10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="font-display text-3xl uppercase tracking-wide">
              {t("camp.banner.title")}
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-white/70">
              <span>{t("camp.banner.tag1")}</span>
              <span>{t("camp.banner.tag2")}</span>
              <span>{t("camp.banner.tag3")}</span>
              <span>{t("camp.banner.tag4")}</span>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 lg:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                  {t("camp.formats.label")}
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase text-black">
                  {t("camp.formats.title")}
                </h2>
              </div>
              <p className="max-w-md text-sm text-black/60">
                {t("camp.formats.subtitle")}
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--sun)] text-black font-display text-2xl">
                  D
                </div>
                <h3 className="mt-6 font-display text-3xl uppercase text-black">
                  {t("camp.formats.card.day.title")}
                </h3>
                <p className="mt-3 text-sm text-black/60">
                  {t("camp.formats.card.day.body")}
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-black/50">
                  {t("camp.formats.card.day.ages")}
                </p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--aqua)] text-black font-display text-2xl">
                  W
                </div>
                <h3 className="mt-6 font-display text-3xl uppercase text-black">
                  {t("camp.formats.card.week.title")}
                </h3>
                <p className="mt-3 text-sm text-black/60">
                  {t("camp.formats.card.week.body")}
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-black/50">
                  {t("camp.formats.card.week.ages")}
                </p>
              </div>
              <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--ember)] text-white font-display text-2xl">
                  T
                </div>
                <h3 className="mt-6 font-display text-3xl uppercase text-black">
                  {t("camp.formats.card.teen.title")}
                </h3>
                <p className="mt-3 text-sm text-black/60">
                  {t("camp.formats.card.teen.body")}
                </p>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-black/50">
                  {t("camp.formats.card.teen.ages")}
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
                  {t("camp.enroll.label")}
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase">
                  {t("camp.enroll.title")}
                </h2>
                <p className="mt-4 text-sm text-black/70">
                  {t("camp.enroll.subtitle")}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
                  {t("camp.enroll.cta.primary")}
                </button>
                <button className="rounded-full border border-black/30 px-6 py-3 text-sm font-semibold text-black">
                  {t("camp.enroll.cta.secondary")}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
