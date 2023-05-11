import styles from "./Banner.module.scss";

function Banner() {
  return (
    <div
      className={styles.body + " container relative"}
      style={{ backgroundImage: `url(./img-project/banner1.jpg)` }}
    >
      <div className={styles.child + " absolute"}>
        <p className={styles.ad + " mb-5"}>NEW INSPIRATION</p>
        <h1 className={styles.head + " mb-20"}>20% OF ON NEW SEASON</h1>
        <a href="#" className="btn">
          Browse Collection
        </a>
      </div>
    </div>
  );
}

export default Banner;
