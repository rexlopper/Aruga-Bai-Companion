import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { InteractiveBaiDemo } from "@/components/InteractiveBaiDemo";
import { useLanguage } from "@/i18n/LanguageContext";

export function FloatingBaiButton() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Floating pill button — mobile/tablet only */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="fab"
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => setOpen(true)}
            aria-label={t.floating.label}
            className="lg:hidden fixed bottom-6 right-5 z-50 flex items-center gap-2.5 bg-[#1E8C75] hover:bg-[#3FAA8D] active:scale-95 text-white text-sm font-semibold px-5 py-3.5 rounded-full shadow-xl shadow-[#1E8C75]/30 transition-colors"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
            </span>
            <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
            {t.floating.label}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Bottom-sheet overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            {/* Sheet */}
            <motion.div
              key="sheet"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#042E24] rounded-t-3xl shadow-2xl"
              style={{ maxHeight: "92dvh" }}
            >
              {/* Drag handle + close */}
              <div className="flex items-center justify-between px-5 pt-4 pb-2">
                <div className="mx-auto w-10 h-1 rounded-full bg-white/20 absolute left-1/2 -translate-x-1/2 top-3" />
                <div className="flex items-center gap-2 pt-1">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6FD1C2] opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6FD1C2]" />
                  </span>
                  <span className="text-white/70 text-sm font-medium">{t.bai.online}</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              <div className="px-4 pb-6 pt-2 overflow-y-auto" style={{ maxHeight: "calc(92dvh - 60px)" }}>
                <InteractiveBaiDemo />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
