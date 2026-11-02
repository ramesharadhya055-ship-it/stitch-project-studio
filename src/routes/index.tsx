import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import sunwayHomeHtml from "../site-import/sunway-home.html?raw";
import "../styles/site.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SUNWAY – Electrical & Solar Systems | Hospet & Sindhanur" },
      {
        name: "description",
        content:
          "Discover solar energy solutions, electrical products and services from SUNWAY – ELECTRICAL & SOLAR SYSTEMS. Serving Hospet, Sindhanur, and neighboring regions with dependable installations and certified electrical expertise.",
      },
      { property: "og:title", content: "SUNWAY – Electrical & Solar Systems | Hospet & Sindhanur" },
      {
        property: "og:description",
        content:
          "Power your home with solar. Rooftop solar, solar street lights, water heaters, power backup and more from SUNWAY – Electrical & Solar Systems, Hospet & Sindhanur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // The original document's <html>/<body> attributes
    document.documentElement.classList.add("scroll-smooth");
    document.body.classList.add("theme-solar", "font-sans", "antialiased", "text-slate-800");

    // Scripts injected via innerHTML do not execute; re-create them so the
    // design's theme / language / survey-wizard logic attaches. The scripts
    // are IIFE-wrapped with window.* exports so remounts cannot collide.
    for (const old of Array.from(el.querySelectorAll("script"))) {
      const script = document.createElement("script");
      for (const attr of Array.from(old.attributes)) script.setAttribute(attr.name, attr.value);
      script.textContent = old.textContent;
      old.parentNode?.replaceChild(script, old);
    }

    // Scripts registered DOMContentLoaded listeners after the event fired.
    if (document.readyState !== "loading") {
      document.dispatchEvent(new Event("DOMContentLoaded"));
    }

    return () => {
      document.documentElement.classList.remove("scroll-smooth");
      document.body.classList.remove(
        "theme-solar",
        "theme-light",
        "theme-dark",
        "font-sans",
        "antialiased",
        "text-slate-800",
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      // The imported design is raw source HTML; React's hydration
      // re-serialization of it will never match byte-for-byte.
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: sunwayHomeHtml }}
    />
  );
}
