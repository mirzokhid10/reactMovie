export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper header__nav">
        <a href="index.html" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/public/index.html">Movie</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
