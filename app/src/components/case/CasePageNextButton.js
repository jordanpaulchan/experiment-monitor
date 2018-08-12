import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default ({ to }) => (
  <Link to={to}>
    <Button content="Next" primary fluid size="big" />
  </Link>
);
