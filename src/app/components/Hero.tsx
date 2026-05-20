import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, Gamepad2 } from 'lucide-react';
import { Work } from './Work';
import { About } from './About';
import { Contact } from './Contact';
import { ThemeToggle } from './ThemeToggle';
import { UXPuzzleGame } from './UXPuzzleGame';
import { BurgerMenu } from './BurgerMenu';
import { ThreeBackground } from './ThreeBackground';
import { StarfieldBackground } from './StarfieldBackground';

export function Hero() {
  const [time, setTime] = React.useState(new Date());
  const [showWork, setShowWork] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState(false);
  const [showContact, setShowContact] = React.useState(false);
  const [showPuzzle, setShowPuzzle] = React.useState(false);
  const [ipAddress, setIpAddress] = React.useState<string>('Loading...');

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch user's IP address
  React.useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error('Failed to fetch IP address:', error);
        setIpAddress('IP Unavailable');
      }
    };

    fetchIpAddress();
  }, []);

  // Prevent scrolling when any modal/overlay is open
  React.useEffect(() => {
    if (showPuzzle || showWork || showAbout || showContact) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [showPuzzle, showWork, showAbout, showContact]);

  // Scroll detection to open Work section
  React.useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      // Only trigger if on landing page (no overlays open)
      if (!showWork && !showAbout && !showContact && !showPuzzle) {
        // Detect downward scroll
        if (e.deltaY > 0) {
          setShowWork(true);
        }
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [showWork, showAbout, showContact, showPuzzle]);

  const formattedTime = time.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit',
    hour12: false 
  });

  const handleExploreClick = () => {
    setShowWork(true);
  };

  const handleClose = () => {
    setShowWork(false);
    setShowAbout(false);
    setShowContact(false);
    setShowPuzzle(false);
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAbout(true);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowContact(true);
  };

  const handlePuzzleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowPuzzle(true);
  };

  // Keyboard navigation - ESC to close modals
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && (showWork || showAbout || showContact || showPuzzle)) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showWork, showAbout, showContact, showPuzzle]);

  return (
    <div className="relative w-full h-screen bg-[#d4d0c8] dark:bg-[#1a1816] overflow-hidden transition-colors duration-300">
      {/* Starfield Background - Behind everything */}
      {!showWork && !showAbout && !showContact && !showPuzzle && <StarfieldBackground />}
      
      {/* Three.js Background - On top of starfield */}
      {!showWork && !showAbout && !showContact && !showPuzzle && <ThreeBackground />}
      
      {/* Malcolm Rodrigues - Top Left - Clickable for Puzzle */}
      <button 
        onClick={handlePuzzleClick}
        className="absolute top-4 left-4 md:top-6 md:left-6 z-30 text-[#2a2520] dark:text-[#e8e6e1] transition-all duration-300 hover:opacity-70 cursor-pointer group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#87682A] dark:focus-visible:ring-[#c9a961] focus-visible:ring-offset-2"
        aria-label="Open UX memory game"
      >
        <div className="flex items-center gap-2 md:gap-3">
          <div>
            <div className="text-sm md:text-base">Malcolm Rodrigues</div>
            <div className="text-[11px] md:text-xs tracking-wider leading-tight mt-0.5 text-[#4d4339] dark:text-[#b8b3ab]">
              UX DESIGNER — MUMBAI
            </div>
          </div>
          <Gamepad2 className="w-3 h-3 md:w-4 md:h-4 text-[#87682A] dark:text-[#c9a961] opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
        </div>
      </button>

      {/* Time and Location - Top Center - Hidden on mobile */}
      <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 z-30 text-center text-[#4d4339] dark:text-[#b8b3ab] transition-colors duration-300">
        <div className="text-[11px] tracking-wider leading-tight">
          {formattedTime}
        </div>
        <div className="text-[11px] tracking-wider leading-tight mt-0.5">
          19.0760° N, 72.8777° E
        </div>
      </div>

      {/* Desktop Navigation - Top Right - Hidden on mobile */}
      <nav className="hidden md:flex absolute top-6 right-6 z-30 items-center gap-6">
        <button
          onClick={handleExploreClick}
          className="text-sm text-[#87682A] dark:text-[#c9a961] hover:opacity-70 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#87682A] dark:focus-visible:ring-[#c9a961] focus-visible:ring-offset-2 rounded-sm px-2 py-1"
        >
          Work
        </button>
        <a
          href="#about"
          onClick={handleAboutClick}
          className="text-sm text-[#87682A] dark:text-[#c9a961] hover:opacity-70 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#87682A] dark:focus-visible:ring-[#c9a961] focus-visible:ring-offset-2 rounded-sm px-2 py-1"
        >
          About
        </a>
        <a
          href="#contact"
          onClick={handleContactClick}
          className="text-sm text-[#87682A] dark:text-[#c9a961] hover:opacity-70 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#87682A] dark:focus-visible:ring-[#c9a961] focus-visible:ring-offset-2 rounded-sm px-2 py-1"
        >
          Contact
        </a>
        <ThemeToggle />
      </nav>

      {/* Mobile Burger Menu - Visible on mobile only */}
      <div className="md:hidden absolute top-4 right-4 z-30">
        <BurgerMenu 
          onAboutClick={() => setShowAbout(true)} 
          onContactClick={() => setShowContact(true)} 
        />
      </div>

      {/* Bottom Left Text - Hidden on mobile */}
      <div 
        className="hidden md:flex absolute bottom-6 left-6 text-[11px] tracking-widest z-20 text-[#4d4339] dark:text-[#b8b3ab] transition-all duration-300 items-center gap-2"
        aria-live="polite"
      >
        <span>IP ADDRESS: {ipAddress}</span>
      </div>

      {/* Bottom Right Text - Simplified on mobile */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-[9px] md:text-[11px] tracking-widest z-20 text-[#4d4339] dark:text-[#b8b3ab] transition-colors duration-300">
        <span className="hidden md:inline">© 2025 MALCOLM RODRIGUES. CRAFTED WITH ❤</span>
        <span className="md:hidden">© 2025 MR</span>
      </div>

      {/* Main Content Area */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Main Text */}
        <div className="relative z-10 text-center px-8 max-w-6xl">
          <h1 className="leading-[0.85] tracking-tighter mb-8 text-[#2a2520] dark:text-[#e8e6e1] transition-colors duration-300">
            <span className="block text-[clamp(3rem,10vw,8rem)]">Crafting Intuitive</span>
            <span className="block text-[clamp(3.5rem,14vw,12rem)]">Experiences</span>
          </h1>
          
          {/* View Reel Button */}
          <button 
            onClick={handleExploreClick}
            className="group relative text-sm px-8 py-3 bg-transparent hover:bg-[#2a2520] dark:hover:bg-[#e8e6e1] transition-all duration-500 tracking-[0.2em] uppercase overflow-hidden flex items-center gap-3 mx-auto rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#87682A] dark:focus-visible:ring-[#c9a961] focus-visible:ring-offset-2"
            aria-label="View my work portfolio"
          >
            <span className="relative z-10 text-[#2a2520] dark:text-[#e8e6e1] group-hover:text-[#d4d0c8] dark:group-hover:text-[#1a1816] transition-colors duration-500">
              Scroll to My Work
            </span>
            <ChevronDown className="w-4 h-4 text-[#2a2520] dark:text-[#e8e6e1] group-hover:text-[#d4d0c8] dark:group-hover:text-[#1a1816] transition-all duration-500 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Mobile Bottom Navigation - Thumb Zone Optimized */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        <button
          onClick={handleExploreClick}
          className="flex items-center gap-2 px-6 py-3 bg-[#87682A] dark:bg-[#c9a961] text-[#d4d0c8] dark:text-[#2a2520] rounded-full shadow-lg hover:opacity-90 transition-all duration-300 active:scale-95"
        >
          <span className="text-sm tracking-wide">Scroll to My Work</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>

      {/* Overlay with Work Section */}
      <AnimatePresence>
        {showWork && (
          <>
            {/* Warm Dark Brown Overlay Background */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 bg-[#3d2f28] dark:bg-[#0f0d0c] z-50 origin-bottom transition-colors duration-300"
            />
            
            {/* Work Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="fixed inset-0 z-50"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                aria-label="Close work section"
                className="absolute top-8 right-8 text-[#e8e6e1] text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity z-10 flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8e6e1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#3d2f28]"
              >
                <span>Close</span>
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
              
              {/* Mobile Close Button - Thumb Zone Optimized */}
              <button
                onClick={handleClose}
                aria-label="Close work section"
                className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-6 py-3 bg-[#e8e6e1] text-[#2a2520] rounded-full shadow-lg hover:opacity-90 transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#87682A] focus-visible:ring-offset-2"
              >
                <X className="w-4 h-4" />
                <span className="text-sm tracking-wide">Close</span>
              </button>
              
              <Work onClose={handleClose} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Overlay with About Section */}
      <AnimatePresence>
        {showAbout && (
          <>
            {/* Warm Medium Brown Overlay Background */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 bg-[#5a4f47] dark:bg-[#2a2520] z-50 origin-right transition-colors duration-300"
            />
            
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="fixed inset-0 z-50"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-8 right-8 text-[#e8e6e1] text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity z-10 flex items-center gap-2 group"
              >
                <span>Close</span>
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
              
              {/* Mobile Close Button - Thumb Zone Optimized */}
              <button
                onClick={handleClose}
                className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-6 py-3 bg-[#e8e6e1] text-[#2a2520] rounded-full shadow-lg hover:opacity-90 transition-all duration-300 active:scale-95"
              >
                <X className="w-4 h-4" />
                <span className="text-sm tracking-wide">Close</span>
              </button>
              
              <About onClose={handleClose} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Overlay with Contact Section */}
      <AnimatePresence>
        {showContact && (
          <>
            {/* Deep Warm Brown Overlay Background */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 bg-[#2a2520] dark:bg-[#1a1816] z-50 origin-top transition-colors duration-300"
            />
            
            {/* Contact Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="fixed inset-0 z-50"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-8 right-8 text-[#e8e6e1] text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity z-10 flex items-center gap-2 group"
              >
                <span>Close</span>
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
              
              <Contact onClose={handleClose} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Overlay with Puzzle Section */}
      <AnimatePresence>
        {showPuzzle && (
          <>
            {/* Warm Dark Brown Overlay Background */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 bg-[#3d2f28] dark:bg-[#0f0d0c] z-50 origin-left transition-colors duration-300"
            />
            
            {/* Puzzle Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="fixed inset-0 z-50"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-8 right-8 text-[#e8e6e1] text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity z-10 flex items-center gap-2 group"
              >
                <span>Close</span>
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
              
              <UXPuzzleGame onClose={handleClose} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}