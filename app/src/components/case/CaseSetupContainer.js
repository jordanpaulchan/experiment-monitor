import React, { PureComponent } from "react";
import CasePage from "./CasePage";

const sections = [
  {
    key: "preop",
    title: "Pre-op equipment check",
    inputs: [
      {
        key: "mask",
        title: "Mask",
        type: "checkbox"
      },
      {
        key: "iv",
        title: "IV",
        type: "checkbox"
      },
      {
        key: "drugs",
        title: "Drugs",
        type: "checkbox"
      },
      {
        key: "suction",
        title: "Suction",
        type: "checkbox"
      },
      {
        key: "oxygen",
        title: "Oxygen",
        type: "checkbox"
      },
      {
        key: "airway",
        title: "Airway",
        type: "checkbox"
      },
      {
        key: "laryngoscope",
        title: "Laryngoscope",
        type: "checkbox"
      },
      {
        key: "ettube",
        title: "ET tube",
        type: "checkbox"
      },
      {
        key: "stylette",
        title: "Stylette",
        type: "checkbox"
      }
    ]
  }
];

class CaseSetupContainer extends PureComponent {
  render() {
    return <CasePage sections={sections} next="/case/equipment" />;
  }
}

export default CaseSetupContainer;
