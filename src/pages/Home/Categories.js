import useToPage from "./useToPage";
import product_1 from "./../../assets/img-project/product_1.png";
import product_2 from "./../../assets/img-project/product_2.png";
import product_3 from "./../../assets/img-project/product_3.png";
import product_4 from "./../../assets/img-project/product_4.png";
import product_5 from "./../../assets/img-project/product_5.png";

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
          src={product_1}
          width="49%"
          className="hov"
          onClick={handleClick}
        />
        <img
          src={product_2}
          width="49%"
          className="hov"
          onClick={handleClick}
        />
      </div>
      <div className="flex flex--justify-between">
        <img
          src={product_3}
          width="32%"
          className="hov"
          onClick={handleClick}
        />
        <img
          src={product_4}
          width="32%"
          className="hov"
          onClick={handleClick}
        />
        <img
          src={product_5}
          width="32%"
          className="hov"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Categories;
