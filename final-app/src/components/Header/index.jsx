import style from "./header.module.css";
import { Link } from "react-router-dom";
import logo from "/icon.svg";
import personIcon from "../../assets/images/person.svg";
import heartIcon from "../../assets/images/heart.svg";
import shoppingCartIcon from "../../assets/images/shopping-cart.svg";
import Menu from "../Menu";
import Search from "../Search";
import { memo, useRef } from "react";

const Header = () => {
  const searchRef = useRef();

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
          <span>0</span>
        </Link>
      </div>
      <Search searchRef={searchRef} />
    </header>
  );
};

export default memo(Header);
