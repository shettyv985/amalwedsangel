import Reveal from "./Reveal";

export default function LongDistance() {
  return (
    <section className="distance-section section-pad">
      <div className="stars" aria-hidden="true">✦　·　✧　·　✦</div>
      <Reveal className="distance-copy"><p className="eyebrow light">chapter two · across the miles</p><h2>A story told in<br /><em>missed time zones.</em></h2><p>Angel abroad. Amal in Kerala. And somehow, their calls kept making the distance feel smaller.</p></Reveal>
      <Reveal className="message-trail"><div className="message message-left">Reached home?</div><div className="message message-right">Enthuvaa? Still awake?</div><div className="message message-left accent">Achachaaaa…</div><div className="message message-right cream">Always.</div></Reveal>
      <div className="distance-line" aria-hidden="true"><span>✈</span></div>
    </section>
  );
}
