"use client";

import { useEffect, useState } from "react";

export default function InvitationGate() {
  const [opening, setOpening] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (hidden) return;
    window.scrollTo(0, 0);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [hidden]);

  const openInvitation = () => {
    if (opening) return;
    setOpening(true);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => setHidden(true), reduceMotion ? 80 : 1050);
  };

  if (hidden) return null;

  return (
    <div className={`invitation-gate${opening ? " is-opening" : ""}`} role="dialog" aria-modal="true" aria-label="Open Angel and Amal's wedding invitation">
      <button className="invitation-envelope" type="button" onClick={openInvitation} autoFocus>
        <span className="envelope-back" aria-hidden="true" />
        <span className="invitation-letter">
          <small>you are invited to</small>
          <span className="gate-names">Angel <i>&amp;</i> Amal</span>
          <strong>23 July</strong>
        </span>
        <span className="envelope-pocket" aria-hidden="true" />
        <span className="envelope-flap" aria-hidden="true" />
        <span className="envelope-seal" aria-hidden="true">A <i>&amp;</i> A</span>
      </button>
      <p className="gate-hint">tap the letter to open our story</p>
    </div>
  );
}
