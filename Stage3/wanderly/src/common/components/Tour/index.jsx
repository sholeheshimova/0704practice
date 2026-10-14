import styles from "./Tour.module.css";
import Button from "../Button";
import Card from "../Card";

const tours = [
  {
    id: 1,
    country: "GREECE",
    title: "Santorini Escape",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=85",
    rating: "4.9",
    reviews: 128,
    duration: "5 days",
    price: 650,
    tag: "POPULAR",
  },
  {
    id: 2,
    country: "INDONESIA",
    title: "Bali Adventure",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=85",
    rating: "4.8",
    reviews: 96,
    duration: "7 days",
    price: 890,
    tag: "ADVENTURE",
  },
  {
    id: 3,
    country: "SWITZERLAND",
    title: "Alpine Serenity",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=85",
    rating: "5.0",
    reviews: 74,
    duration: "6 days",
    price: 1200,
    tag: "NATURE",
  },
];

function Tour() {
  return (
    <>
      <section className={styles.tour} id="tour">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.eyebrow}>EXPLORE OUR TOURS</span>

              <h2 className={styles.title}>
                Popular <span>destinations</span>
              </h2>

              <p className={styles.subtitle}>
                Discover extraordinary places and create unforgettable memories
                around the world.
              </p>
            </div>

            <a href="#all-tours" className={styles.viewAll}>
              View all{" "}
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>

          
<div className={styles.tourGrid}>
  {tours.map((tour) => (
    <Card
      key={tour.id}
      country={tour.country}
      title={tour.title}
      image={tour.image}
      rating={tour.rating}
      reviews={tour.reviews}
      duration={tour.duration}
      price={tour.price}
      tag={tour.tag}
    />
  ))}
</div>

        </div>
      </section>
    </>
  );
}

export default Tour;
