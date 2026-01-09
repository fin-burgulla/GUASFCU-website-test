import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>GUASFCU</h3>
            <p>Your trusted financial partner since 2001</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#savings">Savings</a></li>
              <li><a href="#loans">Loans</a></li>
              <li><a href="#credit">Credit Cards</a></li>
              <li><a href="#invest">Investments</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📞 (555) 123-4567</li>
              <li>✉️ info@guasfcu.com</li>
              <li>📍 123 Financial St, City, ST 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Georgetown University Alumni & Student Federal Credit Union. All rights reserved.</p>
          <p>Federally insured by NCUA. Equal Housing Lender.</p>
          <p>Routing #0540-8021-2</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
