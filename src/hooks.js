import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/* ---------------------------------------------------------
   Scroll to the top on route change, or to #hash if present.
   React Router doesn't do either on its own.
--------------------------------------------------------- */
export function useScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // wait one frame so the target section exists after a route change
      const id = decodeURIComponent(hash.slice(1));
      const raf = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: "start" });
      });
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
}

/* ---------------------------------------------------------
   Fade-up elements marked with [data-reveal] as they enter
   the viewport. Respects prefers-reduced-motion.
--------------------------------------------------------- */
export function useReveal(dep) {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll("[data-reveal]:not(.is-visible)");

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    root.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

/* ---------------------------------------------------------
   Live local time for a given IANA time zone.
--------------------------------------------------------- */
export function useLocalTime(timeZone) {
  const format = () =>
    new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    }).format(new Date());

  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15_000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);

  return time;
}

/* ---------------------------------------------------------
   Set the document title per page.
--------------------------------------------------------- */
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
