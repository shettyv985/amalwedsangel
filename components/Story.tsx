import Image from "next/image";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section className="story paper section-pad" id="story">
      <Reveal className="section-heading"><p className="eyebrow">chapter one · before the hello</p><h2>Two lives.<br /><em>One tiny notification.</em></h2></Reveal>
      <div className="story-grid">
        <Reveal className="photo-stack">
          <figure className="stack-card stack-angel"><Image src="/images/angel-childhood.jpg" alt="Angel during childhood" fill sizes="(max-width: 700px) 72vw, 390px" /><figcaption>main character energy</figcaption></figure>
          <figure className="stack-card stack-amal"><Image src="/images/amal-childhood.jpg" alt="Amal during childhood" fill sizes="(max-width: 700px) 72vw, 390px" /><figcaption>the plot twist</figcaption></figure><span className="stack-tape" aria-hidden="true" />
        </Reveal>
        <Reveal className="torn-note story-note"><p className="hand-label">PreCap</p><p>Angel was abroad, caring for people as a radiographer. Amal was in Kerala, telling stories as a brand content creator. They had never crossed paths, until one little notification brought two hearts into the same story.</p><span className="note-doodle" aria-hidden="true">♡</span></Reveal>
      </div>
      <Reveal className="matrimony-line"><span>Sometimes forever begins with a simple </span><strong>"Hi."❤</strong></Reveal>
    </section>
  );
}
