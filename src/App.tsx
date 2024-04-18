import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Blog from "./pages/blog";
import Checkout from "./pages/checkout";
import Contact from "./pages/contact";
import Shop from "./pages/shop/index";
import ProductComparison from "./pages/productComparison";
import SingleProduct from "./pages/singleProduct";
import Cart from "./pages/cart";
import Home from "./pages/home";
import { ToastContainer } from "react-toastify";
import LogIn from "./pages/login/login";
import User from "./pages/user/user";
import Favorite from "./pages/favorite";

function App() {
  return (
    <>
      {" "}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productcomparison" element={<ProductComparison />} />
          <Route path={`/product/:id`} element={<SingleProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/favorite" element={<Favorite />} />

          <Route path="/login" element={<LogIn />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
