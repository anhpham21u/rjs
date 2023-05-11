import styles from "./Banner.module.scss";
import useToPage from "./useToPage.js";

function Banner() {
  const toPage = useToPage();

  function handleClick() {
    toPage("/shop");
  }

  return (
    <div
      className={styles.body + " container relative"}
      style={{ backgroundImage: `url(./img-project/banner1.jpg)` }}
    >
      <div className={styles.child + " absolute"}>
        <p className="text1 mb-5">NEW INSPIRATION</p>
        <h1 className="text2 mb-20">20% OF ON NEW SEASON</h1>
        <button href="" className="btn" onClick={handleClick}>
          Browse Collection
        </button>
      </div>
    </div>
  );
}

export default Banner;
