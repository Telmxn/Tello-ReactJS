import style from "./menu.module.css";
import menuIcon from "../../assets/images/menu.svg";
import closeIcon from "../../assets/images/close.svg";
import searchIcon from "../../assets/images/blackSearch.svg";
import MenuItem from "../MenuItem";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useState } from "react";

const dropdownList = [
  {
    id: 1,
    name: "Başlıq",
    dropdown: [
      {
        id: uuidv4(),
        name: "Alt Başlıq",
        link: "#",
      },
      {
        id: uuidv4(),
        name: "Alt Başlıq",
        link: "#",
      },
      {
        id: uuidv4(),
        name: "Alt Başlıq",
        link: "#",
      },
      {
        id: uuidv4(),
        name: "Alt Başlıq",
        link: "#",
      },
      {
        id: uuidv4(),
        name: "Alt Başlıq",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    name: "Başlıq",
    dropdown: [
      {
        id: uuidv4(),
        name: "Alt Başlıq",
        link: "#",
      },
      {
        id: uuidv4(),
        name: "Alt Başlıq",
        link: "#",
      },
      {
        id: uuidv4(),
        name: "Alt Başlıq",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    name: "Başlıq",
    dropdown: [
      {
        id: uuidv4(),
        name: "Alt Başlıq",
        link: "#",
      },
      {
        id: uuidv4(),
        name: "Alt Başlıq",
        link: "#",
      },
      {
        id: uuidv4(),
        name: "Alt Başlıq",
        link: "#",
      },
      {
        id: uuidv4(),
        name: "Alt Başlıq",
        link: "#",
      },
    ],
  },
];

const Menu = ({ searchRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    setIsOpen((prev) => !prev);
    searchRef.current.focus();
  };

  return (
    <>
      <button
        className={style.hamburger}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img src={menuIcon} alt="Menu" />
      </button>
      <div className={`${isOpen ? style.openMenu : ""} ${style.menu}`}>
        <nav>
          <ul>
            <MenuItem
              name="Yeni"
              link="#"
              style={style}
              dropdown={dropdownList}
            />
            <MenuItem
              name="Apple"
              link="#"
              style={style}
              dropdown={dropdownList}
            />
            <MenuItem name="Samsung" link="#" style={style} />
            <MenuItem name="Xiaomi" link="#" style={style} />
            <MenuItem
              name="Redmi"
              link="#"
              style={style}
              dropdown={dropdownList}
            />
            <MenuItem name="Bütün Brendlər" link="#" style={style} />
            <MenuItem name="Aksessuarlar" link="#" style={style} />
            <MenuItem name="Endirimlər" link="#" style={style} />
          </ul>
        </nav>
        <div className={style.phoneMenuHeader}>
          <div className={style.left}>
            <button
              className={style.close}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <img src={closeIcon} />
            </button>
            <Link to={"#"}>
              <h1 className={style.topHeader}>
                Project<span> X</span>
              </h1>
            </Link>
          </div>
          <button className={style.phoneSearch} onClick={handleSearch}>
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
        <div className={style.phoneMenuFooter}>
          <Link to={"#"} className={style.signIn}>
            Daxil Ol
          </Link>
          <Link to={"#"} className={style.signUp}>
            Qeydiyyat
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
