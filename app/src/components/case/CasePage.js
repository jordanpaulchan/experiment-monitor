import React from "react";
import CaseSection from "./CaseSection";
import CasePageNextButton from "./CasePageNextButton";

import "./CasePage.css";

export default ({ sections, next }) => {
  const caseSections = sections.map(section => (
    <CaseSection key={section.key} section={section} />
  ));

  return (
    <div className="CasePage">
      {caseSections}
      <div className="CasePageButton">
        <CasePageNextButton to={next} />
      </div>
    </div>
  );
};
