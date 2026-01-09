import '../styles/MainContent.css';

function MainContent() {
  return (
    <main className="main-content">
      <section className="features">
        <div className="container">
          <article className="feature-card-primary">
            <img src="/FILES/DSCF0783.jpg" alt="Credit Builder Program" className="feature-image" />
            <h2 className="feature-card-title">CREDIT BUILDER</h2>
            <p className="feature-card-description">
              Build your credit history and establish financial credibility with our Credit Builder program designed specifically for students.
            </p>
            <button className="feature-btn">Learn more</button>
          </article>
        </div>
      </section>

      <section className="features features-alt">
        <div className="container">
          <article className="feature-card-primary">
            <div className="feature-image-grid">
              <img src="/FILES/DIGITAL-MAIN.png" alt="Digital Banking Interface" className="feature-image" />
              <img src="/FILES/DIGITAL-APPLE-PAY-OPTIONS.png" alt="Apple Pay Options" className="feature-image" />
              <img src="/FILES/DIGITAL-BALANCE.png" alt="Account Balance" className="feature-image" />
            </div>
            <h2 className="feature-card-title">DIGITAL WALLET</h2>
            <p className="feature-card-description">
              Experience seamless digital banking with our secure mobile wallet. Send money, pay bills, and manage your finances on the go.
            </p>
            <button className="feature-btn">LEARN MORE</button>
          </article>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="container">
          <h2 className="services-grid-title">MORE SERVICES</h2>
          <div className="services-grid">
            <article className="service-card">
              <img src="/FILES/interns-picture.jpg" alt="Student Loans" className="service-card-image" />
              <h3 className="service-card-title">Auto, Personal & Student Loans</h3>
              <button className="service-btn">LEARN MORE</button>
            </article>
            <article className="service-card">
              <img src="/FILES/customer-service-oic.jpg" alt="Customer Service" className="service-card-image" />
              <h3 className="service-card-title">Live Member Service</h3>
              <button className="service-btn">LEARN MORE</button>
            </article>
            <article className="service-card">
              <img src="/FILES/DSCF0783.jpg" alt="House & Club Accounts" className="service-card-image" />
              <h3 className="service-card-title">House & Club Accounts</h3>
              <button className="service-btn">LEARN MORE</button>
            </article>
          </div>
        </div>
      </section>

      <section className="loans-section">
        <div className="container">
          <h2 className="loans-title">LOANS</h2>
          <ul className="loans-list">
            <li className="loan-item">Personal Loans</li>
            <li className="loan-item">Car Loans</li>
            <li className="loan-item">Education Loans</li>
            <li className="loan-item">Internship Loans</li>
          </ul>
          <div className="loans-cta">
            <button className="loans-btn">Apply for a loan</button>
          </div>
        </div>
      </section>

      <section className="mobile-app-section">
        <div className="container">
          <div className="mobile-app-content">
            <div className="mobile-app-text">
              <h2 className="mobile-app-title">MOBILE APP</h2>
              <p className="mobile-app-description">
                Download our mobile banking app for convenient access to your accounts anytime, anywhere.
              </p>
              <div className="app-download-buttons">
                <a href="#app-store" className="app-download-btn app-store-btn">
                  <span className="app-store-icon">🍎</span>
                  <div className="app-btn-text">
                    <span className="app-btn-label">Download on the</span>
                    <span className="app-btn-store">App Store</span>
                  </div>
                </a>
                <a href="#google-play" className="app-download-btn google-play-btn">
                  <span className="google-play-icon">📱</span>
                  <div className="app-btn-text">
                    <span className="app-btn-label">Get it on</span>
                    <span className="app-btn-store">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="mobile-app-image">
              <img src="/FILES/DIGITAL-PHONE.png" alt="Mobile Banking App" className="phone-mockup" />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="testimonials-title">DON'T JUST TAKE IT FROM US HEAR WHAT OUR MEMBERS HAVE TO SAY</h2>
          <div className="testimonials-grid">
            <article className="testimonial-card">
              <p className="testimonial-text">"Placeholder testimonial text from a satisfied member."</p>
              <div className="testimonial-author">
                <p className="author-name">Member Name</p>
                <p className="author-title">Class of 20XX</p>
              </div>
            </article>
            <article className="testimonial-card">
              <p className="testimonial-text">"Placeholder testimonial text from a satisfied member."</p>
              <div className="testimonial-author">
                <p className="author-name">Member Name</p>
                <p className="author-title">Class of 20XX</p>
              </div>
            </article>
            <article className="testimonial-card">
              <p className="testimonial-text">"Placeholder testimonial text from a satisfied member."</p>
              <div className="testimonial-author">
                <p className="author-name">Member Name</p>
                <p className="author-title">Class of 20XX</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                We are committed to providing exceptional financial services to our members. 
                With decades of experience, we understand the importance of trust, security, 
                and personalized service.
              </p>
              <p>
                Our mission is to empower our community through accessible and innovative 
                financial solutions that help you achieve your goals.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>10,000+</h3>
                <p>Happy Members</p>
              </div>
              <div className="stat">
                <h3>25+</h3>
                <p>Years of Service</p>
              </div>
              <div className="stat">
                <h3>$500M+</h3>
                <p>Assets Managed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-cta-section">
        <div className="container">
          <h2 className="closing-cta-title">Hoyas Bank Here.</h2>
          <button className="closing-cta-btn">Open an Account</button>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
