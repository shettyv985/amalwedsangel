import Image from "next/image";
import Reveal from "./Reveal";

const mapUrl = "https://maps.app.goo.gl/rkCQWpyouM35MA939";

export default function WeddingDetails() {
  return (
    <section className="details-section launch-chapter" id="details">
      <div className="launch-page">
        <Reveal className="launch-heading">
          <span>Chapter 5:</span>
          <h2>
            The Big <em>Launch</em>
          </h2>
        </Reveal>

        <div className="launch-top">
          <Reveal className="launch-photo-wrap">
            <span className="launch-tape" aria-hidden="true" />
            <figure className="launch-photo">
              <Image
                src="/images/aml.jpeg"
                alt="Angel and Amal together"
                fill
                sizes="(max-width: 800px) 82vw, 480px"
              />
            </figure>
            <span className="launch-photo-heart" aria-hidden="true">
              &hearts;
            </span>
          </Reveal>

          <Reveal className="launch-plan-note">
            <span className="launch-note-tape" aria-hidden="true" />
            <ul>
              <li>After months of planning..</li>
              <li>Launch day is here</li>
              <li>Audience attendance is mandatory.</li>
            </ul>
            <span className="launch-note-heart" aria-hidden="true">
              &hearts;
            </span>
          </Reveal>
        </div>

        <Reveal className="launch-invitation">
          <span className="launch-card-tape launch-card-tape-left" aria-hidden="true" />
          <span className="launch-card-tape launch-card-tape-right" aria-hidden="true" />
          <span className="launch-label">wedding invitation</span>
          <div className="launch-invitation-inner">
            <p className="launch-script">Angel &amp; Amal</p>
            <div className="date-display">
              <strong>23</strong>
              <span>JULY</span>
            </div>
            <div className="detail-row">
              <span>Where</span>
              <strong>
                Parish of St Sebastian
                <br />
                Knanaya Church, Peroor
              </strong>
            </div>
            <div className="detail-row">
              <span>When</span>
              <strong>23rd July &middot; Kerala</strong>
            </div>
            <div className="launch-map">
              <a href={mapUrl} target="_blank" rel="noreferrer">
                <span>Open venue in Google Maps</span>
                <small>{mapUrl}</small>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
