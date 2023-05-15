import { createPortal } from "react-dom";
import styles from "./Popup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

let popupRoot = document.getElementById("popup-root");
library.add(fas);

if (!popupRoot) {
  const popupDiv = document.createElement("div");
  popupDiv.id = "popup-root";
  document.body.appendChild(popupDiv);
  popupRoot = popupDiv;
}

function Popup({ data }) {
  const price = Number(data.price);
  const numberFormatter = Intl.NumberFormat("vi-VN");
  const priceFormatted = numberFormatter.format(price);

  return createPortal(
    <div className={styles.popup + " fixed"}>
      <div className={"relative " + styles.parent}>
        <div
          className={
            styles.main +
            " absolute p-30 flex flex--justify-between flex--align-center"
          }
        >
          <img src={data.img1} className={styles.img} />
          <div>
            <h2 className="text2 mb-10" style={{ textTransform: "uppercase" }}>
              {data.name}
            </h2>

            <p className="text1 mb-20" style={{ fontSize: "18px" }}>
              {priceFormatted} VND
            </p>
            <p className={"text1 mb-20 " + styles.short_desc}>
              {data.short_desc}
            </p>

            <button className="btn">
              <FontAwesomeIcon
                icon="fa-solid fa-cart-shopping"
                style={{ color: "#ffffff", margin: "0px 5px" }}
              />
              View Detail
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>,
    popupRoot
  );
}

export default Popup;
