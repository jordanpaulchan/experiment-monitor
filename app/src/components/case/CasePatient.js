import React, { PureComponent } from "react";
import CasePatientSection from "./CasePatientSection";
import CaseNextPageButton from "./CaseNextPageButton";

import "./CasePatient.css";

const sections = [
  {
    key: "patient",
    title: "Patient Information",
    inputs: [
      {
        key: "firstName",
        title: "First Name",
        type: "text"
      },
      {
        key: "lastName",
        title: "Last Name",
        type: "text"
      },
      {
        key: "email",
        title: "Email",
        type: "text"
      },
      {
        key: "phone",
        title: "Phone",
        type: "text"
      }
    ]
  },
  {
    key: "doctor",
    title: "Doctor Information",
    inputs: [
      {
        key: "firstName",
        title: "First Name",
        type: "text"
      },
      {
        key: "lastName",
        title: "Last Name",
        type: "text"
      }
    ]
  }
];

class CasePatient extends PureComponent {
  render() {
    const patientSections = sections.map(section => (
      <CasePatientSection key={section.key} section={section} />
    ));

    return (
      <div className="CasePatient">
        {patientSections}
        <div className="CasePatientButton">
          <CaseNextPageButton to="/case/setup" />
        </div>
      </div>
    );
  }
}

export default CasePatient;
