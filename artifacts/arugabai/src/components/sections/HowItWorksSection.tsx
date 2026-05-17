import { Cpu, Mic, Database } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export function HowItWorksSection() {
  const { t } = useLanguage();

  const capabilities = [
    { icon: Cpu,      title: t.howItWorks.cap1Title, desc: t.howItWorks.cap1Desc },
    { icon: Mic,      title: t.howItWorks.cap2Title, desc: t.howItWorks.cap2Desc },
    { icon: Database, title: t.howItWorks.cap3Title, desc: t.howItWorks.cap3Desc },
  ];

  return (
    <section
      id="how-it-works"
      data-testid="how-it-works-section"
      className="bg-white py-36 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="font-nunito text-4xl sm:text-5xl font-extrabold text-[#073D31]">
            {t.howItWorks.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-28">
          {capabilities.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.14 }}
              className="flex flex-col items-center text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, backgroundColor: "#1E8C75" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-20 h-20 bg-[#F4F7F6] rounded-3xl flex items-center justify-center mb-8 text-[#1E8C75] group-hover:text-white cursor-default"
              >
                <Icon className="w-9 h-9" />
              </motion.div>
              <h3 className="font-nunito font-bold text-2xl text-[#073D31] mb-5">{title}</h3>
              <p className="text-[#4A6B63] leading-relaxed text-lg">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <blockquote className="border-l-4 border-[#1E8C75] bg-[#F4F7F6] px-10 py-10 rounded-r-2xl">
            <p className="font-nunito text-2xl md:text-3xl italic text-[#073D31] font-bold leading-snug">
              {t.howItWorks.quote}
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
