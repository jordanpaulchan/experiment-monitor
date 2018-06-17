import React from "react";
import { Link } from "react-router-dom";

import MenuHeader from "./MenuHeader";

const logo = <Link to="/">AARC</Link>;

export default () => <MenuHeader left={logo} />;
