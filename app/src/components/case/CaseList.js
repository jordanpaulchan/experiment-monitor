import React from "react";
import { Segment } from "semantic-ui-react";

import CaseItem from "./CaseItem";

export default ({ cases }) => {
  if (!cases || cases.length < 1) {
    return null;
  }

  const items = cases.map(item => <CaseItem key={item.id} item={item} />);

  return <Segment.Group>{items}</Segment.Group>;
};
