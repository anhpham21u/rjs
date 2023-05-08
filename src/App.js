import logo from "./logo.svg";
import "./App.css";

import "./pages/styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Shop from "./pages/Shop.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
