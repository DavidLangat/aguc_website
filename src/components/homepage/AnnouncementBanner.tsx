'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell } from 'lucide-react';
import { Announcement } from '@/types/homepage';

interface AnnouncementBannerProps {
  announcements: Announcement[];
}

export default function AnnouncementBanner({ announcements }: AnnouncementBannerProps) {
  const [visibleAnnouncements, setVisibleAnnouncements] = useState(
    announcements.filter(a => a.active)
  );

  const dismissAnnouncement = (id: string) => {
    setVisibleAnnouncements(prev => prev.filter(a => a.id !== id));
  };

  if (visibleAnnouncements.length === 0) {
    return null;
  }

  // Show the highest priority announcement
  const currentAnnouncement = visibleAnnouncements.sort((a, b) => b.priority - a.priority)[0];

  return (
    <AnimatePresence>
      {currentAnnouncement && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='m30 30-15-15v30l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 max-w-6xl mx-auto px-6 py-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 flex-1">
                {/* Bell Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex-shrink-0"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Bell className="w-5 h-5" />
                  </div>
                </motion.div>

                {/* Announcement Content */}
                <div className="flex-1 min-w-0">
                  <motion.h4
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="font-semibold text-lg mb-1"
                  >
                    {currentAnnouncement.title}
                  </motion.h4>
                  <motion.p
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-white/90 text-sm md:text-base leading-relaxed"
                  >
                    {currentAnnouncement.content}
                  </motion.p>
                </div>

                {/* Additional Announcements Indicator */}
                {visibleAnnouncements.length > 1 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 1 }}
                    className="hidden md:flex items-center space-x-2 text-sm text-white/80"
                  >
                    <span>+{visibleAnnouncements.length - 1} more</span>
                  </motion.div>
                )}
              </div>

              {/* Dismiss Button */}
              <motion.button
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => dismissAnnouncement(currentAnnouncement.id)}
                className="flex-shrink-0 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm ml-4"
                aria-label="Dismiss announcement"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
