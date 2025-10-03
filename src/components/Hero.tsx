'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/button';

interface HeroProps {
  onApplyClick: () => void;
}

export function Hero({ onApplyClick }: HeroProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="min-h-screen bg-gradient-dark flex items-center justify-center relative overflow-hidden">
      {/* Enhanced background with noise texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.03),transparent_50%)]"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-[url('data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 py-20 relative z-10"
      >
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
            className="mb-12"
          >
            <h3 className="text-lg tracking-[0.2em] text-muted-foreground font-medium uppercase">GATOR ACCELERATOR</h3>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-clash text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-12 leading-[1.1] tracking-tight"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gradient-orange block"
            >
              Backing the Boldest
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-white block"
            >
              Student Builders
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="text-muted-foreground block"
            >
              with Capital, Code, and Conviction.
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Starting a company is tough. And lonely. We&apos;ve been there. Gator Accelerator is designed to give you an edge from the very beginning.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                onClick={onApplyClick}
                className="bg-gradient-orange hover:shadow-2xl hover:shadow-primary/25 text-white px-12 py-6 text-xl rounded-full transition-all duration-300 font-semibold"
              >
                Start Your Application
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced floating elements for visual interest */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 w-24 h-24 bg-primary/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          y: [0, 40, 0],
          rotate: [0, -15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          x: [0, 20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary/8 rounded-full blur-lg"
      />
    </section>
  );
}