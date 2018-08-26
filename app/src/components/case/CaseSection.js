import React from "react";
import { Input, Checkbox, Radio } from "semantic-ui-react";

import "./CaseSection.css";

export default ({ section }) => {
  const { title, inputs } = section;
  const items = inputs.map(item => {
    switch (item.type) {
      case "checkbox":
        return (
          <Checkbox
            key={item.key}
            className="CaseSectionLabel"
            label={item.title}
          />
        );
      case "radio":
        return (
          <Radio
            key={item.key}
            className="CaseSectionLabel"
            name={title}
            value={item.title}
            label={item.title}
          />
        );
      default:
        return (
          <label
            key={item.key}
            className="CaseSectionLabel CaseSectionLabel--input"
          >
            <span className="CaseSectionLabel__Title--input">
              {item.title}:
            </span>
            <Input type={item.type} />
          </label>
        );
    }
  });

  return (
    <article className="CaseSection">
      <h3 className="CaseSectionTitle">{title}</h3>
      <div className="CaseSectionInputs">{items}</div>
    </article>
  );
};
