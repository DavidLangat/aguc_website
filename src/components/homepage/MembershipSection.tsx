'use client';

import { motion, Variants } from 'framer-motion';
import { Users, BookOpen, MessageSquare, ArrowRight } from 'lucide-react';
import Image from 'next/image';

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

const requirements = [
  {
    id: 'age',
    icon: <Users className="w-5 h-5" />,
    text: 'Must be 14+ years',
    description: 'Open to teenagers and adults seeking spiritual growth',
  },
  {
    id: 'catechism',
    icon: <BookOpen className="w-5 h-5" />,
    text: 'Attend catechism class',
    description: 'Learn foundational Biblical truths and church doctrine',
  },
  {
    id: 'confession',
    icon: <MessageSquare className="w-5 h-5" />,
    text: 'Public confession of faith',
    description: 'Declare your commitment to Christ and His church',
  },
];

const MembershipSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#1DA1B8]/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#669966]/10 via-white to-transparent opacity-70" />
        <div
          className="absolute inset-0 opacity-[0.015]"
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
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div className="relative z-10">
              <motion.span
                variants={fadeInUp} 
                className="inline-block text-sm font-medium text-[#1DA1B8] tracking-wider uppercase mb-4"
              >
                Membership
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#000000] mb-6 leading-tight"
              >
                Become a Member
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-[#000000]/70 leading-relaxed mb-8"
              >
                Membership is open to all who confess Jesus Christ, live a godly life, 
                and commit to the body of believers.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="space-y-6 mb-10"
              >
                {requirements.map((req) => (
                  <div key={req.id} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#1DA1B8]/10 to-[#669966]/10 flex items-center justify-center text-[#1DA1B8] transition-all duration-300 hover:from-[#1DA1B8]/20 hover:to-[#669966]/20">
                      {req.icon}
                    </div>
                    <div>
                      <h3 className="text-[#000000] font-medium mb-1">{req.text}</h3>
                      <p className="text-[#000000]/60 text-sm">{req.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="/membership"
                  className="inline-flex items-center px-8 py-3 bg-[#1DA1B8] hover:bg-[#1991A6] text-white rounded-full transition-all duration-300 group shadow-lg shadow-[#1DA1B8]/10"
                >
                  Membership Details
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="/catechism"
                  className="inline-flex items-center px-8 py-3 bg-[#669966] hover:bg-[#558855] text-white rounded-full transition-all duration-300 group shadow-lg shadow-[#669966]/10"
                >
                  Start Catechism Class
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              variants={fadeInUp}
              className="relative lg:h-[600px] h-[400px]"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1607627000458-210e8d2bdb1d?w=1920&q=85"
                  alt="Church membership gathering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#A05330]/30 to-transparent" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#1DA1B8]/10 rounded-full opacity-70 blur-md" />
              <div className="absolute -right-2 -top-2 w-16 h-16 bg-[#669966]/20 rounded-full opacity-70" />
              <div className="absolute -left-8 bottom-8 w-32 h-32 bg-[#A05330]/10 rounded-full opacity-50 blur-lg" />
              
              {/* Accent Line */}
              <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-[#1DA1B8]/20 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipSection;
