import React from "react";
import "./header.css";
import {
  Home,
  FlashOn,
  LiveTv,
  VideoLibrary,
  Search,
  PersonOutline
} from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon ">
          <Home />
          <p>Home</p>
        </div>
        <div className="header__icon">
          <FlashOn />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTv />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibrary />
          <p>Collections</p>
        </div>
        <div className="header__icon">
          <Search />
          <p>Search</p>
        </div>
        <div className="header__icon">
          <PersonOutline />
          <p>Account</p>
        </div>
      </div>
      <img
        className="header__logo"
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt="hulu logo"
      />
    </div>
  );
}

export default Header;
