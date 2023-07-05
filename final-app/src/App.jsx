import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import { makeCart } from "./store/actions/cartThunk";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import LoginConfirm from "./pages/LoginConfirm";
import AuthLayout from "./components/AuthLayout";
import RestrictedLayout from "./components/RestrictedLayout";
import Register from "./pages/Register";

function App() {
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  if (Object.values(cart).length === 0) {
    dispatch(makeCart({ submit: false }));
  }

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route path=":category_slug" element={null} />
          </Route>
          <Route path="/searchedProducts/:query" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route element={<RestrictedLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login/confirm" element={<LoginConfirm />} />
          <Route path="/confirm/:token" element={<Home />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
