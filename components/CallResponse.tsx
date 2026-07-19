"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const smooth = (value: number) => {
  const x = clamp(value);
  return x * x * (3 - 2 * x);
};

export default function CallResponse() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const parts = [...section.querySelectorAll<HTMLElement>("[data-match-reveal]")];
    let frame = 0;
    let start = 0;
    let distance = 1;

    const measure = () => {
      start = section.getBoundingClientRect().top + window.scrollY;
      distance = Math.max(1, section.offsetHeight - window.innerHeight);
    };

    const update = () => {
      const progress = reduceMotion.matches ? 1 : clamp((window.scrollY - start) / distance);
      parts.forEach((part) => {
        const from = Number(part.dataset.revealFrom ?? 0);
        const span = Number(part.dataset.revealSpan ?? 0.2);
        const x = part.dataset.revealX ?? "0px";
        const visible = smooth((progress - from) / span);
        const y = 22 * (1 - visible);
        part.style.opacity = String(visible);
        part.style.transform = `translate3d(${x}, ${y}px, 0) rotate(var(--match-rotate, 0deg))`;
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
    section.setAttribute("data-motion", "ready");
    addEventListener("scroll", requestUpdate, { passive: true });
    addEventListener("resize", remeasure);
    reduceMotion.addEventListener("change", remeasure);

    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", requestUpdate);
      removeEventListener("resize", remeasure);
      reduceMotion.removeEventListener("change", remeasure);
    };
  }, []);

  return (
    <section className="call-runway match-note paper" id="call-response" ref={sectionRef}>
      <div className="match-note-inner">
        <div className="match-person match-person-angel" data-match-reveal data-reveal-from="0.04" data-reveal-span="0.16">
          <Image src="/images/angel-cutout.webp" alt="Illustrated Angel waving" fill sizes="(max-width: 700px) 42vw, 300px" />
        </div>

        <p className="match-call-text" data-match-reveal data-reveal-from="0.12" data-reveal-span="0.18">
          Ichaaaa<span aria-hidden="true">............</span>
        </p>

        <div className="match-person match-person-amal" data-match-reveal data-reveal-from="0.34" data-reveal-span="0.16">
          <Image src="/images/amal-cutout.webp" alt="Illustrated Amal waving" fill sizes="(max-width: 700px) 36vw, 260px" />
        </div>

        <p className="match-reply-text" data-match-reveal data-reveal-from="0.42" data-reveal-span="0.18">Kocheeee</p>

        <div className="match-center-copy" data-match-reveal data-reveal-x="-50%" data-reveal-from="0.56" data-reveal-span="0.18">
          <p className="match-thanks"><strong>They matched on the app.</strong><br />Thankfully,<br />they <em>matched</em><br />in <em>real life</em> too.</p>
          <span aria-hidden="true">♡</span>
        </div>

        <p className="match-cloud" data-match-reveal data-reveal-x="-50%" data-reveal-from="0.76" data-reveal-span="0.18">Orotta hi mathi<br />jeevitham maari mariyaan</p>
      </div>
    </section>
  );
}
