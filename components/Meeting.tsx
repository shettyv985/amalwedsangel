import Image from "next/image";
import Reveal from "./Reveal";

export default function Meeting() {
  return (
    <section className="meeting paper section-pad">
      <Reveal className="section-heading centered"><p className="eyebrow">chapter four · buffering complete</p><h2>Buffering complete.<br /><em>She flew home.</em></h2></Reveal>
      <div className="meeting-layout">
        <Reveal className="meeting-photo-wrap"><span className="meeting-tape" aria-hidden="true" /><figure className="meeting-photo"><Image src="/images/first-meeting.jpg" alt="Angel and Amal meeting at Cochin airport" fill sizes="(max-width: 800px) 86vw, 640px" style={{ objectPosition: "center 18%" }} /></figure><span className="photo-caption">flowers, butterflies, and excitement</span></Reveal>
        <Reveal className="meeting-copy torn-note"><p className="hand-label">Honestly…</p><p>He showed up with flowers, butterflies, and excitement. We still don&apos;t know what she spotted first: the bouquet, or Amal from six feet above the crowd?</p></Reveal>
      </div>
    </section>
  );
}
