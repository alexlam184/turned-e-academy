import { Rocket, Sparkles } from "lucide-react";

/* eslint-disable @next/next/no-html-link-for-pages */
export default function SiteHeader() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50 transition-all">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Rocket className="w-8 h-8 text-orange-500 animate-bounce" />
            <Sparkles className="w-4 h-4 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
            turned-e! academy
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#about"
            className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
          >
            About
          </a>
          <div className="group relative">
            <a
              href="/programs"
              className="inline-flex items-center gap-1 text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Programs
              <span className="text-xs">▾</span>
            </a>
            <div className="pointer-events-none invisible absolute left-0 top-full z-20 mt-3 w-64 rounded-2xl border border-orange-100 bg-white p-3 text-sm text-gray-700 opacity-0 shadow-xl transition group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
              <a className="block rounded-xl px-3 py-2 hover:bg-orange-50" href="/programs/sat-prep-program">
                SAT Prep Program
              </a>
              <a className="block rounded-xl px-3 py-2 hover:bg-orange-50" href="/programs/head-start-learning">
                Head Start Learning
              </a>
              <a className="block rounded-xl px-3 py-2 hover:bg-orange-50" href="/programs/academic-support-program">
                Academic Support Program
              </a>
              <a className="block rounded-xl px-3 py-2 hover:bg-orange-50" href="/programs/academic-program-online">
                Academic Program (Online)
              </a>
              <a className="block rounded-xl px-3 py-2 hover:bg-orange-50" href="/programs/empowerment-classes">
                Empowerment Classes
              </a>
            </div>
          </div>
          <a
            href="/camp"
            className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
          >
            Camp
          </a>
          <a
            href="/blog"
            className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
          >
            Blog
          </a>
        </div>
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transform transition-all shadow-lg hover:shadow-xl">
          Enroll Now
        </button>
      </nav>
    </header>
  );
}
