import Image from "next/image";

function Tape({ className = "" }: { className?: string }) {
  return <span className={`tape ${className}`} aria-hidden="true" />;
}

export default function Hero() {
  return (
    <section className="hero paper" id="top">
      <div className="hero-scribble hero-scribble-one" aria-hidden="true">♡</div>
      <div className="hero-scribble hero-scribble-two" aria-hidden="true">✦</div>
      <div className="hero-person hero-angel">
        <div className="polaroid childhood-photo"><Tape className="tape-hero" /><Image src="/images/angel-childhood.jpg" alt="Angel as a child" fill priority sizes="(max-width: 700px) 29vw, 190px" /><span>little Angel</span></div>
        <div className="story-tag tag-angel"><strong>muvaaaaatoooozhakari</strong><small>living her life abroad</small></div>
      </div>
      <div className="hero-copy">
        <p className="eyebrow">a long-distance love story</p>
        <h1><span>Angel</span><b>&amp;</b><span>Amal</span></h1>
        <div className="hero-date"><strong>23RD JULY</strong></div>
        <a className="scroll-cue" href="#call-response">scroll into our story <i>↓</i></a>
      </div>
      <div className="hero-person hero-amal">
        <div className="polaroid childhood-photo"><Tape className="tape-right tape-hero" /><Image src="/images/amal-childhood.jpg" alt="Amal as a child" fill priority sizes="(max-width: 700px) 29vw, 190px" /><span>little Amal</span></div>
        <div className="story-tag tag-amal"><strong>kottayathulla chekkan</strong></div>
      </div>
    </section>
  );
}
