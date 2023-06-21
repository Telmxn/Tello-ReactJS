import style from "./sorting.module.css";
import sortingImage from "../../assets/images/sorting.svg";
import { useRef, useState } from "react";

const Sorting = ({ setSortBy }) => {
  const data = [
    { id: 0, value: "created.desc", label: "Ən yenilər" },
    { id: 1, value: "price.asc", label: "Ucuzdan-bahaya" },
    { id: 2, value: "price.desc", label: "Bahadan-ucuza" },
    { id: 3, value: "name.asc", label: "Ada görə (A-Z)" },
    { id: 4, value: "name.desc", label: "Ada görə (Z-A)" },
  ];
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (id) => {
    setSelectedItem(id);
    setIsOpen(!isOpen);
    setSortBy(data.find((item) => item.id == id).value);
  };

  const [isOpen, setIsOpen] = useState(false);

  // const sortingRef = useRef();

  return (
    <div className={style.sorting}>
      <button onClick={toggleDropdown}>
        <img src={sortingImage} alt="Sort" />
        <p>Sıralama</p>
      </button>
      {/* <select ref={sortingRef} className={style.sort}>
        <option value="created">Ən yenilər</option>
        <option value="price.asc">Ucuzdan-bahaya</option>
        <option value="price.desc">Bahadan-ucuza</option>
        <option value="name.asc">Ada görə (A-Z)</option>
        <option value="name.desc">Ada görə (Z-A)</option>
      </select> */}

      <div className={style.dropdown}>
        {/* <div className={style.dropdownHeader} onClick={toggleDropdown}>
        {selectedItem
          ? items.find((item) => item.id == selectedItem).label
          : "Select your destination"}
        <i className={`fa fa-chevron-right icon ${isOpen && style.open}`}></i>
      </div> */}
        <div className={`${style.dropdownBody} ${isOpen && style.open}`}>
          {items.map((item) => (
            <div
              className={style.dropdownItem}
              onClick={(e) => handleItemClick(e.target.id)}
              key={item.id}
              id={item.id}
            >
              <span
                className={`${style.dropdownItemDot} ${
                  item.id == selectedItem && style.selected
                }`}
              >
                •{" "}
              </span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sorting;
