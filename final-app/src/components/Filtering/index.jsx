import Filter from "../Filter";
import Sorting from "../Sorting";
import style from "./filtering.module.css";

const Filtering = ({ setSortBy }) => {
  return (
    <div className={style.filtering}>
      <Sorting setSortBy={setSortBy} />
      <div className={style.divider}></div>
      <Filter />
    </div>
  );
};

export default Filtering;
