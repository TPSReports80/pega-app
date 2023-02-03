import React from "react";
import logo from "../images/pega-logo.svg";
import {
  RiHome2Fill,
  RiLogoutBoxRFill,
  RiUserAddFill,
  RiFileDownloadFill,
  RiMenuFill,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatchContext } from "../context/context.js";
import { CustomLink } from "../utils/utils";
const Navbar = () => {
  const dispatch = useDispatchContext();
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    dispatch({ type: "LOG_OUT" });
  };
  return (
    <nav className="nav">
      <img src={logo} alt="pega logo" className="nav-logo" />
      <button
        className="mobile-menu"
        onClick={() => dispatch({ type: "TOGGLE_NAV" })}
      >
        <RiMenuFill />
      </button>
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
      <button className="exit-btn" onClick={logout}>
        <RiLogoutBoxRFill />
      </button>
    </nav>
  );
};

export default Navbar;
