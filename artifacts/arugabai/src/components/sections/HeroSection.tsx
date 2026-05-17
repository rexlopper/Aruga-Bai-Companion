import { motion } from "framer-motion";
import { InteractiveBaiDemo } from "@/components/InteractiveBaiDemo";

function EcgLine() {
  return (
    <svg
      viewBox="0 0 400 60"
      fill="none"
      className="w-full opacity-20"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 30 L60 30 L75 30 L85 10 L95 50 L105 15 L115 45 L125 30 L200 30 L215 30 L225 8 L235 52 L245 12 L255 48 L265 30 L340 30 L355 30 L365 18 L375 42 L385 30 L400 30"
        stroke="#6FD1C2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
      />
    </svg>
  );
}

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: 0.5 + i * 0.12 },
  }),
};

export function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="bg-[#073D31] min-h-screen flex items-center pt-20 pb-20 px-6 sm:px-10 lg:px-16 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — headline, CTAs, stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-[#3FAA8D] block"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[#6FD1C2] text-sm font-semibold tracking-wide">Your intelligent health companion</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
              className="font-nunito text-5xl sm:text-6xl font-extrabold text-white leading-[1.06] tracking-tight mb-8"
            >
              Your health story, organized. Your companion, always ready.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
              className="text-lg text-white/75 mb-12 leading-relaxed"
            >
              ArugaBai gives Filipino families a smarter way to manage health — with an AI companion named Bai who already knows your history, and a record vault that's ready for every consultation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.28 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <a
                href="#signup"
                data-testid="hero-cta-primary"
                className="inline-flex justify-center items-center bg-[#1E8C75] hover:bg-[#3FAA8D] text-white px-9 py-4 rounded-xl text-base font-bold transition-all duration-200 shadow-xl shadow-[#1E8C75]/25 hover:shadow-[#3FAA8D]/30 hover:-translate-y-0.5"
              >
                Join the Waitlist →
              </a>
              <a
                href="#how-it-works"
                data-testid="hero-cta-secondary"
                className="inline-flex justify-center items-center border border-white/30 hover:border-white/60 text-white/80 hover:text-white hover:bg-white/5 px-9 py-4 rounded-xl text-base font-semibold transition-all duration-200"
              >
                See How It Works
              </a>
            </motion.div>

            <div className="mb-8">
              <EcgLine />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                "87% of patients repeat their history to every new doctor",
                "65% store records as phone camera photos",
                "Bai — available anytime, between every visit",
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={statVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4"
                >
                  <p className="text-[#6FD1C2] text-sm leading-snug">{stat}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — animated Bai companion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Glow halo behind card */}
              <div className="absolute inset-0 -m-6 rounded-full bg-[#1E8C75] blur-3xl opacity-15 pointer-events-none" />
              <InteractiveBaiDemo />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative blobs */}
      <motion.div
        className="absolute top-0 right-0 -mr-48 -mt-48 w-[500px] h-[500px] bg-[#1E8C75] rounded-full blur-[140px] opacity-25 pointer-events-none"
        animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.18, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#4DA6FF] rounded-full blur-[120px] opacity-10 pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.07, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </section>
  );
}
