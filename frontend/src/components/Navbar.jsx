export default function Navbar() {
  return (
    <nav>
      <div className="container nav-container">
        <div className="logo">
          <div className="logo-icon">C</div>
          <span>ProjectX</span>
        </div>

        <div className="nav-links">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#team">Team</a></li>
            <li>
              <a href="#get-started" className="btn btn-primary">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}