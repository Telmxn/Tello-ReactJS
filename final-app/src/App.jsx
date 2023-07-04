import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import { makeCart } from "./store/actions/cartThunk";

function App() {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  if (Object.values(cart).length === 0) {
    dispatch(makeCart({ submit: false }));
  }

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path=":category_slug" element={null} />
        </Route>
        <Route path="/searchedProducts/:query" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
