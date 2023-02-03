import React from "react";
import { CustomLink } from "../utils/utils";
import { useDispatchContext, useStateContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import {
  RiHome2Fill,
  RiLogoutBoxRFill,
  RiUserAddFill,
  RiFileDownloadFill,
} from "react-icons/ri";
const NavListMobile = () => {
  const state = useStateContext();
  const dispatch = useDispatchContext();
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    dispatch({ type: "LOG_OUT" });
  };
  const styles = {
    opacity: state.showMobileNav ? "100%" : "0",
    top: state.showMobileNav ? "0" : "-100%",
  };
  return (
    <aside style={styles}>
      <button
        className="close-mobile-btn"
        onClick={() => dispatch({ type: "TOGGLE_NAV" })}
      >
        <AiOutlineClose />
      </button>
      <ul className="nav_list_mobile">
        <CustomLink to="/" onClick={() => dispatch({ type: "TOGGLE_NAV" })}>
          <RiHome2Fill />
          <span>Home</span>
        </CustomLink>

        <CustomLink
          to="/signin"
          onClick={() => dispatch({ type: "TOGGLE_NAV" })}
        >
          <RiUserAddFill />
          <span>Sign In Attendees</span>
        </CustomLink>
        <CustomLink to="/view" onClick={() => dispatch({ type: "TOGGLE_NAV" })}>
          <RiFileDownloadFill />
          <span>View List of Attendees</span>
        </CustomLink>
        <li>
          <button className="exit-btn" onClick={logout}>
            <RiLogoutBoxRFill />
            <span>Exit</span>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default NavListMobile;
