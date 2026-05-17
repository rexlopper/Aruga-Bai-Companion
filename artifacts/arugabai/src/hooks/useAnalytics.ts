import { useEffect, useRef } from "react";

type SectionName =
  | "hero"
  | "trust-bar"
  | "for-families"
  | "for-patients"
  | "for-doctors"
  | "how-it-works"
  | "signup"
  | "footer";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

function trackSection(section: SectionName) {
  const eventName = `Section Viewed: ${section}`;

  if (typeof window.plausible === "function") {
    window.plausible(eventName, { props: { section } });
  }

  try {
    const key = "arugabai_sections_viewed";
    const stored = JSON.parse(sessionStorage.getItem(key) || "{}");
    if (!stored[section]) {
      stored[section] = { firstSeen: new Date().toISOString(), count: 0 };
    }
    stored[section].count += 1;
    stored[section].lastSeen = new Date().toISOString();
    sessionStorage.setItem(key, JSON.stringify(stored));
  } catch {
  }

  if (import.meta.env.DEV) {
    console.info(`[ArugaBai Analytics] Section viewed: ${section}`);
  }
}

export function useAnalytics() {
  const observed = useRef<Set<string>>(new Set());

  useEffect(() => {
    const sectionIds: SectionName[] = [
      "hero",
      "trust-bar",
      "for-families",
      "for-patients",
      "for-doctors",
      "how-it-works",
      "signup",
      "footer",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id as SectionName;
          if (entry.isIntersecting && !observed.current.has(id)) {
            observed.current.add(id);
            trackSection(id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id) ?? document.querySelector(`[data-section="${id}"]`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
