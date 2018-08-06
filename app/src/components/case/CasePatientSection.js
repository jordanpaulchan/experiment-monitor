import React from "react";
import { Input } from "semantic-ui-react";

import "./CasePatientSection.css";

export default ({ section }) => {
  const { title, inputs } = section;
  const items = inputs.map(item => (
    <label key={item.key} className="PatientInput">
      <span className="PatientInputTitle">{item.title}:</span>
      <Input />
    </label>
  ));

  return (
    <article className="CasePatientSection">
      <h3 className="CasePatientSectionTitle">{title}</h3>
      <div className="CasePatientSectionInputs">{items}</div>
    </article>
  );
};
