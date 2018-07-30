import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default () => (
  <Link to="/case">
    <Button primary size="large">
      <Button.Content>Log Case</Button.Content>
    </Button>
  </Link>
);
