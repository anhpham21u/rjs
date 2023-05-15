import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import Banner from "./Banner.js";
import Categories from "./Categories.js";
import ListItems from "./ListItems.js";
import OtherInfo from "./OtherInfo.js";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <ListItems />
      <OtherInfo />
      <Footer />
    </>
  );
}

export default Home;
