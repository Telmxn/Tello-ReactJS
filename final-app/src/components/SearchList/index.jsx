import { useEffect } from "react";
import SearchButton from "../SearchButton";
import style from "./searchlist.module.css";
import { Link } from "react-router-dom";
import SearchCard from "../SearchCard";
import { useDispatch, useSelector } from "react-redux";
import { clearSearchHistory } from "../../store/reducers/searchHistory";
import { getSearchedProducts } from "../../store/actions/productThunk";
import SkeletonSearch from "../skeletons/SkeletonSearch";

const SearhList = ({ isSearching, search }) => {
  const { history } = useSelector((state) => state.searchHistory);
  const { products, status } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    if (search.trim() != "") {
      dispatch(getSearchedProducts({ query: search }));
    }
  }, [search]);

  const handleClearSearchHistory = () => {
    dispatch(clearSearchHistory());
  };

  return (
    <div
      className={`${style.searchList} ${isSearching ? style.searching : ""}`}
    >
      {search.trim() == "" ? (
        <>
          {history.length != 0 ? (
            <div className={style.searches}>
              <div className={style.topPart}>
                <h3>Son axtarışlar</h3>
                <button
                  className={style.clear}
                  onClick={handleClearSearchHistory}
                >
                  Təmizlə
                </button>
              </div>
              <div className={style.buttons}>
                {history?.map((button, index) => {
                  return <SearchButton name={button} link={"#"} key={index} />;
                })}
              </div>
            </div>
          ) : (
            ""
          )}
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
        </>
      ) : (
        <>
          <div className={style.searches}>
            <div className={style.topPart}>
              <h3>Nəticələr</h3>
              <button className={style.clear}>Təmizlə</button>
            </div>
            <div className={style.result}>
              {status == "loading" ? (
                <>
                  <SkeletonSearch />
                  <SkeletonSearch />
                  <SkeletonSearch />
                </>
              ) : products.searchedProducts == undefined ? (
                "Məhsul tapılmadı."
              ) : (
                products.searchedProducts?.map((product) => {
                  return (
                    <SearchCard
                      image={product.image.url}
                      title={product.name}
                      price={product.price.raw}
                      key={product.id}
                    />
                  );
                })
              )}
            </div>
          </div>
          <Link to={"#"}>Hamısını göstər</Link>
        </>
      )}
    </div>
  );
};

export default SearhList;
