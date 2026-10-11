import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footer} id="contact">
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Brand */}
            <div className={styles.brand}>
              <a href="#home" className={styles.logo}>
                WANDER<span>LY.</span>
              </a>

              <p className={styles.description}>
                Discover the world, one journey at a time. Find your next
                adventure and create unforgettable memories with us.
              </p>

              <div className={styles.socials}>
                <a href="https://instagram.com" aria-label="Instagram">
                  <i className="fa-brands fa-instagram"></i>
                </a>

                <a href="https://facebook.com" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>

                <a href="https://x.com" aria-label="X">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>

                <a href="https://linkedin.com" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div className={styles.footerColumn}>
              <h3>Quick Links</h3>

              <a href="#home">Home</a>
              <a href="#destinations">Destinations</a>
              <a href="#about">Why Choose Us</a>
              <a href="#contact">Contact</a>
            </div>

            {/* Destinations */}
            <div className={styles.footerColumn}>
              <h3>Top Destinations</h3>

              <a href="#destinations">Santorini, Greece</a>
              <a href="#destinations">Bali, Indonesia</a>
              <a href="#destinations">Swiss Alps</a>
              <a href="#destinations">Paris, France</a>
            </div>

            {/* Contact */}

            <div className={styles.footerColumn}>
              <h3>Get in Touch</h3>

              <a href="mailto:hello@wanderly.com">
                <span className={styles.contactIcon}>
                  <i className="fa-regular fa-envelope"></i>
                </span>
                hello@wanderly.com
              </a>

              <p className={styles.contactText}>
                Have a question about your next adventure? We'd love to hear
                from you.
              </p>

              <a href="#home" className={styles.contactLink}>
                Let's explore
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} Wanderly. All rights reserved.</p>

            <div className={styles.legalLinks}>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>

            <a href="#home" className={styles.backToTop}>
              Back to top
              <i className="fa-solid fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
