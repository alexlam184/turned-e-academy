/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Rocket,
  Beaker,
  Cpu,
  Code,
  Zap,
  Users,
  Star,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "./components/I18nProvider";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <section className="pt-32 pb-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                  {t("hero.title")}
                </span>
              </h1>
              <p className="text-xl text-white leading-relaxed">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition-all shadow-lg hover:shadow-2xl flex items-center space-x-2">
                  <span>{t("hero.cta.primary")}</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition-all shadow-lg hover:shadow-2xl border-2 border-blue-500">
                  {t("hero.cta.secondary")}
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="floating">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl p-8 shadow-2xl transform rotate-3">
                  <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-100 p-6 rounded-xl text-center hover:scale-110 transition-transform cursor-pointer floating-delayed">
                        <Beaker className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                        <p className="font-bold text-blue-700">
                          {t("hero.card.science")}
                        </p>
                      </div>
                      <div className="bg-green-100 p-6 rounded-xl text-center hover:scale-110 transition-transform cursor-pointer floating">
                        <Cpu className="w-12 h-12 text-green-500 mx-auto mb-2" />
                        <p className="font-bold text-green-700">
                          {t("hero.card.tech")}
                        </p>
                      </div>
                      <div className="bg-blue-100 p-6 rounded-xl text-center hover:scale-110 transition-transform cursor-pointer floating-delayed">
                        <Code className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                        <p className="font-bold text-blue-700">
                          {t("hero.card.engineering")}
                        </p>
                      </div>
                      <div className="bg-red-100 p-6 rounded-xl text-center hover:scale-110 transition-transform cursor-pointer floating">
                        <Zap className="w-12 h-12 text-red-500 mx-auto mb-2" />
                        <p className="font-bold text-red-700">
                          {t("hero.card.math")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t("about.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("about.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-3xl hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer">
              <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 animate-bounce">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-blue-700">
                {t("about.feature.fun.title")}
              </h3>
              <p className="text-gray-700">
                {t("about.feature.fun.body")}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-3xl hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer">
              <div
                className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 animate-bounce"
                style={{ animationDelay: "0.1s" }}
              >
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-blue-700">
                {t("about.feature.expert.title")}
              </h3>
              <p className="text-gray-700">
                {t("about.feature.expert.body")}
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-green-50 p-8 rounded-3xl hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer">
              <div
                className="bg-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 animate-bounce"
                style={{ animationDelay: "0.2s" }}
              >
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-green-700">
                {t("about.feature.projects.title")}
              </h3>
              <p className="text-gray-700">
                {t("about.feature.projects.body")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="programs"
        className="py-20 px-4 bg-gradient-to-br from-blue-50 to-cyan-50"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {t("programs.title")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("programs.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                {t("programs.card.robotics.title")}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {t("programs.card.robotics.body")}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                {t("programs.card.coding.title")}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {t("programs.card.coding.body")}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Beaker className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                {t("programs.card.science.title")}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {t("programs.card.science.body")}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                {t("programs.card.math.title")}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {t("programs.card.math.body")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why-us"
        className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-500 text-white"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t("why.title")}
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/30 transition-all">
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-lg">{t("why.stat.satisfaction")}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/30 transition-all">
              <p className="text-5xl font-bold mb-2">50+</p>
              <p className="text-lg">{t("why.stat.teachers")}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/30 transition-all">
              <p className="text-5xl font-bold mb-2">100+</p>
              <p className="text-lg">{t("why.stat.courses")}</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/30 transition-all">
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-lg">{t("why.stat.years")}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t("contact.title")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl text-center">
              <Mail className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <p className="font-bold text-gray-800 mb-1">{t("contact.card.email")}</p>
              <p className="text-sm text-gray-600">hello@turned-e.ca</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl text-center">
              <Phone className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <p className="font-bold text-gray-800 mb-1">{t("contact.card.call")}</p>
              <p className="text-sm text-gray-600">1-800-STEM-FUN</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl text-center">
              <MapPin className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <p className="font-bold text-gray-800 mb-1">{t("contact.card.visit")}</p>
              <p className="text-sm text-gray-600">{t("contact.card.location")}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              {t("contact.offer.title")}
            </h3>
            <p className="text-lg mb-6">
              {t("contact.offer.body")}
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition-all shadow-lg">
              {t("contact.offer.cta")}
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Rocket className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold">turned-e! academy</span>
          </div>
          <p className="text-gray-400 mb-4">
            {t("footer.tagline")}
          </p>
          <p className="text-sm text-gray-500">
            {t("footer.legal")}
          </p>
        </div>
      </footer>
    </div>
  );
}
