"use client";

import { useEffect, useRef } from "react";

const messages = [
  { side: "left", text: "Reached home?", time: "10:12 PM" },
  { side: "right", text: "Yes.", time: "10:13 PM" },
  { side: "left", text: "Just now.", time: "10:13 PM" },
  { side: "right", text: "Had food?", time: "10:14 PM" },
  { side: "left", text: "Yessss.", time: "10:14 PM" },
  { side: "right", text: "Good girl.", time: "10:15 PM" },
  { side: "left", text: "Hehe. Missing you.", time: "10:15 PM" },
  { side: "right", text: "Missing you more.", time: "10:16 PM" },
];

export default function LongDistance() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = [...section.querySelectorAll<HTMLElement>("[data-network-reveal]")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 901px)");

    if (reduceMotion.matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    section.setAttribute("data-motion", "ready");

    if (desktop.matches) {
      let frame = 0;
      let start = 0;
      let distance = 1;

      const measure = () => {
        start = section.getBoundingClientRect().top + window.scrollY;
        distance = Math.max(1, section.offsetHeight - window.innerHeight);
      };

      const update = () => {
        const progress = Math.max(0, Math.min(1, (window.scrollY - start) / distance));

        items.forEach((item) => {
          const from = Number(item.dataset.revealFrom ?? 0);
          if (progress >= from) item.classList.add("is-visible");
        });
      };

      const requestUpdate = () => {
        if (frame) return;
        frame = requestAnimationFrame(() => {
          frame = 0;
          update();
        });
      };

      const remeasure = () => {
        measure();
        requestUpdate();
      };

      measure();
      update();
      addEventListener("scroll", requestUpdate, { passive: true });
      addEventListener("resize", remeasure);

      return () => {
        cancelAnimationFrame(frame);
        removeEventListener("scroll", requestUpdate);
        removeEventListener("resize", remeasure);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -18% 0px", threshold: 0.25 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="distance-section network-chapter" ref={sectionRef}>
      <div className="network-scene">
        <div className="network-stars" aria-hidden="true">
          <span>*</span>
          <span>&hearts;</span>
          <span>*</span>
          <span>&hearts;</span>
          <span>*</span>
        </div>

        <div className="network-heading" data-network-reveal data-reveal-from="0">
          <span>Chapter 3:</span>
          <h2>
            Poor Network,
            <br />
            <em>Strong Connection.</em>
          </h2>
          <p>
            The Internet gave up
            <br />
            but they didn&apos;t.
          </p>
        </div>

        <div className="network-chat">
          {messages.map((message, index) => (
            <article
              className={`network-bubble network-bubble-${message.side}`}
              data-network-reveal
              data-reveal-from={String(0.14 + index * 0.075)}
              key={`${message.text}-${message.time}`}
            >
              <strong>{message.text}</strong>
              <small>
                {message.time} &#10003;&#10003;
              </small>
            </article>
          ))}
        </div>

        <div className="network-profit" data-network-reveal data-reveal-from="0.82">
          <p>
            Estimated telecom profits
            <br />
            after Amal and Angel started dating.
          </p>
          <div className="profit-chart" aria-hidden="true">
            <span>Rs</span>
            <svg viewBox="0 0 260 140">
              <path d="M28 110 L78 84 L105 99 L144 72 L178 50 L203 58 L234 22" />
              <path d="M28 118 H238" />
              <path d="M28 118 V18" />
              <text x="28" y="135">Before</text>
              <text x="188" y="135">After</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
