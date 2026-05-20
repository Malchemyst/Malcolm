import React from 'react';

export function About({ onClose }: { onClose?: () => void }) {
  // Scroll detection to close About section and return to landing page
  React.useEffect(() => {
    if (!onClose) return;

    const handleScroll = (e: WheelEvent) => {
      // Since About section doesn't scroll, any upward scroll closes it
      if (e.deltaY < 0) {
        onClose();
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [onClose]);

  return (
    <div className="overlay-dark h-screen bg-transparent px-4 md:px-6 py-6 md:py-8 flex items-center overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-8 md:mb-10">
          <div className="inline-block border-b border-gray-500 pb-2 mb-4 md:mb-6">
            <h2 className="text-[clamp(1.75rem,6vw,4rem)] tracking-tighter text-white">
              About Me
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {/* Left Column - Bio */}
            <div className="space-y-3 md:space-y-4">
              <p className="text-base md:text-lg text-white leading-relaxed">
                I'm Malcolm Rodrigues, a UX Designer based in Mumbai, passionate about crafting intuitive 
                digital experiences.
              </p>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                With a keen eye for detail and a user-first approach, I specialize in transforming complex 
                problems into elegant, accessible solutions. My work spans web and mobile applications, 
                focusing on creating meaningful interactions that resonate with users.
              </p>
            </div>

            {/* Right Column - Quick Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-2">Location</h3>
                <p className="text-white">Mumbai, India</p>
                <p className="text-gray-300 text-xs">19.0760° N, 72.8777° E</p>
              </div>
              
              <div>
                <h3 className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-2">Experience</h3>
                <p className="text-white">5+ Years</p>
                <p className="text-gray-300 text-xs">UX/UI Design & Research</p>
              </div>
              
              <div>
                <h3 className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-2">Currently</h3>
                <p className="text-white">Open to Opportunities</p>
                <p className="text-gray-300 text-xs">Freelance & Full-time Roles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="border-t border-gray-600 pt-6 md:pt-8">
          <h3 className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-3 md:mb-4">Expertise & Tools</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div>
              <h4 className="text-white mb-2.5 text-sm tracking-tight">Design Process</h4>
              <div className="flex flex-wrap gap-2">
                {['User Research', 'Information Architecture', 'Prototyping', 'Visual Design', 'Design Systems'].map((skill) => (
                  <span key={skill} className="text-xs text-gray-200 bg-gray-800/60 px-3 py-1.5 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white mb-2.5 text-sm tracking-tight">Design Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['Figma', 'Adobe XD', 'Sketch', 'Principle', 'ProtoPie'].map((tool) => (
                  <span key={tool} className="text-xs text-gray-200 bg-gray-800/60 px-3 py-1.5 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}