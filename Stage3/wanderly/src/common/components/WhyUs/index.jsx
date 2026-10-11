import styles from "./WhyUs.module.css";

const benefits = [
  {
    id: 1,
    icon: "fa-solid fa-star",
    title: "Handpicked Destinations",
    description:
      "Discover extraordinary places carefully selected for unforgettable experiences.",
  },
  {
    id: 2,
    icon: "fa-solid fa-gem",
    title: "Best Value for Money",
    description:
      "Explore amazing destinations with flexible options for different budgets.",
  },
  {
    id: 3,
    icon: "fa-solid fa-compass",
    title: "Easy Trip Planning",
    description:
      "Find your next adventure with a simple and convenient travel experience.",
  },
  {
    id: 4,
    icon: "fa-solid fa-heart",
    title: "Personalized Support",
    description:
      "Make your journey smoother with helpful guidance along the way.",
  },
];

function WhyUs() {
  return (
    <>
      <section className={styles.whyUs} id="whyus">
        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.eyebrow}>WHY CHOOSE WANDERLY</span>

            <h2 className={styles.title}>
              Travel better.
              <span> Experience more.</span>
            </h2>

            <p className={styles.subtitle}>
              Travel isn't just about where you go. It's about the memories you
              make, the people you meet and the experiences that stay with you
              forever.
            </p>

            <div className={styles.benefits}>
              {benefits.map((benefit) => (
                <article className={styles.benefit} key={benefit.id}>
                  <div className={styles.iconBox}><i className={benefit.icon}></i></div>

                  <div className={styles.benefitContent}>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <a href="#destinations" className={styles.cta}>
              Start exploring
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>

          <div className={styles.visual}>
            <div className={styles.glow}></div>

            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=85"
              alt="Majestic mountain landscape"
              className={styles.mainImage}
              loading="lazy"
            />

            <div className={styles.imageLabel}>
              <span className={styles.labelIcon}>
                <i className="fa-solid fa-star"></i>
              </span>
              <div>
                <p>YOUR NEXT CHAPTER</p>
                <h3>Made for explorers</h3>
              </div>
            </div>

            <div className={styles.floatingCard}>
              <div className={styles.floatingIcon}>
                <i className="fa-regular fa-heart"></i>
              </div>
              <div>
                <h3>Travel your way</h3>
                <p>Every journey has a story.</p>
              </div>
            </div>

            <div className={styles.decorCircle}></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyUs;
