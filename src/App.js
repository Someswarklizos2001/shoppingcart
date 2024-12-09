import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Protected } from "./components/Protected";
import { Products } from "./pages/Products";
import {ViewProduct} from "./components/ViewProduct.js"
import { Cart } from "./pages/Cart.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Protected />}>
          <Route path="products" element={<Products/>}/>
          <Route path="view-product/:category/:id" element={<ViewProduct/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
