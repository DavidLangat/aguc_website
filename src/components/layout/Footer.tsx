'use client';


import { Phone, Mail, MapPin, Home, Info, MessageSquare, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const quickLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Contact', href: '/contact', icon: Phone },
  { name: 'Sermons', href: '/sermons', icon: MessageSquare },
  { name: 'Membership', href: '/membership', icon: Users },
];

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    content: (
      <>
        <a href="tel:+254724365216" className="hover:text-amber-500 transition-colors">+254 724 365 216</a>
        {' | '}
        <a href="tel:+254727005987" className="hover:text-amber-500 transition-colors">+254 727 005 987</a>
      </>
    ),
  },
  {
    icon: Mail,
    label: 'Email',
    content: (
      <a href="mailto:agucbmt@yahoo.com" className="hover:text-amber-500 transition-colors">
        agucbmt@yahoo.com
      </a>
    ),
  },
  {
    icon: MapPin,
    label: 'Address',
    content: 'P.O.BOX 33 - 20400, BOMET, KENYA',
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#1DA1B8]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#669966]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#A05330]/5 rounded-full blur-3xl" />
      </div>

      {/* Main Footer */}
      <div className="relative container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Church Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 transform transition-transform group-hover:scale-105">
                <Image
                  src="/logo.svg"
                  alt="AGUC Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-xl font-semibold bg-gradient-to-r from-[#1DA1B8] to-[#669966] bg-clip-text text-transparent">
                A.G.U.C.
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Africa Gospel Unity Church is a fellowship of Bible-believing Christians committed to 
              the pure proclamation of the Gospel and unity in Spirit.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#1DA1B8] transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-[#1DA1B8]/10 transition-colors">
                      <link.icon className="w-4 h-4" />
                    </div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5">
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-[#1DA1B8]/20 to-[#669966]/20 flex items-center justify-center text-[#1DA1B8]">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">{item.label}</span>
                    <div className="text-gray-300">{item.content}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} Africa Gospel Unity Church (A.G.U.C.). All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-sm text-gray-500 hover:text-[#1DA1B8] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-500 hover:text-[#1DA1B8] transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
