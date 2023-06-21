import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path=":category" element="null" />
          <Route path=":category/:subcategory" element="null" />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
