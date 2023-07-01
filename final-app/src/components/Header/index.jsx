import style from "./header.module.css";
import { Link } from "react-router-dom";
import logo from "/icon.svg";
import personIcon from "../../assets/images/person.svg";
import heartIcon from "../../assets/images/heart.svg";
import shoppingCartIcon from "../../assets/images/shopping-cart.svg";
import Menu from "../Menu";
import Search from "../Search";
import { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../store/actions/cartThunk";
import { createCart } from "../../commerce/cart";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const searchRef = useRef();
  useEffect(() => {
    const cartId = localStorage.getItem("cartId");
    let ready = false;
    if (cartId == null) {
      createCart({ submit: false }).then(() => (ready = true));
      if (ready == true) {
        dispatch(getCart({ id: cartId }));
      }
    } else {
      dispatch(getCart({ id: cartId }));
    }
    const submitCartId = localStorage.getItem("submitCartId");
    if (submitCartId == null) {
      createCart({ submit: true });
    }
  }, [cart]);
  return (
    <header>
      <Menu searchRef={searchRef} />
      <Link to={"/"}>
        <img src={logo} className={style.logo} />
      </Link>
      <div className={style.buttons}>
        <Link to={"#"}>
          <img src={personIcon} alt="Person" />
        </Link>
        <Link to={"#"}>
          <img src={heartIcon} alt="Favorites" />
        </Link>
        <Link to={"/cart"} className={style.cart}>
          <img src={shoppingCartIcon} alt="Shopping Cart" />
          <span>{cart?.total_items ? cart?.total_items : "0"}</span>
        </Link>
      </div>
      <Search searchRef={searchRef} />
    </header>
  );
};

export default memo(Header);
