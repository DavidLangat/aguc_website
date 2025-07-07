'use client';

import { motion, Variants } from 'framer-motion';
import { Book, Users, Shield, MessageCircle } from 'lucide-react';
import { ReactElement } from 'react';

interface Objective {
  id: string;
  icon: ReactElement;
  title: string;
  content: string;
}

const objectives: Objective[] = [
  {
    id: 'biblical-truth',
    icon: <Book className="w-8 h-8" />,
    title: 'Biblical Truth',
    content: 'To proclaim the Gospel with clarity, purity, and power.',
  },
  {
    id: 'christian-unity',
    icon: <Users className="w-8 h-8" />,
    title: 'Christian Unity',
    content: 'Agency for fellowship, education, and united witness.',
  },
  {
    id: 'defense-faith',
    icon: <Shield className="w-8 h-8" />,
    title: 'Defense of the Faith',
    content: 'Opposing modern compromise with unwavering doctrine.',
  },
  {
    id: 'evangelism',
    icon: <MessageCircle className="w-8 h-8" />,
    title: 'Evangelism',
    content: 'Bringing the message of salvation to every tribe and nation.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
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

const CoreObjectives = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1DA1B8]/5 via-[#669966]/5 to-transparent opacity-75" />
        <div className="absolute inset-0 bg-[#A05330]/5 bg-opacity-20" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM38.284 0l7.9 7.9-1.415 1.413-9.9-9.9h3.415zM21.657 0l-7.9 7.9 1.415 1.413 9.9-9.9h-3.415zM3.415 0L13.314 9.9l-1.414 1.413-1.414-1.414-7.9-7.9h2.83zM56.585 0L46.686 9.9l1.415 1.413 1.414-1.414 7.9-7.9h-2.83zM28.284 0l9.9 9.9-1.414 1.413-1.414-1.414-7.9-7.9h2.828zM31.716 0L21.816 9.9l1.414 1.413 1.414-1.414 7.9-7.9h-2.828zM33.828 0l-9.9 9.9 1.415 1.414 1.414-1.414L35.242 0h-2.828zM26.172 0l9.9 9.9-1.415 1.414-1.414-1.414L24.757 0h2.828z' fill='%231DA1B8' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-20">
            <motion.span
              variants={itemVariants}
              className="inline-block text-sm font-medium text-[#1DA1B8] tracking-wider uppercase mb-4"
            >
              Core Objectives
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#000000] mb-6 leading-tight"
            >
              Our Mission & Values
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-[#000000]/80 leading-relaxed"
            >
              Guided by unwavering faith and biblical principles, we strive to fulfill
              these core objectives in service of God and our community.
            </motion.p>
          </div>

          {/* Objectives Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {objectives.map((objective) => (
              <motion.div
                key={objective.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1DA1B8]/10 to-[#669966]/10 text-[#1DA1B8] mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:from-[#1DA1B8]/20 group-hover:to-[#669966]/20">
                    {objective.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#000000] mb-3 group-hover:text-[#1DA1B8] transition-colors duration-300">
                    {objective.title}
                  </h3>
                  <p className="text-[#000000]/70 leading-relaxed">
                    {objective.content}
                  </p>
                </div>
                <div className="h-1 w-12 bg-[#669966]/20 group-hover:w-full group-hover:bg-[#669966]/40 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-[#1DA1B8]/10 via-[#669966]/10 to-transparent" />
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-radial from-[#A05330]/10 to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-radial from-[#669966]/5 to-transparent blur-3xl" />
    </section>
  );
};

export default CoreObjectives;
