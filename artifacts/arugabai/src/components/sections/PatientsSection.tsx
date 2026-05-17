import { Calendar, FileText, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "./NavBar";

export function PatientsSection() {
  return (
    <section id="for-patients" data-testid="patients-section" className="bg-[#F4F7F6] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <p className="text-[#E8960F] uppercase tracking-wider font-bold text-sm mb-3">For Patients</p>
            <h2 className="font-nunito text-3xl sm:text-4xl font-extrabold text-[#073D31] mb-6 leading-tight">
              Meet Bai — who already knows your health story.
            </h2>
            <p className="text-lg text-[#4A6B63] leading-relaxed mb-10">
              No more arriving at consultations empty-handed, trying to remember which medications you're taking and when your last blood test was. Bai prepares you before every appointment and helps you understand what your doctor said.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#E8960F]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-nunito font-bold text-lg text-[#073D31] mb-2">Prepared before every appointment</h3>
                  <p className="text-[#4A6B63]">Bai builds your pre-visit summary so you arrive knowing what to discuss — your recent symptoms, current medications, and questions to ask.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#E8960F]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-nunito font-bold text-lg text-[#073D31] mb-2">Understand what your doctor said</h3>
                  <p className="text-[#4A6B63]">The consultation is transcribed, approved by your doctor, and explained in plain language. No more trying to remember everything.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center">
                    <Lock className="w-5 h-5 text-[#E8960F]" />
                  </div>
                </div>
                <div>
                  <h3 className="font-nunito font-bold text-lg text-[#073D31] mb-2">Your records are yours</h3>
                  <p className="text-[#4A6B63]">Nothing is stored without your approval. You decide who sees your records, when, and for how long.</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-l-4 border-[#E8960F] p-6 rounded-r-xl shadow-sm">
              <p className="text-lg italic text-[#1A2B28] font-medium leading-relaxed">
                "I keep an envelope of prescriptions. I try to remember. But every new doctor asks me to start from scratch — and I can never remember everything."
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-[#073D31] rounded-[2rem] shadow-xl overflow-hidden border-4 border-[#073D31]">
              <div className="bg-[#1A2B28] px-6 py-4 flex items-center gap-3 border-b border-white/10">
                <div className="scale-75 origin-left -ml-2">
                  <Logo dark={true} />
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3FAA8D] animate-pulse"></span>
                  <span className="text-white/80 text-sm font-medium">Online</span>
                </div>
              </div>
              
              <div className="p-6 space-y-6 bg-[#073D31] min-h-[400px] flex flex-col justify-end pb-8">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#1E8C75] text-white p-4 rounded-2xl rounded-tl-sm w-[85%]"
                >
                  <p className="text-sm leading-relaxed">Good morning, Lola Cora! Your appointment with Dr. Reyes is tomorrow at 10am. I've prepared a summary of your past 3 visits.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="bg-white text-[#1A2B28] p-4 rounded-2xl rounded-tr-sm w-[80%] self-end shadow-sm"
                >
                  <p className="text-sm leading-relaxed">What should I ask about my blood pressure?</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.2 }}
                  className="bg-[#1E8C75] text-white p-4 rounded-2xl rounded-tl-sm w-[90%]"
                >
                  <p className="text-sm leading-relaxed">Your BP has been averaging 142/88 the past 2 weeks — higher than your target. I'd suggest asking Dr. Reyes about adjusting your Amlodipine dosage.</p>
                </motion.div>
              </div>

              <div className="px-4 pb-4 pt-2 bg-[#073D31]">
                <div className="bg-white/10 rounded-full px-4 py-3 flex items-center">
                  <span className="text-white/40 text-sm">Type a message...</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
