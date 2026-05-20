import React from 'react';
import { MessageCircle, Linkedin, Palette } from 'lucide-react';

export function Contact({ onClose }: { onClose?: () => void }) {
  // Scroll detection to close Contact section and return to landing page
  React.useEffect(() => {
    if (!onClose) return;

    const handleScroll = (e: WheelEvent) => {
      // Since Contact section doesn't scroll, any upward scroll closes it
      if (e.deltaY < 0) {
        onClose();
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [onClose]);

  const contactCards = [
    {
      id: 'whatsapp',
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick chat for immediate queries',
      link: 'https://wa.me/918976817944',
      helpText: 'Available Mon-Fri, 9AM-6PM IST'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Professional networking & opportunities',
      link: 'https://in.linkedin.com/in/malcolm-rodrigues-4385b0104',
      helpText: 'Connect for collaborations'
    },
    {
      id: 'behance',
      icon: Palette,
      title: 'Behance',
      description: 'View my complete design portfolio',
      link: 'https://www.behance.net/malcolmrodrigu1?locale=en_US',
      helpText: 'Explore my designs'
    }
  ];

  return (
    <div className="overlay-dark h-screen bg-transparent px-4 md:px-6 py-4 md:py-8 overflow-y-auto md:overflow-hidden">
      <div className="max-w-5xl mx-auto w-full min-h-full md:h-full flex flex-col justify-center">
        {/* Header Section */}
        <div className="mb-6 md:mb-12 flex-shrink-0">
          <div className="inline-block border-b border-gray-300 pb-2 mb-3 md:mb-6">
            <h2 className="text-[clamp(1.75rem,6vw,4rem)] tracking-tighter text-white">
              Let's Connect
            </h2>
          </div>
          
          <p className="text-sm md:text-lg text-white leading-relaxed max-w-2xl">
            Have a project in mind or just want to chat about design? 
            Choose your preferred way to reach out.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-0">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.id}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/5 border border-gray-600 p-4 md:p-8 hover:bg-white/10 hover:border-white transition-all duration-300 flex flex-col items-start active:scale-95 min-h-[44px]"
              >
                {/* Icon */}
                <div className="mb-3 md:mb-6 p-2 md:p-4 bg-white/10 group-hover:bg-white group-hover:text-[#1a1a1a] text-white transition-all duration-300">
                  <Icon className="w-5 h-5 md:w-8 md:h-8" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base md:text-xl text-white mb-1 md:mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 mb-2 md:mb-4 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                
                {/* Help Text */}
                <div className="mt-auto pt-2 md:pt-4 border-t border-gray-700 w-full">
                  <p className="text-[10px] md:text-xs text-gray-400 tracking-wide">
                    {card.helpText}
                  </p>
                </div>
                
                {/* Hover Arrow */}
                <div className="absolute top-4 md:top-8 right-4 md:right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg 
                    className="w-4 h-4 md:w-5 md:h-5 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M7 17L17 7M17 7H7M17 7v10" 
                    />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>

        {/* Additional Contact Info */}
        <div className="mt-6 md:mt-12 pt-4 md:pt-8 border-t border-gray-600 pb-20 md:pb-0 flex-shrink-0">
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center text-sm md:text-base">
            <div className="text-center">
              <h3 className="text-[10px] md:text-xs tracking-[0.2em] text-gray-400 uppercase mb-1 md:mb-2">Email</h3>
              <a 
                href="mailto:Malcolm94RD@gmail.com" 
                className="text-white hover:text-gray-300 transition-colors text-xs md:text-base"
              >
                Malcolm94RD@gmail.com
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="text-[10px] md:text-xs tracking-[0.2em] text-gray-400 uppercase mb-1 md:mb-2">Phone</h3>
              <a 
                href="tel:+918976817944" 
                className="text-white hover:text-gray-300 transition-colors text-xs md:text-base"
              >
                +91 89768 17944
              </a>
            </div>
            
            <div className="text-center">
              <h3 className="text-[10px] md:text-xs tracking-[0.2em] text-gray-400 uppercase mb-1 md:mb-2">Location</h3>
              <p className="text-white text-xs md:text-base">Mumbai, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}