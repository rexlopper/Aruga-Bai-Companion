import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

type Message = { from: "bai" | "user"; text: string; id: number };

const GREETING: Message = {
  id: 0,
  from: "bai",
  text: "Hello! I'm Bai. Ask me anything about managing your health — or try one of the questions below.",
};

const SUGGESTED = [
  "What should I ask my doctor tomorrow?",
  "How do I share records with family?",
  "Is my health data private?",
  "How does consultation capture work?",
];

type MatchEntry = { keywords: string[]; response: string };

const RESPONSES: MatchEntry[] = [
  {
    keywords: ["blood pressure", "bp", "hypertension", "amlodipine", "hyper"],
    response:
      "Before your next visit, I can prepare a 2-week BP average, flag any spikes, and suggest specific questions for your doctor — like whether your current dosage should be adjusted. You arrive informed, not anxious.",
  },
  {
    keywords: ["medication", "medicine", "meds", "drugs", "prescri", "tablet", "capsule"],
    response:
      "I track all your medications — dosages, schedules, and refill dates. I'll remind you before you run out and flag anything your doctor should review at your next visit.",
  },
  {
    keywords: ["share", "family", "sibling", "children", "nanay", "tatay", "lola", "lolo", "parent"],
    response:
      "You can share your ArugaVault with any family member — a sibling, your child, even a trusted friend. You control exactly what they can see, and you can revoke access any time.",
  },
  {
    keywords: ["appointment", "consult", "doctor", "visit", "tomorrow", "schedule", "prepare", "ask"],
    response:
      "I build a pre-visit summary before every appointment — your recent symptoms, current medications, lab results, and suggested questions. You walk in prepared, not scrambling to remember.",
  },
  {
    keywords: ["record", "vault", "arugavault", "store", "document", "lab", "result", "prescription"],
    response:
      "ArugaVault stores everything: prescriptions, lab results, discharge summaries, referral letters, and verified consultation transcripts. All organized by date, searchable, and shareable.",
  },
  {
    keywords: ["private", "privacy", "safe", "secure", "data", "npc", "confidential"],
    response:
      "Your records are yours. Nothing is stored without your approval. You decide who sees what and for how long. ArugaBai is NPC-compliant — your privacy is not optional for us.",
  },
  {
    keywords: ["transcri", "capture", "record consult", "clinical note", "doctor write", "documentation"],
    response:
      "During a consultation, Bai transcribes and structures the clinical note. Your doctor reviews and approves it. Then you consent. That's the only way it's ever stored — three layers of confirmation.",
  },
  {
    keywords: ["who are you", "what are you", "what is bai", "tell me about", "what can you"],
    response:
      "I'm Bai — your personal health companion. I know your health history, prepare you for every appointment, and make sure you understand what your doctor said. Think of me as the health coordinator your family never had.",
  },
  {
    keywords: ["hi", "hello", "kamusta", "good morning", "good afternoon", "hey", "kumusta"],
    response:
      "Hello! Great to meet you. I'm here to help you manage your health — from preparing for appointments to keeping your records organized. What can I help you with today?",
  },
  {
    keywords: ["diabetes", "sugar", "glucose", "insulin", "hba1c"],
    response:
      "Managing diabetes takes consistency. I can track your glucose readings, flag patterns before your next consultation, and remind you what to discuss with your endocrinologist — including your HbA1c trend.",
  },
  {
    keywords: ["hospital", "clinic", "institution", "deploy", "org", "doctor implement", "fellows"],
    response:
      "For hospitals and clinics, ArugaBai offers org-wide deployment. Every consultation is captured, every record verified — and your physicians never have to write during a consultation again.",
  },
  {
    keywords: ["cost", "price", "how much", "free", "subscription", "pay", "bayad"],
    response:
      "We're currently building ArugaBai with early users. Join the waitlist and we'll reach out with early access details — including pricing — when we're ready for you.",
  },
];

function findResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const entry of RESPONSES) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.response;
    }
  }
  return "That's a great question — and exactly the kind of thing I'm designed to help with. Once you join ArugaBai, I'll have your full health context to give you a real answer. Join the waitlist below to be first in line.";
}

let _id = 1;
function nextId() {
  return ++_id;
}

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

export function InteractiveBaiDemo() {
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [exchangeCount, setExchangeCount] = useState(0);
  const [showSuggested, setShowSuggested] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    setShowSuggested(false);
    setInput("");

    const userMsg: Message = { id: nextId(), from: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);
    const delay = 900 + Math.random() * 700;

    setTimeout(() => {
      const response = findResponse(trimmed);
      const baiMsg: Message = { id: nextId(), from: "bai", text: response };
      setIsTyping(false);
      setMessages((prev) => [...prev, baiMsg]);
      setExchangeCount((c) => c + 1);
    }, delay);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage(input);
  };

  return (
    <div className="w-full max-w-sm bg-[#042E24] rounded-3xl shadow-2xl overflow-hidden border border-white/10 flex flex-col">
      {/* Header */}
      <div className="bg-[#031F19] px-5 py-4 flex items-center gap-3 border-b border-white/10 shrink-0">
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

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 min-h-[320px] max-h-[380px]">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-[88%] ${
                  msg.from === "bai"
                    ? "bg-[#1E8C75] text-white rounded-tl-sm"
                    : "bg-white text-[#1A2B28] rounded-tr-sm shadow-sm"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-[#1E8C75]/60 px-4 py-2 rounded-2xl rounded-tl-sm">
                <TypingDots />
              </div>
            </motion.div>
          )}

          {exchangeCount >= 2 && (
            <motion.div
              key="cta"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center pt-1"
            >
              <a
                href="#signup"
                className="text-[#6FD1C2] text-xs font-semibold underline underline-offset-2 hover:text-white transition-colors"
              >
                Ready for the real Bai? Join the waitlist →
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* Suggested chips */}
      <AnimatePresence>
        {showSuggested && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="px-5 pb-3 flex flex-wrap gap-2 shrink-0"
          >
            {SUGGESTED.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="text-xs text-[#6FD1C2] border border-[#6FD1C2]/30 hover:border-[#6FD1C2] hover:bg-[#6FD1C2]/10 rounded-full px-3 py-1.5 transition-colors text-left leading-snug"
              >
                {q}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input */}
      <div className="px-5 pb-5 pt-1 shrink-0">
        <div className="bg-white/8 border border-white/15 rounded-full px-4 py-3 flex items-center gap-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Bai a question..."
            disabled={isTyping}
            className="flex-1 bg-transparent text-white text-sm placeholder:text-white/35 outline-none min-w-0 disabled:opacity-60"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || isTyping}
            className="w-7 h-7 rounded-full bg-[#1E8C75] hover:bg-[#3FAA8D] disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors shrink-0"
          >
            <Send className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
        <p className="text-white/25 text-[10px] text-center mt-2">
          Demo responses — join the waitlist for the real Bai
        </p>
      </div>
    </div>
  );
}
