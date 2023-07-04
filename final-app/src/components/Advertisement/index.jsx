import style from "./advertisement.module.css";
import { Link } from "react-router-dom";

const Advertisement = ({
  isWhiteBack,
  logo,
  name,
  message,
  price,
  loanPrice,
  image,
  styleEx,
}) => {
  return (
    <div
      className={`${isWhiteBack ? style.whiteAd : ""} ${style.advertisement}`}
      style={styleEx}
    >
      <div className={style.left}>
        {name && (
          <h3 className={style.name}>
            {logo && <img src={logo} />}
            {name}
          </h3>
        )}
        <h2>{message}</h2>

        {isWhiteBack ? (
          <>
            <p className={style.price}>
              {price} AZN
              <br />
              <span className={style.loanPrice}>
                Faizsiz taksitlə {loanPrice} AZN-dən
              </span>
            </p>
          </>
        ) : (
          <p className={style.price}>
            <span className={style.priceIn}>{price}</span>
            <span className={style.azn}>AZN</span>-dən<sub>*</sub>
          </p>
        )}
        <Link to={"/products"} className={style.buyButton}>
          İndi alın
        </Link>
      </div>
      <img className={style.right} src={image} alt="Advertisement" />
    </div>
  );
};

export default Advertisement;
