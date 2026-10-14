import Button from "../Button"
import styles from "./Card.module.css"



function Card(props) {
    return  (
        <>
            
              <article className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img
                    src={props.image}
                    alt={props.title}
                    className={styles.tourImage}
                    loading="lazy"
                  />

                  <span className={styles.tag}>{props.tag}</span>

                  <button
                    type="button"
                    className={styles.favorite}
                    aria-label={`Save ${props.title} to favorites`}
                  >
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </div>

                <div className={styles.cardContent}>
                  <p className={styles.country}>
                    <span>
                      <i className="fa-solid fa-location-dot"></i>
                    </span>
                    {props.country}
                  </p>

                  <h3 className={styles.cardTitle}>{props.title}</h3>

                  <div className={styles.rating}>
                    <span>
                      <i className="fa-solid fa-star"></i>
                    </span>
                    {props.rating}
                    <span className={styles.reviews}>
                      ({props.reviews} reviews)
                    </span>
                  </div>

                  <div className={styles.cardFooter}>
                    <div>
                      <p className={styles.duration}>{props.duration} trip</p>
                      <p className={styles.price}>
                        ${props.price}
                        <span> / person</span>
                      </p>
                    </div>

                    <Button />
                  </div>
                </div>
              </article>
          
        </>
    )
}


export default Card