import style from "./cartProduct.module.css";
import iphone from "../../assets/images/iphone 12.png";
import redAzn from "../../assets/images/redazn.svg";
import graydelete from "../../assets/images/delete.svg";
import redDelete from "../../assets/images/red-delete.svg";
import { useState } from "react";

const CartProduct = () => {
  const [count, setCount] = useState(1);

  return (
    <div className={style.product}>
      <label className={style.container}>
        <input type="checkbox" />
        <span className={style.checkmark}></span>
      </label>
      <img src={iphone} alt="Product" />
      <button>
        <img src={graydelete} alt="Delete" className={style.grayDelete} />
        <img src={redDelete} alt="Delete" className={style.redDelete} />
      </button>
      <div className={style.about}>
        <div className={style.productInfo}>
          <h4>
            iPhone 12, 64 GB, Bənövşəyi, (MJNM3) Golden 5 G 8690604083886
            0212042
          </h4>
          <p className={style.color}>
            <span>Rəng:</span>Bənövşəyi
          </p>
          <p className={style.price}>
            240
            <img src={redAzn} alt="Manat" />
          </p>
        </div>
        <div className={style.count}>
          <button onClick={() => setCount((prev) => prev - 1)}>-</button>
          <p>{count}</p>
          <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
