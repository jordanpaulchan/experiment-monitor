import React, { PureComponent } from "react";
import CasePage from "./CasePage";

const sections = [
  {
    key: "induction",
    title: "Induction",
    inputs: [
      {
        key: "intravenous",
        title: "Intravenous",
        type: "radio"
      },
      {
        key: "inhalation",
        title: "Inhalation",
        type: "radio"
      }
    ]
  },
  {
    key: "intubation",
    title: "Intubation",
    inputs: [
      {
        key: "alseep",
        title: "Asleep",
        type: "checkbox"
      },
      {
        key: "directvision",
        title: "Direct Vision",
        type: "checkbox"
      },
      {
        key: "blind",
        title: "Blind",
        type: "checkbox"
      },
      {
        key: "videolaryngoscope",
        title: "Video Laryngoscope",
        type: "checkbox"
      }
    ]
  },
  {
    key: "ettube",
    title: "ET Tube",
    inputs: [
      {
        key: "oral",
        title: "Oral",
        type: "checkbox"
      },
      {
        key: "nasal",
        title: "Nasal",
        type: "checkbox"
      },
      {
        key: "cuffed",
        title: "Cuffed",
        type: "checkbox"
      }
    ]
  }
];

class CaseEquipmentContainer extends PureComponent {
  render() {
    return <CasePage sections={sections} next="/case/data" />;
  }
}

export default CaseEquipmentContainer;
