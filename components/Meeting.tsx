import Image from "next/image";
import Reveal from "./Reveal";

export default function Meeting() {
  return (
    <section className="meeting paper section-pad">
      <Reveal className="section-heading centered"><p className="eyebrow">chapter three · finally, the hello</p><h2>One airport.<br /><em>A bunch of white roses.</em></h2></Reveal>
      <div className="meeting-layout">
        <Reveal className="meeting-photo-wrap"><span className="meeting-tape" aria-hidden="true" /><figure className="meeting-photo"><Image src="/images/first-meeting.jpg" alt="Angel and Amal meeting at Cochin airport" fill sizes="(max-width: 800px) 86vw, 640px" style={{ objectPosition: "center 18%" }} /></figure><span className="photo-caption">Cochin airport · where the screen became real</span></Reveal>
        <Reveal className="meeting-copy torn-note"><p className="hand-label">Their first meeting</p><p>There he was, waiting with white roses and the kind of smile that makes an arrival feel like coming home.</p></Reveal>
      </div>
    </section>
  );
}
