import Image from "next/image";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section className="story paper section-pad" id="story">
      <Reveal className="section-heading"><p className="eyebrow">chapter one · meet the cast</p><h2>Meet the cast.<br /><em>Before the app.</em></h2></Reveal>
      <div className="story-grid">
        <Reveal className="photo-stack">
          <figure className="stack-card stack-angel"><Image src="/images/angel-childhood.jpg" alt="Angel during childhood" fill sizes="(max-width: 700px) 72vw, 390px" /><figcaption>main character energy</figcaption></figure>
          <figure className="stack-card stack-amal"><Image src="/images/amal-childhood.jpg" alt="Amal during childhood" fill sizes="(max-width: 700px) 72vw, 390px" /><figcaption>the plot twist</figcaption></figure><span className="stack-tape" aria-hidden="true" />
        </Reveal>
        <Reveal className="match-story">
          <p className="match-intro">then a little app<br /><em>did the most</em></p>
          <div className="match-phone">
            <span className="phone-speaker" aria-hidden="true" />
            <p className="phone-brand">✦ matrimony ✦</p>
            <article className="match-profile">
              <span className="profile-avatar" aria-hidden="true">👨🏽</span>
              <div><strong>Amal Kuriyakos</strong><small>Kottayam · Brand Content Creator<br />Professionally writes brand stories.</small><b>Accidentally wrote the best one with his own life.</b></div>
            </article>
            <article className="match-profile">
              <span className="profile-avatar" aria-hidden="true">👩🏻‍⚕️</span>
              <div><strong>Angel Mary Paul</strong><small>Muvattupuzha-born · Radiographer in Oman<br />Spots fractures for a living.</small><b>Didn&apos;t spot what was coming next.</b></div>
            </article>
            <div className="match-result"><span aria-hidden="true">💌</span><strong>They matched on the app.</strong><p>Thankfully, they matched in real life too.</p></div>
            <div className="match-chat" aria-label="Their first messages">
              <p className="chat-angel">Angel: Ichaaaa</p>
              <p className="chat-amal">Amal: Kocheeee</p>
              <p className="chat-angel">Orotta hi mathi jeevitham maari mariyaan.</p>
            </div>
          </div>
          <p className="match-outro">one hi, full life plot twist</p>
        </Reveal>
      </div>
      <Reveal className="matrimony-line"><span>chapter two · Dear Matrimony</span><strong>The smartest person in this story?</strong><em>Not Amal. Not Angel. The person who invented matrimony apps.</em></Reveal>
    </section>
  );
}
