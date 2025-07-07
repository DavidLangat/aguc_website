'use client';

import { motion } from 'framer-motion';
import { Play, Calendar, Clock, User, Headphones, Video } from 'lucide-react';
import Image from 'next/image';
import { Sermon } from '@/types/homepage';

interface LatestSermonProps {
  sermon: Sermon;
}

export default function LatestSermon({ sermon }: LatestSermonProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Sermon
          </h2>
          <p className="text-xl text-gray-600">
            Grow in faith with our weekly messages
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Sermon Video Thumbnail */}
          <div className="relative group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={sermon.thumbnail_url}
                alt={sermon.title}
                fill
                className="object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors duration-300">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
                >
                  <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                </motion.button>
              </div>

              {/* Series Badge */}
              <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                {sermon.series}
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {sermon.duration}
              </div>
            </motion.div>
          </div>

          {/* Sermon Details */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {sermon.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {sermon.description}
              </p>
            </motion.div>

            {/* Sermon Meta Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3 text-gray-600">
                <User className="w-5 h-5 text-amber-500" />
                <span className="font-medium">{sermon.speaker}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Calendar className="w-5 h-5 text-amber-500" />
                <span>{formatDate(sermon.date)}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock className="w-5 h-5 text-amber-500" />
                <span>{sermon.duration}</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group flex items-center justify-center space-x-3 bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-4 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                <Video className="w-5 h-5" />
                <span>Watch Video</span>
              </button>
              
              <button className="group flex items-center justify-center space-x-3 bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-4 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                <Headphones className="w-5 h-5" />
                <span>Listen Audio</span>
              </button>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-6 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500 mb-2">Part of the series:</p>
              <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                {sermon.series}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Browse More Sermons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-white hover:bg-gray-50 text-gray-900 font-medium px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl border border-gray-200">
            Browse All Sermons
          </button>
        </motion.div>
      </div>
    </section>
  );
}
