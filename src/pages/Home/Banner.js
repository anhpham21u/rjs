import styles from "./Banner.module.scss";
import useToPage from "./useToPage.js";
import banner1 from "./../../assets/img-project/banner1.jpg";

function Banner() {
  const toPage = useToPage();

  function handleClick() {
    toPage("/shop");
  }

  return (
    <div
      className={styles.body + " container relative"}
      style={{ backgroundImage: `url(${banner1})` }}
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
