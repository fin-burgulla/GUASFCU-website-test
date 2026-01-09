import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" aria-label="Hero banner">
      <div className="hero-content">
        <img src="/FILES/DIGITAL-GUASFCU-LOGO.png" alt="GUASFCU Logo" className="hero-logo" />
        <h1 className="hero-title">Hoyas Bank Here.</h1>
        <p className="hero-subtitle">Banking for Georgetown Students, by Georgetown Students. Since 1983.</p>
        <p className="hero-cta-subtitle">Current students, open a High Yield Savings Account today!</p>
        <div className="hero-actions">
          <button className="btn btn-primary" aria-label="Open an account">Open an Account</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
