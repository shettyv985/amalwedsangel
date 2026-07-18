import Reveal from "./Reveal";

export default function LongDistance() {
  return (
    <section className="distance-section section-pad">
      <div className="stars" aria-hidden="true">✦　·　✧　·　✦</div>
      <Reveal className="distance-copy"><p className="eyebrow light">chapter three · poor network, strong connection</p><h2>Poor network.<br /><em>Strong connection.</em></h2><p>The Internet gave up, but Amal and Angel didn&apos;t. Somehow, the calls kept making the distance feel smaller.</p></Reveal>
      <Reveal className="message-trail"><div className="message message-left">Network: barely surviving</div><div className="message message-right">Calls: still going</div><div className="message message-left accent">Ichaaaa…</div><div className="message message-right cream">Estimated telecom profits: 📈</div></Reveal>
      <div className="distance-line" aria-hidden="true"><span>✈</span></div>
    </section>
  );
}
