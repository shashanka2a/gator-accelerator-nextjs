'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface HeroProps {
  onApplyClick: () => void;
}

export function Hero({ onApplyClick }: HeroProps) {
  return (
    <section className="min-h-screen bg-gradient-dark flex items-center justify-center relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-lg tracking-wide text-muted-foreground mb-4">GATOR ACCELERATOR</h3>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-clash text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight"
          >
            <span className="text-gradient-orange">Backing the Boldest</span>
            <br />
            <span className="text-white">Student Builders</span>
            <br />
            <span className="text-muted-foreground">with Capital, Code, and Conviction.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Starting a company is tough. And lonely. We&apos;ve been there. Gator Accelerator is designed to give you an edge from the very beginning.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button
              onClick={onApplyClick}
              className="bg-gradient-orange hover:shadow-2xl hover:shadow-primary/25 text-white px-12 py-6 text-xl rounded-full transition-all duration-300 hover:scale-105"
            >
              Start Your Application
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements for visual interest */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
      />
    </section>
  );
}