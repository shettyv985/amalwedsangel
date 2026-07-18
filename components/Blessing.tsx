import Image from "next/image";
import Reveal from "./Reveal";

export default function Blessing() {
  return (
    <section className="blessing paper section-pad">
      <Reveal className="blessing-art">
        <Image src="/images/olive-wreath.png" alt="Hand-painted olive branch wreath" fill sizes="(max-width: 700px) 82vw, 520px" />
        <div className="wreath-center" aria-hidden="true"><span>♡</span><strong>A &amp; A</strong><small>23 · 07</small></div>
      </Reveal>
      <Reveal className="blessing-copy"><p className="eyebrow">with faith, family &amp; full hearts</p><blockquote>“Two are better than one.”</blockquote><cite>Ecclesiastes 4:9</cite><p>Come for the vows. Stay for the stories, the food, and the official launch of Amal and Angel&apos;s forever.</p></Reveal>
      <footer><span>A <i>&amp;</i> A</span><small>23 · 07 · FOREVER</small></footer>
    </section>
  );
}
