'use client';

import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { FinalCTA } from './components/FinalCTA';
import { ApplicationFlow } from './components/ApplicationFlow';

export default function App() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  // Enhanced smooth scroll behavior
  useEffect(() => {
    // Add smooth scrolling to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Prevent scroll when application is open
  useEffect(() => {
    if (isApplicationOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isApplicationOpen]);

  const handleApplyClick = () => {
    setIsApplicationOpen(true);
  };

  const handleCloseApplication = () => {
    setIsApplicationOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Simple and clean */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-clash text-xl text-white">
            Gator Accelerator
          </div>
          <button
            onClick={handleApplyClick}
            className="text-primary hover:text-white transition-colors duration-300"
          >
            Apply Now
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main>
        <Hero onApplyClick={handleApplyClick} />
        <Mission />
        <FinalCTA onApplyClick={handleApplyClick} />
      </main>

      {/* Application Flow Modal */}
      <ApplicationFlow 
        isOpen={isApplicationOpen} 
        onClose={handleCloseApplication}
      />

      {/* Footer */}
      <footer className="py-12 bg-card/30 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-8 mb-6">
            <span className="text-muted-foreground">University of Florida</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Student Innovation</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Entrepreneurship</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Gator Accelerator. Building the future, one bold idea at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}