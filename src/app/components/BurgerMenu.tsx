import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface BurgerMenuProps {
  onAboutClick: () => void;
  onContactClick: () => void;
}

export function BurgerMenu({ onAboutClick, onContactClick }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleAboutClick = () => {
    onAboutClick();
    setIsOpen(false);
  };

  const handleContactClick = () => {
    onContactClick();
    setIsOpen(false);
  };

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#2a2520] dark:text-[#e8e6e1] p-2 hover:opacity-70 transition-opacity"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-[#d4d0c8] dark:bg-[#1a1816] z-50 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-[#2a2520] dark:text-[#e8e6e1] p-2 hover:opacity-70 transition-opacity"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Menu Items */}
              <nav className="flex flex-col gap-8 p-8 mt-16">
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAboutClick();
                  }}
                  className="text-2xl text-[#87682A] dark:text-[#c9a961] hover:opacity-70 transition-opacity"
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleContactClick();
                  }}
                  className="text-2xl text-[#87682A] dark:text-[#c9a961] hover:opacity-70 transition-opacity"
                >
                  Contact
                </a>

                {/* Theme Toggle */}
                <div className="pt-4 border-t border-[#5a4f47]/30 dark:border-[#b8b3ab]/30">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[#5a4f47] dark:text-[#b8b3ab]">Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
