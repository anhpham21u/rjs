import { useSelector, useDispatch } from "react-redux";
import { showPopup, hidePopup } from "./../actions";

function Item({ dataItem }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.popupReducer);

  const num = Number(dataItem.price);

  const numberFormatter = Intl.NumberFormat("vi-VN");
  const formatted = numberFormatter.format(num);

  const handleClick = () => {
    if (data.isOpen == false) {
      dispatch(showPopup(dataItem));
    } else {
      dispatch(hidePopup(dataItem));
    }
  };

  return (
    <div style={{ width: "250px" }}>
      <img
        src={dataItem.img1}
        width="250px"
        height="280px"
        className="hov"
        onClick={handleClick}
      />
      <p className="text-center">{dataItem.name}</p>
      <p className="text1 text-center">{formatted} VND</p>
    </div>
  );
}

export default Item;
