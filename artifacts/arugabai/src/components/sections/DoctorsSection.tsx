import { Mic, FileText, CheckCircle, Archive } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Mic, step: "01", title: "Patient records consultation", desc: "With doctor's consent, the session is recorded." },
  { icon: FileText, step: "02", title: "AI structures the note", desc: "Bai transcribes and formats the clinical record." },
  { icon: CheckCircle, step: "03", title: "Doctor reviews & approves", desc: "The physician edits and confirms. Their name, their authority." },
  { icon: Archive, step: "04", title: "Record stored in ArugaVault", desc: "Patient consents. Record saved. Accessible forever." },
];

export function DoctorsSection() {
  return (
    <section
      id="for-doctors"
      data-testid="doctors-section"
      className="bg-[#1A4A6E] py-36 px-6 sm:px-10 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-[#6FD1C2] uppercase tracking-widest font-bold text-xs mb-5">For Hospital & Clinic Leaders</p>
          <h2 className="font-nunito text-4xl sm:text-5xl font-extrabold text-white mb-8 leading-tight">
            Your doctors will never have to write during a consultation again.
          </h2>
          <p className="text-xl text-blue-100/80 leading-relaxed">
            Built for fellows, consultants, and hospital directors who can deploy ArugaBai across their organization. Every consultation captured. Every record verified. Zero writing burden on the physician.
          </p>
        </motion.div>

        <div className="relative mb-24">
          <div className="hidden lg:block absolute top-8 left-16 right-16 h-px bg-white/10 z-0" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-10">
            {steps.map(({ icon: Icon, step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.14 }}
                className="flex flex-col items-center text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 rounded-full bg-[#1A4A6E] border-2 border-[#1E8C75] flex items-center justify-center mb-6 shadow-lg shadow-[#1E8C75]/20 cursor-default"
                >
                  <Icon className="w-6 h-6 text-[#6FD1C2]" />
                </motion.div>
                <p className="text-[#6FD1C2] text-xs font-bold tracking-widest uppercase mb-3">{step}</p>
                <h3 className="font-nunito font-bold text-base text-white mb-3 leading-snug">{title}</h3>
                <p className="text-blue-200/70 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "For your doctors",
              body: "Less documentation. More presence. Your physicians stay in the consultation, not behind a keyboard.",
            },
            {
              title: "For your institution",
              body: "Org-wide deployment. Every consultation captured, verified, and complete. A searchable clinical record system across your practice.",
            },
          ].map(({ title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 transition-colors duration-200"
            >
              <h3 className="font-nunito font-bold text-2xl text-white mb-5">{title}</h3>
              <p className="text-blue-100/80 leading-relaxed text-lg">{body}</p>
            </motion.div>
          ))}
        </div>

        <a
          href="#signup"
          className="inline-flex justify-center items-center bg-[#1E8C75] hover:bg-[#3FAA8D] text-white px-10 py-5 rounded-xl text-lg font-bold transition-all duration-200 shadow-xl shadow-black/20 hover:-translate-y-0.5"
        >
          Request a Demo →
        </a>

      </div>
    </section>
  );
}
