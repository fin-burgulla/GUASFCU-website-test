import '../styles/Navbar.css';

function Navbar() {
  return (
    <header className="navbar" role="banner">
      <nav className="navbar-container" role="navigation" aria-label="Main navigation">
        <div className="navbar-brand">
          <h1>GUASFCU</h1>
        </div>
        <ul className="navbar-menu">
          <li><a href="#checkings-savings">Checkings and Savings</a></li>
          <li><a href="#credit-builder">Credit Builder</a></li>
          <li><a href="#loans">Loans</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about-us">About us</a></li>
          <li><a href="#forms">Forms</a></li>
          <li><a href="#finlit">FinLit</a></li>
        </ul>
        <div className="navbar-buttons">
          <button className="navbar-btn navbar-btn-primary" aria-label="Open an account">Open an Account</button>
          <button className="navbar-btn navbar-btn-secondary" aria-label="Click here for more information">Click Here</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
