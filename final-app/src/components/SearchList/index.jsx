import { useEffect } from "react";
import SearchButton from "../SearchButton";
import style from "./searchlist.module.css";

const SearhList = ({ isSearching, search }) => {
  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div
      className={`${style.searchList} ${isSearching ? style.searching : ""}`}
    >
      <div className={style.searches}>
        <div className={style.topPart}>
          <h3>Son axtarışlar</h3>
          <button className={style.clear}>Təmizlə</button>
        </div>
        <div className={style.buttons}>
          <SearchButton name="iPhone" link={"#"} />
          <SearchButton name="Samsung TV" link={"#"} />
          <SearchButton name="Asus ROG Phone" link={"#"} />
        </div>
      </div>
      <div className={style.searches}>
        <div className={style.topPart}>
          <h3>Çox axtarılanlar</h3>
        </div>
        <div className={style.buttons}>
          <SearchButton name="iPhone" link={"#"} />
          <SearchButton name="Samsung TV" link={"#"} />
          <SearchButton name="Asus ROG Phone" link={"#"} />
          <SearchButton name="iPhone" link={"#"} />
          <SearchButton name="Samsung TV" link={"#"} />
          <SearchButton name="Asus ROG Phone" link={"#"} />
        </div>
      </div>
    </div>
  );
};

export default SearhList;
