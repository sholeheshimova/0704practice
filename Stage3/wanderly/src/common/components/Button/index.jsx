import styles from "./Button.module.css";

function Button() {
  return (
    <>
      <a href="#all-tours" className={styles.detailsBtn}>
        Details
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </>
  );
}

export default Button;
