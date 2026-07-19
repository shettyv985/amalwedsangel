import Image from "next/image";
import Reveal from "./Reveal";

const amalFacts = [
  ["pin", "Kottayam."],
  ["bag", "Brand Content Creator."],
  ["pen", "Professionally writes brand stories."],
  ["spark", "Accidentally wrote the best one with his own life."],
];

const angelFacts = [
  ["pin", "Muvattupuzha-born."],
  ["kit", "Radiographer in Oman."],
  ["glass", "Spots fractures for a living."],
  ["spark", "Didn't spot what was coming next."],
];

export default function Story() {
  return (
    <section className="story cast-chapter paper section-pad" id="story">
      <Reveal className="cast-heading">
        <span>Chapter 1:</span>
        <h2>Meet the Cast.</h2>
      </Reveal>

      <div className="cast-board">
        <Reveal className="cast-row cast-row-amal">
          <figure className="cast-polaroid cast-polaroid-amal">
            <span className="cast-tape" aria-hidden="true" />
            <Image src="/images/amal-childhood.jpg" alt="Amal during childhood" fill sizes="(max-width: 700px) 78vw, 390px" />
            <figcaption aria-hidden="true">♡</figcaption>
          </figure>
          <div className="cast-copy">
            <h3>Amal.</h3>
            <ul>
              {amalFacts.map(([icon, text]) => <li key={text}><i data-icon={icon} aria-hidden="true" />{text}</li>)}
            </ul>
          </div>
        </Reveal>

        <Reveal className="cast-row cast-row-angel">
          <div className="cast-copy">
            <h3>Angel.</h3>
            <ul>
              {angelFacts.map(([icon, text]) => <li key={text}><i data-icon={icon} aria-hidden="true" />{text}</li>)}
            </ul>
          </div>
          <figure className="cast-polaroid cast-polaroid-angel">
            <span className="cast-tape" aria-hidden="true" />
            <Image src="/images/angel-childhood.jpg" alt="Angel during childhood" fill sizes="(max-width: 700px) 78vw, 390px" />
            <figcaption aria-hidden="true">♡</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
