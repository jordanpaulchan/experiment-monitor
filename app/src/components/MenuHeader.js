import React from "react";
import { Menu } from "semantic-ui-react";

export default ({ inverted, left, right }) => (
  <Menu fixed="top" inverted={inverted} size="massive">
    <Menu.Item header>{left}</Menu.Item>
    {right && <Menu.Item>{right}</Menu.Item>}
  </Menu>
);
