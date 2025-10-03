'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/button';

interface FinalCTAProps {
  onApplyClick: () => void;
}

export function FinalCTA({ onApplyClick }: FinalCTAProps) {
  return (
    <section className="py-32 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main CTA */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="font-clash text-5xl md:text-7xl mb-8 leading-tight"
          >
            <span className="text-white text-3xl md:text-4xl lg:text-5xl">Ready to Build the</span>
            <br />
            <span className="text-gradient-orange">Next Big Thing?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Join the most ambitious entrepreneurs. 
            Apply now and let&apos;s turn your vision into reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                onClick={onApplyClick}
                className="bg-gradient-orange hover:shadow-2xl hover:shadow-primary/25 text-white px-16 py-8 text-2xl rounded-full transition-all duration-300 font-clash"
              >
                Apply Now
              </Button>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground"
            >
              Rolling admissions • No application fee • 5-minute application
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1],
          rotate: [0, -90, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
      />
    </section>
  );
}