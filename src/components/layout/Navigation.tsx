'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const departments = [
  { name: 'Youth Ministry', href: '/departments/youth' },
  { name: 'Women Fellowship', href: '/departments/women' },
  { name: 'Men Fellowship', href: '/departments/men' },
  { name: 'Sunday School', href: '/departments/sunday-school' },
  { name: 'Choir', href: '/departments/choir' },
];

const resources = [
  { name: 'Sermons', href: '/resources/sermons' },
  { name: 'Bible Study', href: '/resources/bible-study' },
  { name: 'Events', href: '/resources/events' },
  { name: 'Downloads', href: '/resources/downloads' },
];

const areas = [
  { name: 'Bomet', href: '/areas/bomet' },
  { name: 'Narok', href: '/areas/narok' },
  { name: 'Kericho', href: '/areas/kericho' },
  { name: 'Nakuru', href: '/areas/nakuru' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* Bible Verse Banner */}
      <div className="bg-gradient-to-r from-[#1DA1B8]/5 via-[#669966]/5 to-[#1DA1B8]/5 text-gray-700 py-2 text-center text-sm px-4 border-b border-[#1DA1B8]/10">
        <p className="font-serif italic">
          &ldquo;I John, who also am your brother, and companion in tribulation, ...&rdquo; - <span className="text-[#C62828]">Revelation 1:9</span>
        </p>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm ${
          isScrolled ? 'shadow-lg shadow-[#1DA1B8]/5' : ''
        } transition-shadow duration-300`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Church Name */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 transform transition-transform group-hover:scale-105">
                <Image
                  src="/logo.svg"
                  alt="AGUC Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-semibold bg-gradient-to-r from-[#1DA1B8] to-[#669966] bg-clip-text text-transparent">
                  Africa Gospel Unity Church
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-gray-600 hover:text-[#1DA1B8] transition-colors">
                Home
              </Link>
              
              {/* Departments Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('departments')}
                  className="flex items-center gap-1 text-gray-600 hover:text-[#1DA1B8] transition-colors"
                >
                  Departments
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full -left-4 w-48 bg-white/95 backdrop-blur-sm shadow-lg shadow-[#1DA1B8]/5 rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-[#1DA1B8]/10">
                  {departments.map((dept) => (
                    <Link
                      key={dept.name}
                      href={dept.href}
                      className="block px-4 py-2 text-gray-600 hover:bg-gradient-to-r hover:from-[#1DA1B8]/5 hover:to-[#669966]/5 hover:text-[#1DA1B8] transition-all duration-200"
                    >
                      {dept.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Areas Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('areas')}
                  className="flex items-center gap-1 text-gray-600 hover:text-[#1DA1B8] transition-colors"
                >
                  Areas
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full -left-4 w-48 bg-white/95 backdrop-blur-sm shadow-lg shadow-[#1DA1B8]/5 rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-[#1DA1B8]/10">
                  {areas.map((area) => (
                    <Link
                      key={area.name}
                      href={area.href}
                      className="block px-4 py-2 text-gray-600 hover:bg-gradient-to-r hover:from-[#1DA1B8]/5 hover:to-[#669966]/5 hover:text-[#1DA1B8] transition-all duration-200"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('resources')}
                  className="flex items-center gap-1 text-gray-600 hover:text-[#1DA1B8] transition-colors"
                >
                  Resources
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full -left-4 w-48 bg-white/95 backdrop-blur-sm shadow-lg shadow-[#1DA1B8]/5 rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-[#1DA1B8]/10">
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      href={resource.href}
                      className="block px-4 py-2 text-gray-600 hover:bg-gradient-to-r hover:from-[#1DA1B8]/5 hover:to-[#669966]/5 hover:text-[#1DA1B8] transition-all duration-200"
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/announcements" className="text-gray-600 hover:text-[#1DA1B8] transition-colors">
                Announcements
              </Link>
              
              <Link href="/about" className="text-gray-600 hover:text-[#1DA1B8] transition-colors">
                About Us
              </Link>
              
              <Link href="/contact" className="text-gray-600 hover:text-[#1DA1B8] transition-colors">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-[#1DA1B8] transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-[#1DA1B8]/10"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                <Link
                  href="/"
                  className="block py-2 text-gray-600 hover:text-[#1DA1B8] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile Departments */}
                <div>
                  <button
                    onClick={() => toggleDropdown('departments')}
                    className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-[#1DA1B8] transition-colors"
                  >
                    <span>Departments</span>
                    <ChevronDown className={`w-4 h-4 transform transition-transform ${
                      openDropdown === 'departments' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {openDropdown === 'departments' && (
                    <div className="pl-4 space-y-2 mt-2 border-l-2 border-[#1DA1B8]/10">
                      {departments.map((dept) => (
                        <Link
                          key={dept.name}
                          href={dept.href}
                          className="block py-2 text-gray-600 hover:text-[#1DA1B8] transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dept.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Areas */}
                <div>
                  <button
                    onClick={() => toggleDropdown('areas')}
                    className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-[#1DA1B8] transition-colors"
                  >
                    <span>Areas</span>
                    <ChevronDown className={`w-4 h-4 transform transition-transform ${
                      openDropdown === 'areas' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {openDropdown === 'areas' && (
                    <div className="pl-4 space-y-2 mt-2 border-l-2 border-[#1DA1B8]/10">
                      {areas.map((area) => (
                        <Link
                          key={area.name}
                          href={area.href}
                          className="block py-2 text-gray-600 hover:text-[#1DA1B8] transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {area.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Resources */}
                <div>
                  <button
                    onClick={() => toggleDropdown('resources')}
                    className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-[#1DA1B8] transition-colors"
                  >
                    <span>Resources</span>
                    <ChevronDown className={`w-4 h-4 transform transition-transform ${
                      openDropdown === 'resources' ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {openDropdown === 'resources' && (
                    <div className="pl-4 space-y-2 mt-2 border-l-2 border-[#1DA1B8]/10">
                      {resources.map((resource) => (
                        <Link
                          key={resource.name}
                          href={resource.href}
                          className="block py-2 text-gray-600 hover:text-[#1DA1B8] transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {resource.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/announcements"
                  className="block py-2 text-gray-600 hover:text-[#1DA1B8] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Announcements
                </Link>

                <Link
                  href="/about"
                  className="block py-2 text-gray-600 hover:text-[#1DA1B8] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>

                <Link
                  href="/contact"
                  className="block py-2 text-gray-600 hover:text-[#1DA1B8] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navigation;
