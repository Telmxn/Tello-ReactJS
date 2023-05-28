import style from "./search.module.css";
import searchIcon from "../../assets/images/search.svg";
import { useState } from "react";
import closeIcon from "../../assets/images/darkClose.svg";
import SearchList from "../SearchList";

const Search = ({ searchRef }) => {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchFocus = () => {
    setIsSearching(true);
  };

  const closeSearch = (e) => {
    e.preventDefault();
    setIsSearching(false);
  };

  return (
    <div
      className={`${isSearching ? style.searching : ""} ${
        style.searchContainer
      }`}
    >
      <form>
        <div className={style.search}>
          <img
            src={searchIcon}
            alt="Search"
            className={style.searchIcon}
            onClick={() => searchRef.current.focus()}
          />
          <input
            type="search"
            placeholder="Axtarış..."
            ref={searchRef}
            onFocus={handleSearchFocus}
            onBlur={closeSearch}
          />
        </div>
        <button className={style.close} onClick={closeSearch}>
          <img src={closeIcon} alt="Close" />
        </button>
      </form>
      <SearchList isSearching={isSearching} />
    </div>
  );
};

export default Search;
