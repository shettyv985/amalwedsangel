import Image from "next/image";
import Reveal from "./Reveal";

export default function Blessing() {
  return (
    <section className="blessing paper section-pad">
      <Reveal className="blessing-art"><Image src="/images/blessing-cutout.webp" alt="Floral Christian cross illustration" fill sizes="(max-width: 700px) 72vw, 460px" /></Reveal>
      <Reveal className="blessing-copy"><p className="eyebrow">with faith, family &amp; full hearts</p><blockquote>“Two are better than one.”</blockquote><cite>Ecclesiastes 4:9</cite><p>Come for the vows. Stay for the stories, the food, and the family chaos.</p></Reveal>
      <footer><span>A <i>&amp;</i> A</span><small>23 · 07 · FOREVER</small></footer>
    </section>
  );
}
