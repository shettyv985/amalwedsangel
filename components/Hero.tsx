import Image from "next/image";

function Tape({ className = "" }: { className?: string }) {
  return <span className={`tape ${className}`} aria-hidden="true" />;
}

export default function Hero() {
  return (
    <section className="hero paper" id="top">
      <div className="hero-person hero-angel">
        <div className="polaroid hero-polaroid hero-polaroid-angel">
          <Tape className="tape-hero" />
          <Image src="/images/hero-angel-generated.png" alt="Angel in her wedding portrait" fill priority sizes="(max-width: 700px) 38vw, 230px" />
          <span>Angel</span>
        </div>
      </div>
      <div className="hero-copy">
        <h1><span>Angel</span><b>&amp;</b><span>Amal</span></h1>
        <p className="hero-subline">Started with a swipe. Ended with forever.</p>
        <span className="hero-underline" aria-hidden="true" />
        <a className="scroll-cue" href="#call-response">scroll into our story <i>↓</i></a>
      </div>
      <div className="hero-person hero-amal">
        <div className="polaroid hero-polaroid hero-polaroid-amal">
          <Tape className="tape-right tape-hero" />
          <Image src="/images/hero-amal-final.png" alt="Amal in his wedding portrait" fill priority sizes="(max-width: 700px) 38vw, 230px" />
          <span>Amal</span>
        </div>
      </div>
    </section>
  );
}
