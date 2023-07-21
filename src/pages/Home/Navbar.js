import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";

library.add(fas);

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/rjs");
  };

  return (
    <div className="container pt-5">
      <div className="flex flex--justify-between mb-10">
        <div className="flex flex--align-center">
          <Link to="/rjs" className={styles.link}>
            Home
          </Link>
          <Link to="/rjs/shop" className={styles.link}>
            Shop
          </Link>
        </div>
        <h2 className={styles.head} onClick={handleClick}>
          BOUTIQUE
        </h2>
        <div className="flex flex--align-center">
          <div className="flex">
            <FontAwesomeIcon
              icon="fa-solid fa-cart-shopping"
              style={{ color: "#aaaaaa" }}
              className="mx-5"
            />
            <p className="mx-5">Cart</p>
          </div>

          <div className="flex">
            <FontAwesomeIcon
              icon="fa-solid fa-user"
              style={{ color: "#aaaaaa" }}
              className="mx-5"
            />
            <p className="mx-5">AnhND</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
