import React from "react";

import MenuHeader from "../menu/MenuHeader";
import Logo from "../logo/Logo";
import Profile from "../profile/Profile";

import "./HomeHeader.css";

export default () => (
  <MenuHeader className="HomeHeader" left={Logo} right={Profile} />
);
