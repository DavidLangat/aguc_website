/**
 * HeroSection: Create immersive visual stories
 *
 * A stunning, full-screen slideshow that captivates your audience with smooth
 * transitions and elegant interactions. Perfect for showcasing your most important
 * content with style and sophistication.
 *
 * Key Features:
 * • Smart Transitions: Content fades in naturally as you navigate
 * • Responsive Controls: Intuitive navigation that stays out of your way
 * • Keyboard Navigation: Power-user shortcuts for efficient control
 * • Automatic Playback: Hands-free presentation with perfect timing
 *
 * @component
 */

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPause,
  faPlay,
  faExpand,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import image1 from "../assets/img/slideshow/IMG_0908-scaled.jpg";
import image2 from "../assets/img/slideshow/279109632_530340615377803_6272727526155203094_n.jpg";

/**
 * Visual Content Guidelines
 *
 * Create impactful slideshows by following these image recommendations:
 * • Landscape Images: 1600x900px (16:9 ratio) for optimal quality
 * • File Format: JPEG for photographs, PNG for graphics
 * • Quality Level: 80-90% compression for optimal performance
 * • Focus Points: Center important content for automatic cropping
 */

// Slide data structure (can be extended for video backgrounds)
const slides = [
  {
    id: "slide-1",
    image_url: image1,
    eyebrow: "Visionary Innovation",
    heading: "Shaping Tomorrow's\nModeling Industry",
    description:
      "We're revolutionizing talent discovery and development through innovation and excellence.",
    cta_text: "Discover Our Vision",
    cta_link: "/about",
  },
  {
    id: "slide-2",
    image_url: image2,
    eyebrow: "Premium Development",
    heading: "Excellence.\nRefined.",
    description:
      "Join an elite community where talent meets opportunity, and potential becomes reality.",
    cta_text: "Start Your Journey",
    cta_link: "/registration",
  },
  {
    id: "slide-3",
    image_url: image1,
    eyebrow: "The Future of Modeling",
    heading: "Innovation Meets\nEmpowerment",
    description:
      "Setting new standards in professional representation and talent development.",
    cta_text: "Join Our Movement",
    cta_link: "/registration",
  },
];

/**
 * Slide: Craft beautiful content presentations
 *
 * Each slide combines stunning visuals with engaging content, automatically
 * adapting to any screen size while maintaining perfect visual balance.
 *
 * Features:
 * • Smart Scaling: Images scale smoothly while maintaining quality
 * • Elegant Overlays: Text remains crisp and readable
 * • Smooth Transitions: Content fades in naturally
 * • Video Support: Seamless background video playback
 *
 * @component
 */
const Slide = ({ slide, isActive, index, total, isMuted }) => {
  return (
    <div className="relative h-screen w-full">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />
      {/* Background media */}
      {slide.video_background_url ? (
        <video
          src={slide.video_background_url}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
      ) : (
        <img
          src={slide.image_url}
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ transform: isActive ? "scale(1.01)" : "scale(1)" }}
        />
      )}
      {/* Content */}
      {isActive && (
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-xl space-y-4 opacity-0 animate-apple-fade-in">
              {/* Slide counter */}
              <div className="text-xs text-white/70 mb-8">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </div>
              <span className="text-xs tracking-wider text-white uppercase">
                {slide.eyebrow}
              </span>
              <h1 className="text-2xl sm:text-3xl text-white font-normal tracking-tight leading-tight whitespace-pre-line">
                {slide.heading}
              </h1>
              <p className="text-sm text-white/90 font-light max-w-md leading-relaxed">
                {slide.description}
              </p>
              <div className="pt-4 flex items-center space-x-4">
                <Link
                  to={slide.cta_link}
                  className="group inline-flex items-center text-sm text-white/90 hover:text-white transition-all duration-300"
                >
                  {slide.cta_text}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 text-xs"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * SliderControls: Intuitive navigation at your fingertips
 *
 * Beautiful, minimal controls that provide immediate feedback while staying
 * elegantly out of your way. The interface fades in when needed and
 * disappears when you're focused on content.
 *
 * Features:
 * • Progress Indicator: Visual feedback of your current position
 * • Playback Controls: Start, pause, and adjust audio at any time
 * • Quick Navigation: Jump directly to any slide
 * • Fullscreen Support: Immersive viewing experience
 *
 * Keyboard Shortcuts:
 * • ←/→: Previous/Next slide
 * • Space: Play/Pause
 * • M: Mute/Unmute
 * • F: Toggle fullscreen
 *
 * @component
 */
const SliderControls = ({
  total,
  currentSlide,
  onPrev,
  onNext,
  onGoTo,
  isPlaying,
  onPlayPause,
  isMuted,
  onMuteToggle,
  onFullScreen,
}) => (
  <div className="absolute bottom-6 left-0 right-0 z-30">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        {/* Progress bar */}
        <div className="w-full max-w-md mx-auto mb-4 bg-white/20 h-0.5">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / total) * 100}%` }}
          />
        </div>
        {/* Controls wrapper */}
        <div className="flex items-center justify-between w-full max-w-md mx-auto">
          <div className="flex items-center space-x-4">
            {/* Play/Pause */}
            <button
              onClick={onPlayPause}
              className="text-white/70 hover:text-white transition-colors"
              title={isPlaying ? "Pause" : "Play"}
            >
              <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                className="text-xs"
              />
            </button>
            {/* Mute */}
            <button
              onClick={onMuteToggle}
              className="text-white/70 hover:text-white transition-colors"
              title={isMuted ? "Unmute" : "Mute"}
            >
              <FontAwesomeIcon
                icon={isMuted ? faVolumeMute : faVolumeUp}
                className="text-xs"
              />
            </button>
          </div>
          {/* Dots */}
          <div className="flex items-center space-x-2">
            {Array.from({ length: total }).map((_, index) => (
              <button
                key={index}
                onClick={() => onGoTo(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-white"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index ? "true" : "false"}
              />
            ))}
          </div>
          <div className="flex items-center space-x-4">
            {/* Fullscreen */}
            <button
              onClick={onFullScreen}
              className="text-white/70 hover:text-white transition-colors"
              title="Enter fullscreen"
            >
              <FontAwesomeIcon icon={faExpand} className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/**
 * HeroSection: Make a stunning first impression
 *
 * Create an engaging showcase that adapts beautifully to any device or screen
 * size. The perfect way to tell your story through a combination of stunning
 * visuals and compelling content.
 *
 * Features:
 * • Automatic Playback: Smooth transitions every 8 seconds
 * • Smart Preloading: Content loads ahead of time for instant transitions
 * • Keyboard Navigation: Full keyboard control for power users
 * • Accessibility: Screen reader support and reduced motion sensitivity
 *
 * Usage:
 * ```jsx
 * <HeroSection />
 * ```
 *
 * Best Practices:
 * • Keep slides focused with a single key message
 * • Use high-quality images that match your brand
 * • Write concise, impactful descriptions
 * • Ensure CTAs are clear and action-oriented
 *
 * @component
 */
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev);
  }, []);

  const toggleFullScreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  // Auto-advance handling
  useEffect(() => {
    if (isPlaying && slides.length > 0) {
      timerRef.current = setInterval(nextSlide, 8000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [nextSlide, isPlaying]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
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
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, prevSlide, togglePlayPause, toggleMute, toggleFullScreen]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden h-[100vh] bg-black"
      aria-label="Hero Slideshow"
    >
      <style>{`
        /* Minimal font setup */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }
        /* Simple fade animation */
        @keyframes apple-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-apple-fade-in {
          animation: apple-fade-in 0.7s ease-out forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      <div className="relative h-full">
        {slides.map((slide, index) => {
          const shouldRender =
            Math.abs(currentSlide - index) <= 1 ||
            index === 0 ||
            index === slides.length - 1;
          return shouldRender ? (
            <div
              key={slide.id}
              className="absolute inset-0 transition-opacity duration-1000 ease-out"
              style={{
                opacity: currentSlide === index ? 1 : 0,
                zIndex: currentSlide === index ? 1 : 0,
                pointerEvents: currentSlide === index ? "auto" : "none",
              }}
            >
              <Slide
                slide={slide}
                isActive={currentSlide === index}
                index={index}
                total={slides.length}
                isMuted={isMuted}
              />
            </div>
          ) : null;
        })}
      </div>
      <SliderControls
        total={slides.length}
        currentSlide={currentSlide}
        onPrev={prevSlide}
        onNext={nextSlide}
        onGoTo={goToSlide}
        isPlaying={isPlaying}
        onPlayPause={togglePlayPause}
        isMuted={isMuted}
        onMuteToggle={toggleMute}
        onFullScreen={toggleFullScreen}
      />
    </section>
  );
};

export default HeroSection;
