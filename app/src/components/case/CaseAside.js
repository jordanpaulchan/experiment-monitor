import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import "./CaseAside.css";

const items = [
  {
    key: "patient",
    title: "Patient Information",
    description: "Information about the patient, doctor and assistants"
  },
  {
    key: "setup",
    title: "Setup",
    description: "Setup checklist walkthrough"
  },
  {
    key: "equipment",
    title: "Equipment",
    description: "Equipment used during the procedure"
  },
  {
    key: "data",
    title: "Data",
    description: "Patient vitals and medicine used"
  }
];

export default ({ location }) => {
  const caseItems = items.map(item => {
    const linkTo = `/case/${item.key}`;
    const className = cx("CaseItem", { active: location.pathname === linkTo });

    return (
      <Link key={item.key} to={linkTo}>
        <div className={className}>
          <div className="CaseItemTitle">{item.title}</div>
          <div className="CaseItemDescription">{item.description}</div>
        </div>
      </Link>
    );
  });

  return <div className="CaseAside">{caseItems}</div>;
};
