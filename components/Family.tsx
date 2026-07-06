import Image from "next/image";
import Reveal from "./Reveal";

export default function Family() {
  return (
    <section className="family-section section-pad">
      <Reveal className="section-heading centered"><p className="eyebrow">chapter four · love gets a little louder</p><h2>Two families.<br /><em>One beautiful yes.</em></h2></Reveal>
      <Reveal className="couple-portrait">
        <span className="portrait-tape portrait-tape-left" aria-hidden="true" />
        <span className="portrait-tape portrait-tape-right" aria-hidden="true" />
        <figure>
          <Image src="/images/aml.jpeg" alt="Illustrated wedding portrait of Angel and Amal" fill sizes="(max-width: 700px) 76vw, 480px" />
        </figure>
        <div className="portrait-stamp"><strong>❤</strong></div>
        <span className="portrait-heart" aria-hidden="true">♡</span>
      </Reveal>
      <div className="family-cards"><Reveal className="family-card rotate-left"><span>Angel’s people</span><strong>The Paul family</strong></Reveal><span className="family-plus">+</span><Reveal className="family-card rotate-right"><span>Amal’s people</span><strong>The Kuriyakos family</strong></Reveal></div>
      <Reveal className="tribute"><figure><Image src="/images/amal-mother.jpg" alt="A treasured family photograph" fill sizes="(max-width: 700px) 65vw, 340px" /></figure><div><p className="hand-label">Amma, Always with us 💚</p><p>Love outlives every goodbye, carrying us through life's most beautiful moments.</p></div></Reveal>
    </section>
  );
}
