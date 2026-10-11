import styles from "./Hero.module.css";


function Hero() {
    return (

        <>
         <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowIcon}><i className="fa-solid fa-sparkles"></i></span>
            YOUR NEXT ADVENTURE
          </div>

          <h1 className={styles.title}>
            Discover the world,
            <span> one journey at a time.</span>
          </h1>

          <p className={styles.description}>
            Find hidden gems, breathtaking destinations and
            unforgettable experiences around the globe.
            Your next great adventure starts here.
          </p>

          <div className={styles.buttons}>
            <a href="#destinations" className={styles.primaryBtn}>
              Explore destinations
              <span><i className="fa-solid fa-arrow-up-right-from-square"></i></span>
            </a>

            <a href="#about" className={styles.secondaryBtn}>
              <span className={styles.playIcon}><i className="fa-solid fa-play"></i></span>
              Discover more
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3>120+</h3>
              <p>Destinations</p>
            </div>

            <div className={styles.stat}>
              <h3>50k+</h3>
              <p>Happy travelers</p>
            </div>

            <div className={styles.stat}>
              <h3>4.9/5</h3>
              <p>Traveler rating</p>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageGlow}></div>

          <img
            className={styles.heroImage}
            src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=85"
            alt="Beautiful coastal destination in Greece"
          />

          <div className={styles.imageTag}>
            <span className={styles.locationIcon}><i className="fa-solid fa-location-dot"></i></span>
            <div>
              <p>Featured destination</p>
              <h3>Santorini, Greece</h3>
            </div>
          </div>

          <div className={styles.floatingBadge}>
            <span><i className="fa-solid fa-star"></i></span>
            <div>
              <strong>Explore freely</strong>
              <p>Make every moment count</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}


export default Hero