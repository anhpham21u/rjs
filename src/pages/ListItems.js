import { useState, useEffect } from "react";
import Item from "./Item";

function ListItems() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

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
    </div>
  );
}

export default ListItems;
