'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

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

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AboutUsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1DA1B8]/5 to-transparent opacity-75" />
        <div className="absolute inset-0 bg-[#669966]/5 bg-opacity-20" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM38.284 0l7.9 7.9-1.415 1.413-9.9-9.9h3.415zM21.657 0l-7.9 7.9 1.415 1.413 9.9-9.9h-3.415zM3.415 0L13.314 9.9l-1.414 1.413-1.414-1.414-7.9-7.9h2.83zM56.585 0L46.686 9.9l1.415 1.413 1.414-1.414 7.9-7.9h-2.83zM28.284 0l9.9 9.9-1.414 1.413-1.414-1.414-7.9-7.9h2.828zM31.716 0L21.816 9.9l1.414 1.413 1.414-1.414 7.9-7.9h-2.828zM33.828 0l-9.9 9.9 1.415 1.414 1.414-1.414L35.242 0h-2.828zM26.172 0l9.9 9.9-1.415 1.414-1.414-1.414L24.757 0h2.828z' fill='%231DA1B8' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Content */}
          <motion.div className="relative z-10">
            <motion.span 
              variants={fadeInUp}
              className="inline-block text-sm font-medium text-[#1DA1B8] tracking-wider uppercase mb-4"
            >
              About Us
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#000000] mb-6 leading-tight"
            >
              Who We Are
            </motion.h2>

            <div className="space-y-6">
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-700 leading-relaxed"
              >
                A.G.U.C is a fellowship of Bible-believing Christians committed to the pure 
                proclamation of the Gospel, unity in Spirit, and unwavering adherence to 
                the inerrant Word of God.
              </motion.p>
              
              <motion.p
                variants={fadeInUp}
                className="text-lg text-gray-700 leading-relaxed"
              >
                We focus solely on spiritual matters – free from political involvement – 
                and uphold Protestant orthodoxy through Christian education, support, 
                and shared witness.
              </motion.p>

              <motion.ul
                variants={fadeInUp}
                className="space-y-4 text-gray-700"
              >
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-[#1DA1B8] rounded-full mr-3" />
                  <span>Biblical Teaching & Preaching</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-[#1DA1B8] rounded-full mr-3" />
                  <span>Community Fellowship</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-[#1DA1B8] rounded-full mr-3" />
                  <span>Spiritual Growth & Discipleship</span>
                </li>
              </motion.ul>
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-10"
            >
              <a
                href="/about"
                className="inline-flex items-center px-8 py-3 bg-[#669966] hover:bg-[#558855] text-white rounded-full transition-all duration-300 group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Images */}
          <motion.div
            variants={fadeInUp}
            className="relative lg:h-[600px] h-[400px]"
          >
            {/* Main Image */}
            <motion.div
              variants={imageVariants}
              className="absolute inset-0 rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=85"
                alt="Church community gathering"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#A05330]/30 to-transparent" />
            </motion.div>


            {/* Decorative Elements */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#1DA1B8]/10 rounded-full opacity-70 blur-md" />
            <div className="absolute -right-2 -top-2 w-16 h-16 bg-[#669966]/20 rounded-full opacity-70" />
            <div className="absolute -left-8 bottom-8 w-32 h-32 bg-[#A05330]/10 rounded-full opacity-50 blur-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
