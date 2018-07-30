import React from "react";
import { Container, Menu } from "semantic-ui-react";

export default ({ className, inverted, left, right }) => (
  <Menu className={className} fixed="top" inverted={inverted} size="massive">
    <Container fluid>
      {left && <Menu.Item header>{left}</Menu.Item>}
      {right && <Menu.Item position="right">{right}</Menu.Item>}
    </Container>
  </Menu>
);
