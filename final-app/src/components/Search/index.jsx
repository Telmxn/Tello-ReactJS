import style from "./search.module.css";
import searchIcon from "../../assets/images/search.svg";
import { useState } from "react";
import closeIcon from "../../assets/images/darkClose.svg";
import SearchList from "../SearchList";
import useDebounce from "../../hooks/useDebounce";

const Search = ({ searchRef }) => {
  const [isSearching, setIsSearching] = useState(false);

  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 500);

  const handleSearchFocus = () => {
    setIsSearching(true);
  };

  const closeSearch = (e) => {
    e.preventDefault();
    setIsSearching(false);
  };

  const handleChange = () => {
    setSearch(searchRef.current.value);
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
            onChange={handleChange}
          />
        </div>
        <button className={style.close} onClick={closeSearch}>
          <img src={closeIcon} alt="Close" />
        </button>
      </form>
      <SearchList isSearching={isSearching} search={debounceSearch} />
    </div>
  );
};

export default Search;
