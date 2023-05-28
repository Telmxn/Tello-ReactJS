import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Advertisement from "./Advertisement";
import appleLogo from "../assets/images/apple-logo.png";
import iPhoneAirTag from "../assets/images/iPhoneAirTag.jpg";

const MenuItem = ({ name, link, dropdown, style }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className={`${isOpen ? style.openDropdown : ""} ${
        dropdown && style.dropdown
      }`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <NavLink to={link}>{name}</NavLink>
      {dropdown && (
        <div className={`${isOpen ? style.open : ""} ${style.dropdownMenu}`}>
          {dropdown.map((list) => {
            return (
              <ul key={list.id}>
                <li>
                  <h3>{list.name}</h3>
                </li>

                {list.dropdown.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link to={item.link}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            );
          })}
          <Advertisement
            isWhiteBack={false}
            logo={appleLogo}
            message="Əşyalarınızı tapmağın super asan yolu."
            price="79"
            name="AirTag"
            link="#"
            image={iPhoneAirTag}
            styleEx={{ maxWidth: "490px", fontSize: "1.5rem" }}
          />
        </div>
      )}
    </li>
  );
};

export default MenuItem;
