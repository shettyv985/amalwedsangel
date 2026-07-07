import Image from "next/image";
import Reveal from "./Reveal";

export default function Family() {
  return (
    <section className="family-section section-pad">
      <Reveal className="tribute"><figure><Image src="/images/amal-mother.jpg" alt="A treasured family photograph" fill sizes="(max-width: 700px) 65vw, 340px" /></figure><div><p className="hand-label">Amma, Always with us 💚</p><p>Love outlives every goodbye, carrying us through life's most beautiful moments.</p></div></Reveal>
    </section>
  );
}
