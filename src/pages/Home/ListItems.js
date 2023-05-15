import { useState, useEffect } from "react";
import Items from "./Items";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { popupReducer } from "../reducers";

function ListItems() {
  const [data, setData] = useState([]);
  // redux state for popup
  const store = createStore(
    combineReducers({
      popupReducer,
    })
  );

  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  // const dataStore = store.getState().popupReducer;
  // console.log(dataStore);

  return (
    <Provider store={store}>
      <Items data={data} />
    </Provider>
  );
}

export default ListItems;
