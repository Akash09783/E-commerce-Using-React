
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Cart from "./pages/Cart";
import Product from "./pages/Productt";
import ProductList from "./pages/ProductList";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>  
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/productlist" element={<ProductList/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/productt" element={<Product/>} />
          
            </Routes>
    
      </HashRouter>
    </>
  );
};

export default App;
