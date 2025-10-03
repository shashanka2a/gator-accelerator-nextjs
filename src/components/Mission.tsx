'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, TrendingUp, Users, Zap } from 'lucide-react';

export function Mission() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Capital Investment",
      description: "Strategic funding to accelerate your vision from concept to market reality."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Expertise",
      description: "Access to seasoned developers and technical mentors who've built successful products."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Strategy",
      description: "Data-driven approaches to scale your startup with proven methodologies."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Network",
      description: "Connect with fellow founders, mentors, and industry leaders in our ecosystem."
    }
  ];

  return (
    <motion.section 
      style={{ y, opacity }}
      className="py-24 bg-card/50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="font-clash text-4xl md:text-6xl mb-8 leading-tight"
          >
            <span className="text-gradient-orange">Strategically Embedded</span>
            <br />
            <span className="text-white">Tech Partner</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
          >
            We provide comprehensive support for ambitious student entrepreneurs
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-clash text-gradient-orange"
          >
            For Money or Equity
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="p-8 rounded-2xl bg-card border border-white/10 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl mb-4 text-white group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
      />
    </motion.section>
  );
}