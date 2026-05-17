import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section 
      data-testid="hero-section" 
      className="bg-[#073D31] min-h-[90vh] flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full z-10 relative">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-nunito text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Your health story, organized. Your companion, always ready.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed font-sans max-w-2xl"
          >
            ArugaBai gives Filipino families a smarter way to manage health — with an AI companion named Bai who already knows your history, and a record vault that's ready for every consultation.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a 
              href="#signup" 
              data-testid="hero-cta-primary"
              className="inline-flex justify-center items-center bg-[#1E8C75] hover:bg-[#3FAA8D] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg shadow-[#1E8C75]/20"
            >
              Join the Waitlist →
            </a>
            <a 
              href="#how-it-works" 
              data-testid="hero-cta-secondary"
              className="inline-flex justify-center items-center border-2 border-white/80 hover:border-white text-white hover:bg-white/5 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              See How It Works
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {[
            "87% of patients repeat their full history to every new doctor",
            "65% store medical records as phone camera photos",
            "Bai — available anytime, between every visit"
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 + (i * 0.1) }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-5"
            >
              <p className="text-[#6FD1C2] font-medium leading-snug">
                {stat}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-[#1E8C75] rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#3FAA8D] rounded-full blur-[100px] opacity-30 pointer-events-none" />
    </section>
  );
}
