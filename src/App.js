import logo from "./logo.svg";
import "./App.css";

import "./pages/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Shop from "./pages/Shop/Shop.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/rjs" element={<Home />} />
        <Route path="/rjs/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
