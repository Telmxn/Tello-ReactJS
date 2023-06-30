import style from "./cart.module.css";
import shoppingCart from "../../assets/images/gray-shopping-cart.svg";
import { Link } from "react-router-dom";
import PriceContainer from "../../components/PriceContainer";
import CartProduct from "../../components/CartProduct";

const Cart = () => {
  return (
    <div className={style.cart}>
      <h2>Səbət (0 məhsul)</h2>
      <div className={style.emptyCart}>
        <img src={shoppingCart} alt="Shopping Cart" />
        <p>Səbətiniz halhazırda boşdur</p>
        <Link to={"/products"}>Alış-verişə davam et</Link>
      </div>
      <div className={style.fullCart}>
        <PriceContainer />
        <div className={style.products}>
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
      </div>
    </div>
  );
};

export default Cart;
