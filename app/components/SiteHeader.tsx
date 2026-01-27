"use client";
import {
  Rocket,
  Sparkles,
  ChevronDown,
  Cpu,
  Zap,
  Menu,
  X,
  School,
  Landmark,
  GraduationCap,
  BookA,
} from "lucide-react";
import { useState } from "react";
import { useI18n } from "./I18nProvider";
import type { Locale } from "../i18n/translations";

/* eslint-disable @next/next/no-html-link-for-pages */
export default function SiteHeader() {
  const { locale, setLocale, t } = useI18n();
  const programsMenu = [
    { label: t("program.sat"), slug: "sat-prep-program", icon: School },
    { label: t("program.headStart"), slug: "head-start-learning", icon: Landmark },
    {
      label: t("program.academicSupport"),
      slug: "academic-support-program",
      icon: GraduationCap,
    },
    { label: t("program.empowerment"), slug: "empowerment-classes", icon: BookA },
    { label: t("program.robotics"), slug: "robotics", icon: Rocket },
    { label: t("program.ai"), slug: "ai-machine-learning", icon: Cpu },
    { label: t("program.pcb"), slug: "pcb-design", icon: Zap },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const localeOptions: { value: Locale; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "fr", label: "FR" },
    { value: "zh-Hant", label: "??" },
    { value: "zh-Hans", label: "??" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50 transition-all">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Rocket className="w-8 h-8 text-blue-500 animate-bounce" />
              <Sparkles className="w-4 h-4 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              turned-e! academy
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              {t("nav.about")}
            </a>
            <div className="group relative">
              <a
                href="/programs"
                className="inline-flex items-center gap-1 text-gray-700 hover:text-blue-500 transition-colors font-medium"
              >
                {t("nav.programs")}
                <span className="text-xs">▾</span>
              </a>
              <div className="pointer-events-none invisible absolute left-0 top-full z-20 mt-3 w-64 rounded-2xl border border-blue-100 bg-white p-3 text-sm text-gray-700 opacity-0 shadow-xl transition group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
                <a
                  className="block rounded-xl px-3 py-2 hover:bg-blue-50"
                  href="/programs/sat-prep-program"
                >
                  {t("program.sat")}
                </a>
                <a
                  className="block rounded-xl px-3 py-2 hover:bg-blue-50"
                  href="/programs/head-start-learning"
                >
                  {t("program.headStart")}
                </a>
                <a
                  className="block rounded-xl px-3 py-2 hover:bg-blue-50"
                  href="/programs/academic-support-program"
                >
                  {t("program.academicSupport")}
                </a>
                <a
                  className="block rounded-xl px-3 py-2 hover:bg-blue-50"
                  href="/programs/academic-program-online"
                >
                  {t("program.academicOnline")}
                </a>
                <a
                  className="block rounded-xl px-3 py-2 hover:bg-blue-50"
                  href="/programs/empowerment-classes"
                >
                  {t("program.empowerment")}
                </a>
              </div>
            </div>
            <a
              href="/camp"
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              {t("nav.camp")}
            </a>
            <a
              href="/blog"
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              {t("nav.blog")}
            </a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <select
              aria-label="Select language"
              value={locale}
              onChange={(event) => setLocale(event.target.value as Locale)}
              className="rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-semibold text-blue-700 shadow-sm hover:border-blue-300 focus:outline-none"
            >
              {localeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transform transition-all shadow-lg hover:shadow-xl">
              {t("nav.enroll")}
            </button>
          </div>
        </nav>
      </header>
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50 transition-all">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Rocket className="w-8 h-8 text-blue-500 animate-bounce" />
              <Sparkles className="w-4 h-4 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              turned-e! academy
            </span>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              {t("nav.about")}
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-500 transition-colors font-medium flex items-center space-x-1">
                <span>{t("nav.programs")}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {programsMenu.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.slug}`}
                    className="block px-4 py-3 text-gray-700 hover:text-blue-500 hover:bg-blue-50 transition-all first:rounded-t-xl last:rounded-b-xl"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="#camp"
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              {t("nav.camp")}
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              FAQ
            </a>
            <a
              href="#blog"
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              {t("nav.blog")}
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
            >
              {t("nav.contact")}
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <select
              aria-label="Select language"
              value={locale}
              onChange={(event) => setLocale(event.target.value as Locale)}
              className="rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-semibold text-blue-700 shadow-sm hover:border-blue-300 focus:outline-none"
            >
              {localeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transform transition-all shadow-lg hover:shadow-xl">
              {t("nav.enroll")}
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-500 transition-colors font-medium py-2"
              >
                {t("nav.about")}
              </a>
              <div>
                <button
                  onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                  className="w-full text-left text-gray-700 hover:text-blue-500 transition-colors font-medium py-2 flex items-center justify-between"
                >
                  <span>{t("nav.programs")}</span>
                  <ChevronDown
                    className={`w-4 h-4 transform transition-transform ${
                      programsDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {programsDropdownOpen && (
                  <div className="ml-4 space-y-2">
                    {programsMenu.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.slug}`}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setProgramsDropdownOpen(false);
                        }}
                        className="block text-gray-600 hover:text-blue-500 transition-colors py-2"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="#camp"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-500 transition-colors font-medium py-2"
              >
                {t("nav.camp")}
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-500 transition-colors font-medium py-2"
              >
                {t("nav.faq")}
              </a>
              <a
                href="#blog"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-500 transition-colors font-medium py-2"
              >
                {t("nav.blog")}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-500 transition-colors font-medium py-2"
              >
                {t("nav.contact")}
              </a>
              <div className="flex items-center gap-3">
                <label className="text-sm font-semibold text-gray-600">
                  Language
                </label>
                <select
                  aria-label="Select language"
                  value={locale}
                  onChange={(event) => setLocale(event.target.value as Locale)}
                  className="rounded-full border border-blue-200 bg-white px-3 py-1.5 text-sm font-semibold text-blue-700 shadow-sm hover:border-blue-300 focus:outline-none"
                >
                  {localeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transform transition-all shadow-lg mt-4">
                {t("nav.enroll")}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
