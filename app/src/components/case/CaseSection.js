import React from "react";
import { Input } from "semantic-ui-react";

import "./CaseSection.css";

export default ({ section }) => {
  const { title, inputs } = section;
  const items = inputs.map(item => (
    <label key={item.key} className="CaseSectionLabel">
      <span className="CaseSectionTitle">{item.title}:</span>
      <Input />
    </label>
  ));

  return (
    <article className="CaseSection">
      <h3 className="CaseSectionTitle">{title}</h3>
      <div className="CaseSectionInputs">{items}</div>
    </article>
  );
};
