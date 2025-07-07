'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const ScriptureOfTheDay = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-white to-[#1DA1B8]/5 overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1DA1B8]/5 via-white to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(102,153,102,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(160,83,48,0.05),transparent_70%)]" />
      </div> */}

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          <div>
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#1DA1B8]/10 via-[#669966]/10 to-[#1DA1B8]/5 text-[#1DA1B8] font-medium text-sm mb-8 shadow-sm backdrop-blur-sm ring-1 ring-[#1DA1B8]/10 hover:ring-[#1DA1B8]/20 transition-all duration-300"
            >
              <BookOpen className="w-4 h-4" />
              Scripture of the Day
            </motion.span>

            <motion.blockquote
              variants={fadeInUp}
              className="relative max-w-2xl"
            >
              {/* Large Quote Mark */}
              <span className="absolute -top-8 -left-4 text-6xl text-[#C62828]/25 font-serif select-none">&ldquo;</span>
              
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#000000] leading-relaxed mb-6 pl-6">
                But you are a chosen generation, a royal priesthood, a holy nation…
              </p>
              
              <cite className="text-lg text-[#000000]/60 font-medium not-italic pl-6 block">
                1 Peter 2:9
              </cite>
            </motion.blockquote>

            <motion.div
              variants={fadeInUp}
              className="mt-12"
            >
              <a
                href="/devotional"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#1DA1B8] to-[#669966] hover:from-[#1DA1B8] hover:to-[#558855] text-white rounded-full transition-all duration-300 group shadow-lg shadow-[#1DA1B8]/10 hover:shadow-xl hover:shadow-[#1DA1B8]/20"
              >
                View Devotional
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Visual Element */}
          <motion.div
            variants={fadeInUp}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#1DA1B8]/10 via-white to-[#669966]/5 rounded-2xl overflow-hidden shadow-xl shadow-[#1DA1B8]/10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(102,153,102,0.1),transparent_70%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(160,83,48,0.05),transparent_70%)]" />
              <div className="absolute inset-0 bg-[url('/pattern-light.png')] opacity-20 mix-blend-overlay" />
              <div className="absolute inset-4 rounded-xl border border-[#1DA1B8]/20 bg-gradient-to-br from-white/40 to-transparent backdrop-blur-sm" />
              <BookOpen className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-[#C62828]/25" />
              
              {/* Decorative Cross */}
              <div className="absolute bottom-4 right-4 w-12 h-12">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M24 4v40M4 24h40"
                    stroke="url(#cross-gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="cross-gradient"
                      x1="4"
                      y1="24"
                      x2="44"
                      y2="24"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#1DA1B8" stopOpacity="0.3" />
                      <stop offset="0.5" stopColor="#A05330" stopOpacity="0.2" />
                      <stop offset="1" stopColor="#669966" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScriptureOfTheDay;
