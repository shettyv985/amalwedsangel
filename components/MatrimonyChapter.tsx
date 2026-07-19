"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

export default function MatrimonyChapter() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="matrimony-chapter paper section-pad" id="matrimony">
      <Reveal className="matrimony-heading">
        <span>Chapter 2:</span>
        <h2>Dear <em>Matrimony</em></h2>
        <p>The Smartest Person in This Story?</p>
      </Reveal>

      <div className="matrimony-board">
        <Reveal className="matrimony-phone-wrap">
          <div className={`matrimony-phone-art${revealed ? " is-revealed" : ""}`}>
            <div className="matrimony-phone-top">
              <span aria-hidden="true">♡</span>
              <strong>Matrimony</strong>
              <i aria-hidden="true">☷</i>
            </div>
            <p className="phone-match-title">It&apos;s a Match!</p>
            <div className="phone-match-stage" aria-live="polite">
              {!revealed ? (
                <div className="phone-couple-cards">
                  <figure>
                    <Image src="/images/hero-angel-generated.png" alt="Angel profile on matrimony app" fill sizes="130px" />
                    <figcaption>Angel</figcaption>
                  </figure>
                  <span aria-hidden="true">♥</span>
                  <figure>
                    <Image src="/images/hero-amal-final.png" alt="Amal profile on matrimony app" fill sizes="130px" />
                    <figcaption>Amal</figcaption>
                  </figure>
                </div>
              ) : (
                <figure className="phone-couple-reveal">
                  <Image src="/images/matrimony-couple-reveal.png" alt="Angel and Amal sitting together after matching" fill priority unoptimized sizes="(max-width: 600px) 220px, 280px" />
                  <figcaption>Together, finally.</figcaption>
                </figure>
              )}
            </div>
            <button className="phone-match-button" type="button" onClick={() => setRevealed(true)}>
              <span aria-hidden="true">♡</span>{revealed ? "Matched!" : "Tap here"}
            </button>
          </div>
        </Reveal>

        <Reveal className="matrimony-sticky-notes">
          <p className="sticky-note sticky-note-small">Not Amal.</p>
          <p className="sticky-note sticky-note-small">Not Angel.</p>
          <p className="sticky-note sticky-note-answer">The person who invented <em>matrimony apps</em></p>
        </Reveal>
      </div>
    </section>
  );
}
