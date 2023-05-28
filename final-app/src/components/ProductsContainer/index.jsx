import { Link } from "react-router-dom";
import style from "./productscontainer.module.css";
import Card from "../Card";
import nextIcon from "/next.svg";
import iPhone12 from "../../assets/images/iphone 12.png";
import nokiaX10 from "../../assets/images/Nokia X10.png";
import xiaomiPocoM3 from "../../assets/images/Xiaomi Poco M3.png";
import realme8Pro6 from "../../assets/images/Realme 8 Pro 6.png";

const ProductsContainer = ({ title, link }) => {
  return (
    <div className={style.products}>
      <h4>{title}</h4>
      <div className={style.cards}>
        <Card
          onSale="3012"
          price="2089"
          name="Apple iPhone 12, 64 GB, Bənövşəyi"
          image={iPhone12}
        />
        <Card
          price="1360"
          name="Nokia X10, 64 GB, Deep Green"
          image={nokiaX10}
        />
        <Card
          onSale="429"
          price="389"
          name="Xiaomi Poco M3 4/128Gb Yellow (Global)"
          image={xiaomiPocoM3}
        />
        <Card
          onSale="699"
          price="649"
          name="Realme 8 Pro 6/128Gb Black"
          image={realme8Pro6}
        />
        <Card
          onSale="699"
          price="649"
          name="Realme 8 Pro 6/128Gb Black"
          image={realme8Pro6}
        />
      </div>
      <Link to={link} className={style.allButton}>
        Hamısına bax <img src={nextIcon} />
      </Link>
    </div>
  );
};

export default ProductsContainer;
