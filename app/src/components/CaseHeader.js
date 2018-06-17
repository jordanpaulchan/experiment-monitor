import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default () => (
  <Menu fixed="top" inverted>
    <Link to="/">
      <Menu.Item>Back</Menu.Item>
    </Link>
  </Menu>
);
