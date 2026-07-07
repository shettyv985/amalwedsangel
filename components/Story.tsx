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
        <Reveal className="match-story">
          <p className="match-intro">a little app<br /><em>did the most 🙊</em></p>
          <div className="match-phone">
            <span className="phone-speaker" aria-hidden="true" />
            <p className="phone-brand">✦ matrimony ✦</p>
            <article className="match-profile">
              <span className="profile-avatar" aria-hidden="true">👩🏻‍⚕️</span>
              <div><strong>Angel Mary Paul</strong><small>Abroad · Radiographer</small><b>✓ it&apos;s a match!</b></div>
            </article>
            <article className="match-profile">
              <span className="profile-avatar" aria-hidden="true">👨🏽</span>
              <div><strong>Amal Kuriyakos</strong><small>Kerala · Brand content creator </small><b>✓ it&apos;s a match!</b></div>
            </article>
            <div className="match-result"><span aria-hidden="true">💌</span><strong>THEY LIKED EACH OTHER!!</strong><p>the internet really said “go ahead” 😊</p></div>
            <div className="match-chat" aria-label="Their first messages">
              <p className="chat-amal">hi Angel... 😊</p>
              <p className="chat-angel">hello Amal 😊</p>
              <p className="chat-amal">and then, everything changed</p>
            </div>
          </div>
          <p className="match-outro">and it just went from there 🌷</p>
        </Reveal>
      </div>
      <Reveal className="matrimony-line"><span>Sometimes forever begins with a simple </span><strong>"Hi."❤</strong></Reveal>
    </section>
  );
}
