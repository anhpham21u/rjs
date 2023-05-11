function Item({ dataItem }) {
  const num = Number(dataItem.price);

  const numberFormatter = Intl.NumberFormat("vi-VN");
  const formatted = numberFormatter.format(num);

  return (
    <div style={{ width: "250px" }}>
      <img src={dataItem.img1} width="250px" height="280px" />
      <p className="text-center">{dataItem.name}</p>
      <p className="text1 text-center">{formatted} VND</p>
    </div>
  );
}

export default Item;
