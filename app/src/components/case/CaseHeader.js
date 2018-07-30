import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import MenuHeader from "../menu/MenuHeader";

const back = (
  <Link to="/">
    <Icon inverted color="grey" name="arrow left" />
    Back
  </Link>
);

export default () => <MenuHeader inverted={true} left={back} />;
