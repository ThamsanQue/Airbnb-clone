import { Avatar } from "@material-ui/core";
import { ExpandMore, Language, Search } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/header.css";

function Header() {
  return (
    <div className="header__">
      <Link to="/">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
          alt=""
          className="header__icon"
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <Search />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
