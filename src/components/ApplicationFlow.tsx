'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Textarea } from './ui/textarea';
// import { Input } from './ui/input';
import { ArrowLeft, ArrowRight, Check, Lightbulb, Target, Search, Heart, Zap, Trophy } from 'lucide-react';

interface ApplicationFlowProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApplicationFlow({ isOpen, onClose }: ApplicationFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const steps = [
    {
      id: 'spark',
      title: 'What sparked your idea?',
      subtitle: 'Tell us about that lightbulb moment',
      icon: <Lightbulb className="w-8 h-8" />,
      type: 'textarea' as const,
      placeholder: "Describe the moment or experience that led to your idea. What problem did you notice that others might have missed?"
    },
    {
      id: 'purpose',
      title: 'What\'s your purpose?',
      subtitle: 'Why does this matter to you?',
      icon: <Target className="w-8 h-8" />,
      type: 'textarea' as const,
      placeholder: "What drives you to solve this problem? What impact do you want to make in the world?"
    },
    {
      id: 'research',
      title: 'What research have you done?',
      subtitle: 'Show us you\'ve done your homework',
      icon: <Search className="w-8 h-8" />,
      type: 'textarea' as const,
      placeholder: "What market research, user interviews, or validation have you completed? What did you learn?"
    },
    {
      id: 'desire',
      title: 'How badly do you want this?',
      subtitle: 'What are you willing to sacrifice?',
      icon: <Heart className="w-8 h-8" />,
      type: 'textarea' as const,
      placeholder: "Entrepreneurship requires sacrifice. What are you willing to give up to make this happen?"
    },
    {
      id: 'hunger',
      title: 'What drives your hunger?',
      subtitle: 'Where does your motivation come from?',
      icon: <Zap className="w-8 h-8" />,
      type: 'textarea' as const,
      placeholder: "What fuels your ambition? What experience or background gives you the determination to succeed?"
    },
    {
      id: 'proof',
      title: 'Show us your proof of work',
      subtitle: 'What have you built or achieved?',
      icon: <Trophy className="w-8 h-8" />,
      type: 'textarea' as const,
      placeholder: "Share your previous projects, achievements, or anything that demonstrates your ability to execute."
    }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;
  const currentStepData = steps[currentStep];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit application
      console.log('Application submitted:', answers);
      onClose();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateAnswer = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentStepData.id]: value
    }));
  };

  const isStepComplete = answers[currentStepData.id]?.trim().length > 0;
  const isLastStep = currentStep === steps.length - 1;

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-hidden"
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <Progress value={progress} className="h-2 rounded-none bg-white/10" />
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 text-muted-foreground hover:text-white hover:bg-white/10 transition-all duration-300 p-3 rounded-full"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="h-full flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-2xl bg-card/90 backdrop-blur-md rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Step indicator */}
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="text-primary">
                  {currentStepData.icon}
                </div>
                <span className="text-sm tracking-wide">
                  {currentStep + 1} OF {steps.length}
                </span>
              </div>

              {/* Question */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-clash text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
                >
                  {currentStepData.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-muted-foreground"
                >
                  {currentStepData.subtitle}
                </motion.p>
              </div>

              {/* Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <Textarea
                  value={answers[currentStepData.id] || ''}
                  onChange={(e) => updateAnswer(e.target.value)}
                  placeholder={currentStepData.placeholder}
                  className="min-h-[200px] text-lg bg-white/5 border border-white/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none text-white placeholder:text-white/60 rounded-xl px-4 py-3"
                  autoFocus
                />
              </motion.div>

              {/* Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 sm:gap-0"
              >
                <Button
                  onClick={handleBack}
                  variant="ghost"
                  className="text-muted-foreground hover:text-white hover:bg-white/10 px-6 py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentStep === 0}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!isStepComplete}
                  className="bg-gradient-orange hover:shadow-lg hover:shadow-primary/25 px-8 py-3 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isLastStep ? (
                    <>
                      Submit Application
                      <Check className="w-5 h-5 ml-2" />
                    </>
                  ) : (
                    <>
                      Continue
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
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
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
        />
      </div>
    </motion.div>
  );
}