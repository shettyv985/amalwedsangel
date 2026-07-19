import Image from "next/image";
import Reveal from "./Reveal";

export default function Family() {
  return (
    <section className="family-section amma-tribute">
      <div className="amma-page">
        <Reveal className="amma-heading">
          <h2>
            The One Who
            <br />
            <em>Never Really Left</em>
          </h2>
        </Reveal>

        <Reveal className="amma-memory">
          <p>Some guests arrived with an invitation.</p>
          <p>One arrived through memories.</p>
          <p>She never got to witness this day, but she&apos;ll always be part of it.</p>
        </Reveal>

        <Reveal className="amma-photo-wrap">
          <span className="amma-tape" aria-hidden="true" />
          <figure className="amma-photo">
            <Image
              src="/images/amal-mother.jpg"
              alt="Amal's mother"
              fill
              sizes="(max-width: 700px) 78vw, 430px"
            />
          </figure>
          <span className="amma-photo-heart" aria-hidden="true">&hearts;</span>
          <span className="amma-flower-left" aria-hidden="true" />
          <span className="amma-flower-right" aria-hidden="true" />
        </Reveal>

        <Reveal className="amma-note">
          <p className="hand-label">Amma, Always with us <span aria-hidden="true">&#128154;</span></p>
          <p>Love outlives every goodbye, carrying us through life&apos;s most beautiful moments.</p>
        </Reveal>
      </div>
    </section>
  );
}
