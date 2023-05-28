import { Link } from "react-router-dom";
import style from "./category.module.css";
import arrowRight from "../../assets/images/arrowRight.svg";

const Category = ({ isFull, name, count, image, link, background }) => {
  return (
    <div
      className={`${isFull ? style.fullCategory : ""} ${style.category}`}
      style={{ backgroundImage: background }}
    >
      <div className={style.info}>
        <h3>{name}</h3>
        <p>Məhsul sayı: {count}</p>
        <Link to={link}>
          Məhsullara keçid <img src={arrowRight} alt="Right Arrow" />
        </Link>
      </div>
      <img src={image} alt="Category" />
    </div>
  );
};

export default Category;
