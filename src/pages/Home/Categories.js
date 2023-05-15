import useToPage from "./useToPage";

function Categories() {
  const toPage = useToPage();

  function handleClick() {
    toPage("/shop");
  }

  return (
    <div className="container mb-50">
      <div style={{ textAlign: "center" }} className="p-30">
        <p className="text1">CAREFULLY CREATED COLLECTIONS</p>
        <h2 className="text2">BROWSE OUR CATEGORIES</h2>
      </div>

      <div className="flex flex--justify-between mb-20">
        <img
          src="img-project/product_1.png"
          width="49%"
          className="hov"
          onClick={handleClick}
        />
        <img
          src="img-project/product_2.png"
          width="49%"
          className="hov"
          onClick={handleClick}
        />
      </div>
      <div className="flex flex--justify-between">
        <img
          src="img-project/product_3.png"
          width="32%"
          className="hov"
          onClick={handleClick}
        />
        <img
          src="img-project/product_4.png"
          width="32%"
          className="hov"
          onClick={handleClick}
        />
        <img
          src="img-project/product_5.png"
          width="32%"
          className="hov"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Categories;
