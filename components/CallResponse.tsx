"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const clamp = (value: number) => Math.max(0, Math.min(1, value));
const smooth = (value: number) => { const x = clamp(value); return x * x * x * (x * (x * 6 - 15) + 10); };

export default function CallResponse() {
  const runway = useRef<HTMLElement>(null);
  const callReveal = useRef<SVGRectElement>(null);
  const replyReveal = useRef<SVGRectElement>(null);
  const girl = useRef<HTMLDivElement>(null);
  const boy = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let start = 0;
    let distance = 1;
    let lastProgress = -1;

    const measure = () => {
      const section = runway.current;
      if (!section) return;
      start = section.getBoundingClientRect().top + window.scrollY;
      distance = Math.max(1, section.offsetHeight - window.innerHeight);
      lastProgress = -1;
    };

    const update = () => {
      const section = runway.current;
      if (!section || !callReveal.current || !replyReveal.current || !girl.current || !boy.current) return;
      const progress = clamp((window.scrollY - start) / distance);
      if (Math.abs(progress - lastProgress) < 0.0001) return;
      lastProgress = progress;
      const girlIn = smooth(progress / 0.16);
      const callIn = smooth((progress - 0.12) / 0.42);
      const boyIn = smooth((progress - 0.5) / 0.18);
      const replyIn = smooth((progress - 0.64) / 0.32);
      callReveal.current.setAttribute("width", String(1120 * callIn));
      replyReveal.current.setAttribute("x", String(1060 - 1120 * replyIn));
      replyReveal.current.setAttribute("width", String(1120 * replyIn));
      girl.current.style.opacity = String(girlIn);
      girl.current.style.transform = `translate3d(0, ${24 * (1 - girlIn)}px, 0) rotate(${-3 + 3 * girlIn}deg) scale(${0.9 + girlIn * 0.1})`;
      boy.current.style.opacity = String(boyIn);
      boy.current.style.transform = `translate3d(0, ${24 * (1 - boyIn)}px, 0) rotate(${3 - 3 * boyIn}deg) scale(${0.9 + boyIn * 0.1})`;
    };

    const tick = () => {
      update();
      frame = requestAnimationFrame(tick);
    };
    const remeasure = () => { measure(); update(); };

    measure();
    update();
    runway.current?.setAttribute("data-motion", "ready");
    frame = requestAnimationFrame(tick);
    addEventListener("resize", remeasure);
    addEventListener("orientationchange", remeasure);
    addEventListener("pageshow", remeasure);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("resize", remeasure);
      removeEventListener("orientationchange", remeasure);
      removeEventListener("pageshow", remeasure);
    };
  }, []);

  return (
    <section className="call-runway" id="call-response" ref={runway}>
      <div className="call-scene">
        <p className="call-kicker">the beginning of everything</p>
        <div className="call-character call-girl" ref={girl}><Image src="/images/angel-cutout.webp" alt="Illustrated Angel calling Amal" fill sizes="(max-width: 700px) 37vw, 330px" /></div>
        <div className="call-character call-boy" ref={boy}><Image src="/images/amal-cutout.webp" alt="Illustrated Amal answering Angel" fill sizes="(max-width: 700px) 37vw, 330px" /></div>
        <svg className="wave-message wave-message-call" viewBox="0 0 1000 180" aria-hidden="true">
          <defs>
            <linearGradient id="call-strip-gradient" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#f2aac5" /><stop offset="1" stopColor="#e98eb3" /></linearGradient>
            <clipPath id="call-message-reveal"><rect ref={callReveal} x="-60" y="-30" width="1120" height="240" /></clipPath>
            <path id="call-message-line" d="M55 102 C235 49 420 122 595 89 C748 60 842 65 945 94" />
          </defs>
          <g clipPath="url(#call-message-reveal)">
            <path className="speech-strip-outline" d="M55 102 C235 49 420 122 595 89 C748 60 842 65 945 94" />
            <path className="speech-strip speech-strip-call" d="M55 102 C235 49 420 122 595 89 C748 60 842 65 945 94" />
            <circle className="thought-dot thought-dot-call" cx="46" cy="126" r="12" />
            <circle className="thought-dot thought-dot-call" cx="23" cy="145" r="8" />
            <circle className="thought-dot thought-dot-call" cx="7" cy="158" r="4.5" />
            <text className="speech-strip-copy"><textPath href="#call-message-line" startOffset="10%" textLength="710" lengthAdjust="spacing">ACHACHAAAA…　♡　ACHACHAAAA…</textPath></text>
          </g>
        </svg>
        <svg className="wave-message wave-message-reply" viewBox="0 0 1000 180" aria-hidden="true">
          <defs>
            <linearGradient id="reply-strip-gradient" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#fff4bd" /><stop offset="1" stopColor="#f3dc8d" /></linearGradient>
            <clipPath id="reply-message-reveal"><rect ref={replyReveal} x="-60" y="-30" width="1120" height="240" /></clipPath>
            <path id="reply-message-line" d="M55 89 C220 61 360 64 500 94 C650 126 790 58 945 96" />
          </defs>
          <g clipPath="url(#reply-message-reveal)">
            <path className="speech-strip-outline" d="M55 89 C220 61 360 64 500 94 C650 126 790 58 945 96" />
            <path className="speech-strip speech-strip-reply" d="M55 89 C220 61 360 64 500 94 C650 126 790 58 945 96" />
            <circle className="thought-dot thought-dot-reply" cx="954" cy="126" r="12" />
            <circle className="thought-dot thought-dot-reply" cx="977" cy="145" r="8" />
            <circle className="thought-dot thought-dot-reply" cx="993" cy="158" r="4.5" />
            <text className="speech-strip-copy speech-strip-copy-reply speech-copy-desktop"><textPath href="#reply-message-line" startOffset="10%" textLength="710" lengthAdjust="spacing">ENTHUVAA?　✦　ENTHUVAA?　✦　ENTHUVAA?</textPath></text>
            <text className="speech-strip-copy speech-strip-copy-reply speech-copy-mobile"><textPath href="#reply-message-line" startOffset="19%">ENTHUVAA?　✦　ENTHUVAA?</textPath></text>
          </g>
        </svg>
        <p className="call-caption">One call. Two voices. A whole life quietly changing.</p>
      </div>
    </section>
  );
}
