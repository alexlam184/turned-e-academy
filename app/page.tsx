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

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

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
                  Learn, Play, Create!
                </span>
              </h1>
              <p className="text-xl text-white leading-relaxed">
                🍁 Canada's most exciting STEM education adventure! Join
                turned-e! academy where science meets fun, and every student
                becomes a future innovator!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition-all shadow-lg hover:shadow-2xl flex items-center space-x-2">
                  <span>Start Your Journey</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition-all shadow-lg hover:shadow-2xl border-2 border-blue-500">
                  Watch Video
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
                        <p className="font-bold text-blue-700">Science</p>
                      </div>
                      <div className="bg-green-100 p-6 rounded-xl text-center hover:scale-110 transition-transform cursor-pointer floating">
                        <Cpu className="w-12 h-12 text-green-500 mx-auto mb-2" />
                        <p className="font-bold text-green-700">Tech</p>
                      </div>
                      <div className="bg-blue-100 p-6 rounded-xl text-center hover:scale-110 transition-transform cursor-pointer floating-delayed">
                        <Code className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                        <p className="font-bold text-blue-700">Engineering</p>
                      </div>
                      <div className="bg-red-100 p-6 rounded-xl text-center hover:scale-110 transition-transform cursor-pointer floating">
                        <Zap className="w-12 h-12 text-red-500 mx-auto mb-2" />
                        <p className="font-bold text-red-700">Math</p>
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
              What Makes Us Special? 🌟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just another education company - we're a launchpad for
              young minds!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-8 rounded-3xl hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer">
              <div className="bg-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 animate-bounce">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-blue-700">
                Fun-First Learning
              </h3>
              <p className="text-gray-700">
                Who says learning can't be hilarious? We mix education with
                games, jokes, and lots of "aha!" moments!
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
                Expert Instructors
              </h3>
              <p className="text-gray-700">
                Our teachers are like superheroes - with PhDs! They make rocket
                science feel like a playground adventure.
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
                Hands-On Projects
              </h3>
              <p className="text-gray-700">
                Build robots, code games, launch rockets! You'll create things
                so cool, your friends will be jealous.
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
              Amazing Programs 🚀
            </h2>
            <p className="text-xl text-gray-600">
              Choose your adventure in the world of STEM!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                Robotics
              </h3>
              <p className="text-gray-600 text-center text-sm">
                Build and program awesome robots that actually move!
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                Coding
              </h3>
              <p className="text-gray-600 text-center text-sm">
                Create games, apps, and websites like a pro developer!
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Beaker className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                Science Labs
              </h3>
              <p className="text-gray-600 text-center text-sm">
                Explode, fizz, and discover the magic of science!
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800">
                Math Masters
              </h3>
              <p className="text-gray-600 text-center text-sm">
                Crack codes and solve puzzles that'll blow your mind!
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
            Join 10,000+ Happy Learners! 🎉
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/30 transition-all">
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-lg">Satisfaction Rate</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/30 transition-all">
              <p className="text-5xl font-bold mb-2">50+</p>
              <p className="text-lg">Expert Teachers</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/30 transition-all">
              <p className="text-5xl font-bold mb-2">100+</p>
              <p className="text-lg">Fun Courses</p>
            </div>
            <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/30 transition-all">
              <p className="text-5xl font-bold mb-2">15+</p>
              <p className="text-lg">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Ready to Start? 🎯
            </h2>
            <p className="text-xl text-gray-600">
              Let's make learning the best part of your day!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl text-center">
              <Mail className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <p className="font-bold text-gray-800 mb-1">Email Us</p>
              <p className="text-sm text-gray-600">hello@turned-e.ca</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl text-center">
              <Phone className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <p className="font-bold text-gray-800 mb-1">Call Us</p>
              <p className="text-sm text-gray-600">1-800-STEM-FUN</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl text-center">
              <MapPin className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <p className="font-bold text-gray-800 mb-1">Visit Us</p>
              <p className="text-sm text-gray-600">Toronto, Canada 🍁</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              🎊 Special Offer: First Class FREE!
            </h3>
            <p className="text-lg mb-6">
              Try any program for free and see why kids can't stop talking about
              us!
            </p>
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition-all shadow-lg">
              Claim Your Free Class
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
            Inspiring the next generation of innovators across Canada 🍁
          </p>
          <p className="text-sm text-gray-500">
            © 2024 turned-e! academy. All rights reserved. | Made with ❤️ and
            lots of code
          </p>
        </div>
      </footer>
    </div>
  );
}
