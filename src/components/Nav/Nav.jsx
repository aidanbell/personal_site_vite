import './Nav.css';

export default function Nav() {
  return (
    <nav id="navbar" className="navbar fixed-top navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        /ab/
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            <span>About Me</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">
            <span>Projects</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}