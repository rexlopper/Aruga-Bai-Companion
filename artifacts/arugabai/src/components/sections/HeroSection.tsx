import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="bg-[#073D31] min-h-screen flex flex-col justify-center pt-28 pb-24 px-6 sm:px-10 lg:px-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full z-10 relative">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-nunito text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-8"
          >
            Your health story, organized. Your companion, always ready.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            className="text-xl sm:text-2xl text-white/80 mb-14 leading-relaxed max-w-2xl"
          >
            ArugaBai gives Filipino families a smarter way to manage health — with an AI companion named Bai who already knows your history, and a record vault that's ready for every consultation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.22 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <a
              href="#signup"
              data-testid="hero-cta-primary"
              className="inline-flex justify-center items-center bg-[#1E8C75] hover:bg-[#3FAA8D] text-white px-10 py-5 rounded-xl text-lg font-bold transition-colors shadow-xl shadow-[#1E8C75]/20"
            >
              Join the Waitlist →
            </a>
            <a
              href="#how-it-works"
              data-testid="hero-cta-secondary"
              className="inline-flex justify-center items-center border-2 border-white/60 hover:border-white text-white hover:bg-white/5 px-10 py-5 rounded-xl text-lg font-semibold transition-colors"
            >
              See How It Works
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            "87% of patients repeat their full history to every new doctor",
            "65% store medical records as phone camera photos",
            "Bai — available anytime, between every visit",
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 + i * 0.1 }}
              className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl px-7 py-6"
            >
              <p className="text-[#6FD1C2] font-medium leading-snug text-base">{stat}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-[500px] h-[500px] bg-[#1E8C75] rounded-full blur-[140px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#3FAA8D] rounded-full blur-[120px] opacity-20 pointer-events-none" />
    </section>
  );
}
