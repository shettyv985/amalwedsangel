import Image from "next/image";
import Reveal from "./Reveal";

export default function WeddingDetails() {
  return (
    <section className="details-section" id="details">
      <Reveal className="details-heading">
        <p className="eyebrow light">chapter five · the big launch</p>
        <h2>Launch day<br /><em>is here.</em></h2>
      </Reveal>
      <div className="details-content">
        <Reveal className="details-art details-polaroid">
          <span className="tape" aria-hidden="true" />
          <figure className="polaroid details-polaroid-figure">
            <Image src="/images/aml.jpeg" alt="Angel and Amal together" fill sizes="(max-width: 800px) 82vw, 430px" />
          </figure>
          <span className="details-photo-note">wedding invitation ♡</span>
        </Reveal>
        <Reveal className="details-card"><p className="hand-label">After months of planning…</p><div className="date-display"><strong>23</strong><span>JULY</span></div><div className="detail-row"><span>Where</span><strong>Parish of St Sebastian<br />Knanaya Church, Peroor</strong></div><div className="detail-row"><span>When</span><strong>23rd July · Kerala</strong></div><p className="pending-note">Audience attendance is mandatory.</p></Reveal>
      </div>
    </section>
  );
}
