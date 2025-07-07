"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  Maximize,
} from "lucide-react";
import { ChurchInfo } from "@/types/homepage";

interface HeroSlide {
  id: string;
  image_url: string;
  video_url?: string;
  eyebrow: string;
  heading: string;
  description: string;
  cta_text: string;
  cta_link: string;
}

interface HeroSectionProps {
  churchInfo: ChurchInfo;
}

// Animation variants
const slideVariants: Variants = {
  enter: {
    opacity: 0,
    scale: 1.1,
  },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contentVariants: Variants = {
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

// Demo slides data
const heroSlides: HeroSlide[] = [
  {
    id: "welcome",
    image_url:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1920&q=85",
    eyebrow: "Welcome Home",
    heading: "Experience\nDivine Grace",
    description:
      "Where modern worship meets timeless faith. Join our vibrant community for an inspiring journey of spiritual growth and fellowship.",
    cta_text: "Join Us This Sunday",
    cta_link: "#join",
  },
  {
    id: "community",
    image_url:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80",
    eyebrow: "Our Community",
    heading: "Growing Together\nin Faith",
    description:
      "Be part of a loving community where everyone is welcome. Experience the joy of fellowship and spiritual growth.",
    cta_text: "Learn More",
    cta_link: "#community",
  },
  {
    id: "worship",
    image_url:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80",
    // video_url: "https://www.youtube.com/watch?v=woNw1X9zv7E",
    eyebrow: "Worship With Us",
    heading: "Lift Your Spirit\nIn Praise",
    description:
      "Experience powerful worship services that connect you with God and our community.",
    cta_text: "Watch Live",
    cta_link: "#live",
  },
];

export default function HeroSection({ churchInfo }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  const toggleFullScreen = useCallback(() => {
    if (!document.fullscreenElement && containerRef.current) {
      void containerRef.current.requestFullscreen();
    } else if (document.fullscreenElement) {
      void document.exitFullscreen();
    }
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(nextSlide, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          prevSlide();
          break;
        case "ArrowRight":
          nextSlide();
          break;
        case " ":
          e.preventDefault();
          togglePlayPause();
          break;
        case "m":
        case "M":
          toggleMute();
          break;
        case "f":
        case "F":
          toggleFullScreen();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, togglePlayPause, toggleMute, toggleFullScreen]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
      aria-label="Hero Slideshow"
    >
      {/* Service Times Banner */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/70 via-black/40 to-transparent"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center items-center gap-8 text-white">
            <div className="text-center">
              <p className="text-sm font-medium text-[#1DA1B8]">Sunday Service</p>
              <p className="text-xs">
                {churchInfo.service_times.sunday[0]}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm font-medium">Wednesday Prayer</p>
              <p className="text-xs">
                {churchInfo.service_times.wednesday[0]}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Slides */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Background Image/Video */}
          <div className="absolute inset-0">
            {heroSlides[currentSlide].video_url ? (
              <video
                src={heroSlides[currentSlide].video_url}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted={isMuted}
                playsInline
              />
            ) : (
              <Image
                src={heroSlides[currentSlide].image_url}
                alt=""
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="max-w-2xl"
              >
                <p className="text-[#1DA1B8] text-sm font-medium tracking-wide mb-4">
                  {heroSlides[currentSlide].eyebrow}
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-semibold tracking-tight leading-tight mb-6 whitespace-pre-line">
                  {heroSlides[currentSlide].heading}
                </h1>
                <p className="text-lg text-white/90 mb-8 max-w-xl">
                  {heroSlides[currentSlide].description}
                </p>
                <a
                  href={heroSlides[currentSlide].cta_link}
                  className="inline-flex items-center px-8 py-3 bg-[#669966] hover:bg-[#558855] text-white rounded-full transition-all duration-300"
                >
                  {heroSlides[currentSlide].cta_text}
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center space-x-4">
              <button
                onClick={togglePlayPause}
                className="p-2 rounded-full bg-[#1DA1B8]/20 hover:bg-[#1DA1B8]/30 backdrop-blur-md text-white transition-all duration-300"
                aria-label={
                  isPlaying ? "Pause slideshow" : "Play slideshow"
                }
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </button>
              {heroSlides[currentSlide].video_url && (
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-[#1DA1B8]/20 hover:bg-[#1DA1B8]/30 backdrop-blur-md text-white transition-all duration-300"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              )}
            </div>

            {/* Slide Navigation */}
            <div className="flex items-center space-x-6">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all duration-300"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "w-8 bg-[#1DA1B8]"
                        : "w-2 bg-[#1DA1B8]/40 hover:bg-[#1DA1B8]/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={currentSlide === index}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-[#1DA1B8]/20 hover:bg-[#1DA1B8]/30 backdrop-blur-md text-white transition-all duration-300"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <button
              onClick={toggleFullScreen}
              className="p-2 rounded-full bg-[#1DA1B8]/20 hover:bg-[#1DA1B8]/30 backdrop-blur-md text-white transition-all duration-300"
              aria-label="Toggle fullscreen"
            >
              <Maximize className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Brand Elements */}
      <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-gradient-to-t from-[#A05330]/10 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-1/4 h-1/4 bg-gradient-to-b from-[#669966]/10 to-transparent pointer-events-none" />
    </section>
  );
}
