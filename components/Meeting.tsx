import Image from "next/image";
import Reveal from "./Reveal";

export default function Meeting() {
  return (
    <section className="meeting meeting-chapter paper">
      <div className="meeting-page">
        <Reveal className="meeting-heading">
          <span>Chapter 4:</span>
          <h2>
            Buffering Complete
          </h2>
        </Reveal>

        <Reveal className="meeting-intro">
          <em>She flew home.</em> He showed up, with flowers, butterflies, and excitement.
        </Reveal>

        <Reveal className="meeting-photo-wrap">
          <span className="meeting-tape" aria-hidden="true" />
          <figure className="meeting-photo">
            <Image
              src="/images/first-meeting.jpg"
              alt="Angel and Amal meeting at Cochin airport"
              fill
              sizes="(max-width: 800px) 82vw, 620px"
              style={{ objectPosition: "center 18%" }}
            />
          </figure>
          <span className="meeting-photo-heart" aria-hidden="true">&hearts;</span>
          <span className="meeting-butterfly" aria-hidden="true">&hearts;</span>
        </Reveal>

        <Reveal className="meeting-copy torn-note">
          <div>
            <p className="hand-label">Honestly...</p>
            <p>We still don&apos;t know what she spotted first?</p>
            <ul>
              <li>The bouquet.</li>
              <li>Or Amal from six feet above the crowd?</li>
            </ul>
          </div>
          <div className="bouquet-art" aria-hidden="true">
            <Image
              src="/images/chapter4-bouquet.png"
              alt=""
              width={320}
              height={480}
              sizes="(max-width: 600px) 130px, 210px"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
