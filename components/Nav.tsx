export default function Nav() {
  return (
    <header className="nav-shell">
      <a className="monogram" href="#top" aria-label="Angel and Amal, back to top">A <i>&amp;</i> A</a>
      <nav aria-label="Wedding invitation navigation">
        <a href="#story">Our story</a><a href="#details">The day</a>
        <a className="nav-pill" href="#details">Save the date</a>
      </nav>
    </header>
  );
}
