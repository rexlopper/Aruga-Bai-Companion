import { Calendar, FileText, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { BaiChatDemo } from "@/components/BaiChatDemo";
import { useLanguage } from "@/i18n/LanguageContext";

export function PatientsSection() {
  const { t } = useLanguage();

  const benefits = [
    { icon: Calendar, title: t.patients.benefit1Title, desc: t.patients.benefit1Desc },
    { icon: FileText, title: t.patients.benefit2Title, desc: t.patients.benefit2Desc },
    { icon: Lock,     title: t.patients.benefit3Title, desc: t.patients.benefit3Desc },
  ];

  return (
    <section id="for-patients" data-testid="patients-section" className="bg-[#F4F7F6] py-36 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <div>
            <p className="text-[#E8960F] uppercase tracking-widest font-bold text-xs mb-5">{t.patients.label}</p>
            <h2 className="font-nunito text-4xl sm:text-5xl font-extrabold text-[#073D31] mb-8 leading-tight">
              {t.patients.headline}
            </h2>
            <p className="text-xl text-[#4A6B63] leading-relaxed mb-14">
              {t.patients.body}
            </p>

            <div className="space-y-10 mb-14">
              {benefits.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-11 h-11 bg-white shadow-sm rounded-2xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#E8960F]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-nunito font-bold text-lg text-[#073D31] mb-2">{title}</h3>
                    <p className="text-[#4A6B63] leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white border-l-4 border-[#E8960F] px-8 py-8 rounded-r-2xl shadow-sm">
              <p className="text-lg italic text-[#1A2B28] leading-relaxed mb-4">
                {t.patients.quote}
              </p>
              <p className="text-[#4A6B63] font-semibold text-sm uppercase tracking-wider">{t.patients.quoteAttr}</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-end sticky top-24"
          >
            <BaiChatDemo compact />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
