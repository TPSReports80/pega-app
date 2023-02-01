import React from "react";
import logo from "../images/pega-logo.svg";
import {
  RiHome2Fill,
  RiLogoutBoxRFill,
  RiUserAddFill,
  RiFileDownloadFill,
} from "react-icons/ri";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useDispatchContext } from "../context/context.js";
const Navbar = () => {
  const dispatch = useDispatchContext();
  return (
    <nav className="nav">
      <img src={logo} alt="pega logo" className="nav-logo" />
      <ul className="nav_list">
        <CustomLink to="/">
          <RiHome2Fill />
        </CustomLink>

        <CustomLink to="/signin">
          <RiUserAddFill />
        </CustomLink>
        <CustomLink to="/view">
          <RiFileDownloadFill />
        </CustomLink>
      </ul>
      <button
        className="exit-btn"
        onClick={() => dispatch({ type: "LOG_OUT" })}
      >
        <RiLogoutBoxRFill />
      </button>
    </nav>
  );
};

const CustomLink = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} className="nav-link">
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
