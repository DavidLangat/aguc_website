'use client';

import { motion } from 'framer-motion';
import { Play, Calendar, Heart, Hand } from 'lucide-react';

const quickActions = [
  {
    icon: Play,
    title: 'Watch Live',
    description: 'Join our live stream',
    color: 'bg-gradient-to-br from-red-500 to-red-600',
    hoverColor: 'hover:from-red-600 hover:to-red-700'
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Upcoming activities',
    color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    hoverColor: 'hover:from-blue-600 hover:to-blue-700'
  },
  {
    icon: Heart,
    title: 'Give',
    description: 'Support our mission',
    color: 'bg-gradient-to-br from-amber-500 to-amber-600',
    hoverColor: 'hover:from-amber-600 hover:to-amber-700'
  },
  {
    icon: Hand,
    title: 'Prayer',
    description: 'Request prayers',
    color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    hoverColor: 'hover:from-purple-600 hover:to-purple-700'
  }
];

export default function QuickActions() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need, just a tap away
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group cursor-pointer"
              >
                <div className={`
                  ${action.color} ${action.hoverColor}
                  p-8 rounded-3xl text-white
                  transition-all duration-300 ease-out
                  shadow-lg hover:shadow-2xl
                  transform-gpu
                `}>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-semibold mb-2 group-hover:scale-105 transition-transform duration-200">
                    {action.title}
                  </h3>
                  <p className="text-white/90 group-hover:text-white transition-colors duration-200">
                    {action.description}
                  </p>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Need help finding something? We&apos;re here for you.
          </p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
