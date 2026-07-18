"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const smooth = (value: number) => { const x = clamp(value); return x * x * x * (x * (x * 6 - 15) + 10); };
const callCopy = "Ichaaaa";
const replyCopy = "Kocheeee";
const dotCopy = "............";

function LetteredWord({ copy, guide, kind, className, textLength }: { copy: string; guide: string; kind: "call" | "reply"; className: string; textLength: number }) {
  return (
    <text className={`ink-word ${className}`}>
      <textPath href={guide} startOffset="0%" textLength={textLength} lengthAdjust="spacing">
        {[...copy].map((letter, index) => <tspan className="ink-letter" data-voice-letter={kind} key={`${letter}-${index}`}>{letter}</tspan>)}
      </textPath>
    </text>
  );
}

function LetteredCall({ guide, textLength }: { guide: string; textLength: number }) {
  return (
    <text className="ink-word ink-word-call">
      <textPath href={guide} startOffset="0%" textLength={textLength} lengthAdjust="spacing">
        {[...callCopy].map((letter, index) => <tspan className="ink-letter" data-voice-letter="call" key={`${letter}-${index}`}>{letter}</tspan>)}
        {[...dotCopy].map((dot, index) => <tspan className="ink-inline-dot" data-voice-dot="call" key={`dot-${index}`}>{dot}</tspan>)}
      </textPath>
    </text>
  );
}

export default function CallResponse() {
  const runway = useRef<HTMLElement>(null);
  const girl = useRef<HTMLDivElement>(null);
  const boy = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let start = 0;
    let distance = 1;
    let lastProgress = -1;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const section = runway.current;
    if (!section) return;
    const callLetters = [...section.querySelectorAll<SVGTSpanElement>('[data-voice-letter="call"]')];
    const replyLetters = [...section.querySelectorAll<SVGTSpanElement>('[data-voice-letter="reply"]')];
    const callDots = [...section.querySelectorAll<SVGTSpanElement>('[data-voice-dot="call"]')];

    const measure = () => {
      const section = runway.current;
      if (!section) return;
      start = section.getBoundingClientRect().top + window.scrollY;
      distance = Math.max(1, section.offsetHeight - window.innerHeight);
      lastProgress = -1;
    };

    const update = () => {
      if (!girl.current || !boy.current) return;
      const progress = motionPreference.matches ? 1 : clamp((window.scrollY - start) / distance);
      if (Math.abs(progress - lastProgress) < 0.0001) return;
      lastProgress = progress;
      const girlIn = smooth(progress / 0.16);
      const boyIn = smooth((progress - 0.5) / 0.18);
      callLetters.forEach((letter, index) => { letter.style.opacity = String(smooth((progress - (0.055 + (index % callCopy.length) * 0.012)) / 0.045)); });
      replyLetters.forEach((letter, index) => { letter.style.opacity = String(smooth((progress - (0.59 + (index % replyCopy.length) * 0.014)) / 0.045)); });
      callDots.forEach((dot, index) => { dot.style.opacity = String(smooth((progress - (0.26 + (index % dotCopy.length) * 0.012)) / 0.035)); });
      girl.current.style.opacity = String(girlIn);
      girl.current.style.transform = `translate3d(0, ${24 * (1 - girlIn)}px, 0) rotate(${-3 + 3 * girlIn}deg) scale(${0.9 + girlIn * 0.1})`;
      boy.current.style.opacity = String(boyIn);
      boy.current.style.transform = `translate3d(0, ${24 * (1 - boyIn)}px, 0) rotate(${3 - 3 * boyIn}deg) scale(${0.9 + boyIn * 0.1})`;
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };
    const remeasure = () => { measure(); requestUpdate(); };

    measure();
    update();
    runway.current?.setAttribute("data-motion", "ready");
    addEventListener("scroll", requestUpdate, { passive: true });
    addEventListener("resize", remeasure);
    addEventListener("orientationchange", remeasure);
    addEventListener("pageshow", remeasure);
    motionPreference.addEventListener("change", remeasure);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", requestUpdate);
      removeEventListener("resize", remeasure);
      removeEventListener("orientationchange", remeasure);
      removeEventListener("pageshow", remeasure);
      motionPreference.removeEventListener("change", remeasure);
    };
  }, []);

  return (
    <section className="call-runway" id="call-response" ref={runway}>
      <div className="call-scene">
        <div className="call-character call-girl" ref={girl}><Image src="/images/angel-cutout.webp" alt="Illustrated Angel calling Amal" fill sizes="(max-width: 700px) 37vw, 330px" /></div>
        <div className="call-character call-boy" ref={boy}><Image src="/images/amal-cutout.webp" alt="Illustrated Amal answering Angel" fill sizes="(max-width: 700px) 37vw, 330px" /></div>
        <svg className="ink-message ink-message-desktop ink-message-call" viewBox="0 0 1200 300" aria-hidden="true">
          <defs>
            <path id="call-word-guide" d="M155 112 Q420 46 720 106" />
          </defs>
          <LetteredCall guide="#call-word-guide" textLength={560} />
        </svg>
        <svg className="ink-message ink-message-desktop ink-message-reply" viewBox="0 0 1200 300" aria-hidden="true">
          <defs>
            <path id="reply-word-guide" d="M825 94 Q945 66 1070 92" />
          </defs>
          <LetteredWord copy={replyCopy} guide="#reply-word-guide" kind="reply" className="ink-word-reply" textLength={220} />
        </svg>
        <svg className="ink-message ink-message-mobile" viewBox="0 0 400 260" aria-hidden="true">
          <defs>
            <path id="mobile-call-word-guide" d="M18 72 Q190 20 390 70" />
            <path id="mobile-reply-word-guide" d="M170 158 Q275 132 378 155" />
          </defs>
          <LetteredCall guide="#mobile-call-word-guide" textLength={365} />
          <LetteredWord copy={replyCopy} guide="#mobile-reply-word-guide" kind="reply" className="ink-word-reply" textLength={208} />
        </svg>
      </div>
    </section>
  );
}
