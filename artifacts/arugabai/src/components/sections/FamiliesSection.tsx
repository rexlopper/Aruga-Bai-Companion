import { Heart, Share2, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export function FamiliesSection() {
  const { t } = useLanguage();

  const cards = [
    { icon: Heart, title: t.families.card1Title, desc: t.families.card1Desc },
    { icon: Share2, title: t.families.card2Title, desc: t.families.card2Desc },
    { icon: Globe,  title: t.families.card3Title, desc: t.families.card3Desc },
  ];

  return (
    <section
      id="for-families"
      data-testid="families-section"
      className="bg-white py-36 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-[#1E8C75] uppercase tracking-widest font-bold text-xs mb-5">{t.families.label}</p>
          <h2 className="font-nunito text-4xl sm:text-5xl font-extrabold text-[#073D31] mb-8 leading-tight">
            {t.families.headline}
          </h2>
          <p className="text-xl text-[#4A6B63] leading-relaxed">
            {t.families.body}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cards.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(7,61,49,0.1)" }}
              className="border border-[#D4E2DE] bg-[#F4F7F6]/60 rounded-3xl p-10 cursor-default transition-shadow"
            >
              <div className="w-14 h-14 bg-[#1E8C75]/10 rounded-2xl flex items-center justify-center mb-8">
                <Icon className="w-7 h-7 text-[#1E8C75]" />
              </div>
              <h3 className="font-nunito font-bold text-xl text-[#073D31] mb-4">{title}</h3>
              <p className="text-[#4A6B63] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="bg-[#F4F7F6] border-l-4 border-[#E8960F] px-10 py-10 rounded-r-2xl mb-14"
        >
          <p className="text-xl italic text-[#1A2B28] leading-relaxed mb-5">
            {t.families.quote}
          </p>
          <p className="text-[#4A6B63] font-semibold text-sm uppercase tracking-wider">{t.families.quoteAttr}</p>
        </motion.div>

        <a
          href="#signup"
          className="inline-flex items-center text-[#1E8C75] font-bold text-lg hover:text-[#073D31] transition-colors group"
        >
          {t.families.cta}
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </section>
  );
}
