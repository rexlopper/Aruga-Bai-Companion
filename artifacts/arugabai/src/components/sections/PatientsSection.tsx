import { Calendar, FileText, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { BaiChatDemo } from "@/components/BaiChatDemo";

const benefits = [
  {
    icon: Calendar,
    title: "Prepared before every appointment",
    desc: "Bai builds your pre-visit summary so you arrive knowing what to discuss — your recent symptoms, current medications, and questions to ask.",
  },
  {
    icon: FileText,
    title: "Understand what your doctor said",
    desc: "The consultation is transcribed, approved by your doctor, and explained in plain language. No more trying to remember everything.",
  },
  {
    icon: Lock,
    title: "Your records are yours",
    desc: "Nothing is stored without your approval. You decide who sees your records, when, and for how long.",
  },
];

export function PatientsSection() {
  return (
    <section id="for-patients" data-testid="patients-section" className="bg-[#F4F7F6] py-36 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <div>
            <p className="text-[#E8960F] uppercase tracking-widest font-bold text-xs mb-5">For Patients</p>
            <h2 className="font-nunito text-4xl sm:text-5xl font-extrabold text-[#073D31] mb-8 leading-tight">
              Meet Bai — who already knows your health story.
            </h2>
            <p className="text-xl text-[#4A6B63] leading-relaxed mb-14">
              No more arriving at consultations empty-handed. Bai prepares you before every appointment and helps you understand what your doctor said.
            </p>

            <div className="space-y-10 mb-14">
              {benefits.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
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
                "I keep an envelope of prescriptions. I try to remember. But every new doctor asks me to start from scratch — and I can never remember everything."
              </p>
              <p className="text-[#4A6B63] font-semibold text-sm uppercase tracking-wider">— The Patient</p>
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
