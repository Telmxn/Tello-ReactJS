import { Link } from "react-router-dom";

const SearchButton = ({ name, link }) => {
  return <Link to={link}>{name}</Link>;
};

export default SearchButton;
