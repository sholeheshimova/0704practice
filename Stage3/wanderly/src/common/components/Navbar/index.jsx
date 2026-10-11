import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <header className={styles.navbar}>
        <a href="#home" className={styles.logo}>
          WANDER<span>LY.</span>
        </a>

        <nav className={styles.navLinks}>
          <a href="#home" className={styles.active}>
            Home
          </a>
          <a href="#tour">Our Tour</a>
          <a href="#whyus">Why Us?</a>
          <a href="#contact">About us</a>
        </nav>

        <div className={styles.actions}>
          <a href="#signin" className={styles.signIn}>
            Sign In
          </a>

          <a href="#explore" className={styles.exploreBtn}>
            Explore Now
             <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </header>
    </>
  );
}

export default Navbar
