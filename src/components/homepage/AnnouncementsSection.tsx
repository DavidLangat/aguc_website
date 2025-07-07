'use client';

import { motion, Variants } from 'framer-motion';
import { CalendarDays, MessageCircle, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useCallback } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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

type Announcement = {
  id: string;
  icon: typeof CalendarDays;
  title: string;
  description: string;
  datetime?: string;
  link?: string;
};

const announcements: Announcement[] = [
  {
    id: 'fellowship',
    icon: CalendarDays,
    title: 'Sunday Fellowship',
    description: 'Join us for worship and fellowship every Sunday.',
    datetime: '9:00 AM',
  },
  {
    id: 'bible-study',
    icon: MessageCircle,
    title: 'Bible Study Resumes',
    description: 'Midweek Bible study and prayer meeting.',
    datetime: 'Wednesday 5 PM',
  },
  {
    id: 'youth-retreat',
    icon: MapPin,
    title: 'Youth Retreat Registration',
    description: 'Register now for our upcoming youth retreat.',
    link: '/events/youth-retreat',
  },
];

const AnnouncementCard = ({ announcement }: { announcement: Announcement }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-2xl shadow-[0_4px_24px_rgb(0,0,0,0.04)] p-6 flex flex-col h-full transition-all duration-300 hover:shadow-[0_8px_32px_rgb(0,0,0,0.08)]"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#1DA1B8]/10 to-[#669966]/10 flex items-center justify-center text-[#1DA1B8] transition-all duration-300 group-hover:from-[#1DA1B8]/20 group-hover:to-[#669966]/20">
          <announcement.icon className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-[#000000] group-hover:text-[#1DA1B8] transition-colors">
            {announcement.title}
          </h3>
          {announcement.datetime && (
            <p className="text-sm text-[#669966] mt-1">{announcement.datetime}</p>
          )}
        </div>
      </div>
      
      <p className="text-[#000000]/70 flex-grow">
        {announcement.description}
      </p>

      {announcement.link && (
        <div className="mt-4">
          <a
            href={announcement.link}
            className="inline-flex items-center text-sm text-[#1DA1B8] hover:text-[#1991A6] font-medium group/link"
          >
            Learn More
            <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </a>
        </div>
      )}
    </motion.div>
  );
};

const AnnouncementsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const totalPages = Math.ceil(announcements.length / 2);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  return (
    <section className="relative py-24 bg-gradient-to-br from-white to-[#1DA1B8]/5 overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#669966]/10 via-white to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(29,161,184,0.08),transparent_70%)]" />
      </div> */}

      <div className="container mx-auto px-4">
        <motion.div
          ref={containerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Content */}
            <div>
              <motion.span
                variants={fadeInUp}
                className="inline-block text-sm font-medium text-[#1DA1B8] tracking-wider uppercase mb-4"
              >
                Announcements
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#000000] mb-6 leading-tight"
              >
                Stay Updated
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-[#000000]/70 leading-relaxed mb-10"
              >
                Keep up with the latest news, events, and activities in our church community.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="mt-8 hidden lg:flex items-center gap-4"
              >
                <button
                  onClick={prevPage}
                  className="w-12 h-12 rounded-full bg-[#1DA1B8]/10 hover:bg-[#1DA1B8]/20 flex items-center justify-center text-[#1DA1B8] transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextPage}
                  className="w-12 h-12 rounded-full bg-[#1DA1B8]/10 hover:bg-[#1DA1B8]/20 flex items-center justify-center text-[#1DA1B8] transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <a
                  href="/announcements"
                  className="ml-4 inline-flex items-center px-8 py-3 bg-[#669966] hover:bg-[#558855] text-white rounded-full transition-all duration-300 group shadow-lg shadow-[#669966]/10"
                >
                  All Announcements
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>

            {/* Announcements Grid */}
            <div className="relative overflow-hidden">
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                initial={{ x: 0 }}
                animate={{ 
                  x: `-${currentPage * 100}%`,
                  opacity: 1
                }}
                style={{ willChange: 'transform' }}
                transition={{ 
                  duration: 0.5, 
                  ease: "easeInOut",
                  opacity: { duration: 0.3 }
                }}
              >
                {announcements.map((announcement) => (
                  <AnnouncementCard key={announcement.id} announcement={announcement} />
                ))}
              </motion.div>

              {/* Mobile Controls */}
              <motion.div
                variants={fadeInUp}
                className="mt-8 flex lg:hidden items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={prevPage}
                    className="w-12 h-12 rounded-full bg-[#1DA1B8]/10 hover:bg-[#1DA1B8]/20 flex items-center justify-center text-[#1DA1B8] transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextPage}
                    className="w-12 h-12 rounded-full bg-[#1DA1B8]/10 hover:bg-[#1DA1B8]/20 flex items-center justify-center text-[#1DA1B8] transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                <a
                  href="/announcements"
                  className="inline-flex items-center px-6 py-3 bg-[#669966] hover:bg-[#558855] text-white rounded-full transition-all duration-300 group text-sm shadow-lg shadow-[#669966]/10"
                >
                  All Announcements
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-1/4 top-0 w-32 h-32 bg-gradient-to-b from-amber-100/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute right-1/4 bottom-0 w-24 h-24 bg-gradient-to-t from-amber-50/30 to-transparent rounded-full blur-2xl" />
    </section>
  );
};

export default AnnouncementsSection;
