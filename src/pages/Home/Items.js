import Item from "./Item";
import { useSelector } from "react-redux";
import Popup from "./Popup";

function Items({ data }) {
  const dataPopup = useSelector((state) => state.popupReducer);
  console.log(dataPopup.product);

  return (
    <div className="container">
      <p className="text1">MADE THE HARD WAY</p>
      <h2 className="text2 mb-30">TOP TRANDING PRODUCTS</h2>
      {data.length > 0 && (
        <div
          className="flex flex--wrap flex--justify-center mb-50"
          style={{ gap: "30px" }}
        >
          {data.map((data, idx) => (
            <Item dataItem={data} key={idx} />
          ))}
        </div>
      )}
      {dataPopup.isOpen === true && <Popup data={dataPopup.product} />}
    </div>
  );
}

export default Items;
