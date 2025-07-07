'use client';

import { motion, Variants, AnimatePresence } from 'framer-motion';
import { ChevronDown, Book, Heart, Cross, Church } from 'lucide-react';
import { useState } from 'react';

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

type Vow = {
  id: string;
  icon: typeof Book;
  question: string;
  description: string;
};

const vows: Vow[] = [
  {
    id: 'bible',
    icon: Book,
    question: 'Do you believe the Bible (Old & New Testaments) is the Word of God?',
    description: 'Affirming the divine inspiration and authority of Scripture as our supreme guide for faith and life.'
  },
  {
    id: 'salvation',
    icon: Cross,
    question: 'Do you confess your sins and trust in Jesus Christ alone for salvation?',
    description: "Acknowledging our need for redemption and placing our complete trust in Christ's finished work."
  },
  {
    id: 'godly-life',
    icon: Heart,
    question: 'Will you live a godly life and serve Christ faithfully?',
    description: 'Committing to a life of holiness, service, and devotion to Christ and His kingdom.'
  },
  {
    id: 'governance',
    icon: Church,
    question: 'Will you submit to church governance and correction?',
    description: 'Accepting the spiritual authority of the church leadership for guidance, accountability, and growth.'
  }
];

const VowAccordion = ({ vow, isOpen, onToggle }: { vow: Vow; isOpen: boolean; onToggle: () => void }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="border-b border-gray-200 last:border-none p-2"
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start justify-between text-left focus:outline-none group"
      >
        <div className="flex items-start gap-4 pr-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#1DA1B8]/10 to-[#669966]/10 flex items-center justify-center text-[#1DA1B8] mt-1 group-hover:from-[#1DA1B8]/20 group-hover:to-[#669966]/20 transition-all duration-300">
            <vow.icon className="w-5 h-5" />
          </div>
          <span className="text-lg text-[#000000] font-medium leading-tight group-hover:text-[#1DA1B8] transition-colors">
            {vow.question}
          </span>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-[#1DA1B8] transform transition-transform duration-300 flex-shrink-0 mt-2
            ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-[#000000]/70 pb-6 pl-14">
              {vow.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ChurchVowsSection = () => {
  const [openVowId, setOpenVowId] = useState<string>('bible');

  return (
    <section className="relative py-24 bg-gradient-to-br from-white to-[#1DA1B8]/5 overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#669966]/10 via-white to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(29,161,184,0.05),transparent_70%)]" />
      </div> */}

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Content Column */}
          <div>
            <motion.span 
              variants={fadeInUp}
              className="inline-block text-sm font-medium text-[#1DA1B8] tracking-wider uppercase mb-4"
            >
              Our Vows
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#000000] mb-6 leading-tight"
            >
              Our Vows of Commitment
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-[#000000]/70 leading-relaxed mb-12"
            >
              As believers, we make these solemn promises before God, committing ourselves
              to His Word, His people, and His ways.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="space-y-0  divide-y divide-gray-200 bg-white rounded-2xl shadow-[0_4px_24px_rgb(0,0,0,0.04)]"
            >
              {vows.map((vow) => (
                <VowAccordion
                  key={vow.id}
                  vow={vow}
                  isOpen={openVowId === vow.id}
                  onToggle={() => setOpenVowId(openVowId === vow.id ? '' : vow.id)}
                />
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10"
            >
              <a
                href="/vows"
                className="inline-flex items-center px-8 py-3 bg-[#1DA1B8] hover:bg-[#1991A6] text-white rounded-full transition-all duration-300 shadow-lg shadow-[#1DA1B8]/10 hover:shadow-[#1DA1B8]/20"
              >
                View All Vows
              </a>
            </motion.div>
          </div>

          {/* Visual Column */}
          <motion.div
            variants={fadeInUp}
            className="relative hidden lg:block"
          >
            <div className="sticky top-24 pt-12">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#1DA1B8]/5 to-white rounded-2xl overflow-hidden shadow-[0_8px_24px_rgb(0,0,0,0.04)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(102,153,102,0.1),transparent_70%)]" />
                <div className="absolute inset-6 grid grid-cols-2 gap-4">
                  {[Book, Cross, Heart, Church].map((Icon, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm flex items-center justify-center p-4 shadow-lg shadow-[#1DA1B8]/5 hover:shadow-[#1DA1B8]/10 transition-all duration-300"
                    >
                      <Icon className={`w-8 h-8 ${
                        index === 0 ? 'text-[#1DA1B8]' : 
                        index === 1 ? 'text-[#C62828]' : 
                        index === 2 ? 'text-[#669966]' : 
                        'text-[#A05330]'
                      }`} />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChurchVowsSection;
