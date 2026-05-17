import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: number;
  from: "bai" | "user";
  text: string;
  delay: number;
};

const MESSAGES: Message[] = [
  { id: 1, from: "bai", text: "Good morning, Lola Cora! Your appointment with Dr. Reyes is tomorrow at 10am. I've prepared a summary of your last 3 visits.", delay: 1200 },
  { id: 2, from: "bai", text: "", delay: 2400 },
  { id: 3, from: "user", text: "What should I ask about my blood pressure?", delay: 5200 },
  { id: 4, from: "bai", text: "Your BP has been averaging 142/88 the past 2 weeks — higher than your target. I'd suggest asking Dr. Reyes about adjusting your Amlodipine dosage.", delay: 7000 },
];

const SUMMARY_DELAY = 3200;
const TYPING_DURATION = 1200;
const LOOP_AFTER = 11000;

function TypingDots() {
  return (
    <div className="flex gap-1 items-center py-1 px-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-white/60 block"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.18 }}
        />
      ))}
    </div>
  );
}

function SummaryCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white/10 border border-white/20 rounded-2xl p-4 mt-2 w-[90%]"
    >
      <p className="text-[#6FD1C2] text-xs font-bold uppercase tracking-widest mb-3">Pre-Visit Summary</p>
      <div className="space-y-2">
        {[
          { label: "Avg BP (2 weeks)", value: "142 / 88", alert: true },
          { label: "Current meds", value: "Amlodipine 5mg" },
          { label: "Last visit", value: "3 weeks ago" },
        ].map(({ label, value, alert }) => (
          <div key={label} className="flex justify-between items-center">
            <span className="text-white/50 text-xs">{label}</span>
            <span className={`text-xs font-semibold ${alert ? "text-[#E8960F]" : "text-white/90"}`}>{value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function BaiChatDemo({ compact = false }: { compact?: boolean }) {
  const [visible, setVisible] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    setVisible([]);
    setTyping(false);
    setShowSummary(false);

    const timers: ReturnType<typeof setTimeout>[] = [];

    MESSAGES.forEach((msg, i) => {
      if (msg.text === "") return;

      const isBai = msg.from === "bai";
      const typingDelay = isBai ? msg.delay - TYPING_DURATION : msg.delay;

      if (isBai && i > 0) {
        timers.push(setTimeout(() => setTyping(true), typingDelay));
      }
      timers.push(
        setTimeout(() => {
          setTyping(false);
          setVisible((v) => [...v, msg.id]);
        }, msg.delay)
      );
    });

    timers.push(setTimeout(() => setShowSummary(true), SUMMARY_DELAY));
    timers.push(setTimeout(() => setKey((k) => k + 1), LOOP_AFTER));

    return () => timers.forEach(clearTimeout);
  }, [key]);

  return (
    <div className={`bg-[#042E24] rounded-3xl shadow-2xl overflow-hidden border border-white/10 ${compact ? "max-w-sm" : "w-full max-w-sm"}`}>
      <div className="bg-[#031F19] px-5 py-4 flex items-center gap-3 border-b border-white/10">
        <img src="/arugabai-logo.png" alt="ArugaBai" className="h-6 w-auto object-contain" />
        <div className="ml-auto flex items-center gap-2">
          <motion.span
            className="w-2 h-2 rounded-full bg-[#3FAA8D] block"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-white/60 text-xs font-medium">Bai is online</span>
        </div>
      </div>

      <div className={`flex flex-col gap-4 px-5 py-6 ${compact ? "min-h-[340px]" : "min-h-[420px]"} justify-end`}>
        <AnimatePresence>
          {visible.includes(1) && (
            <motion.div
              key="msg1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1E8C75] text-white px-4 py-3 rounded-2xl rounded-tl-sm w-[88%] text-sm leading-relaxed"
            >
              Good morning, Lola Cora! Your appointment with Dr. Reyes is tomorrow at 10am. I've prepared a summary of your last 3 visits.
            </motion.div>
          )}

          {visible.includes(1) && showSummary && <SummaryCard key="summary" />}

          {visible.includes(3) && (
            <motion.div
              key="msg3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-[#1A2B28] px-4 py-3 rounded-2xl rounded-tr-sm w-[78%] self-end text-sm leading-relaxed shadow-sm"
            >
              What should I ask about my blood pressure?
            </motion.div>
          )}

          {typing && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-[#1E8C75]/60 px-4 py-2 rounded-2xl rounded-tl-sm w-20"
            >
              <TypingDots />
            </motion.div>
          )}

          {visible.includes(4) && (
            <motion.div
              key="msg4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1E8C75] text-white px-4 py-3 rounded-2xl rounded-tl-sm w-[92%] text-sm leading-relaxed"
            >
              Your BP has been averaging 142/88 the past 2 weeks — higher than your target. I'd suggest asking Dr. Reyes about adjusting your Amlodipine dosage.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="px-5 pb-5">
        <div className="bg-white/5 border border-white/10 rounded-full px-4 py-3 flex items-center gap-2">
          <span className="text-white/30 text-sm flex-1">Message Bai...</span>
          <div className="w-6 h-6 rounded-full bg-[#1E8C75]/40 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M11 1L1 11M11 1H5M11 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
