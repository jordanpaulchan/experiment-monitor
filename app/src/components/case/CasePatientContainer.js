import React, { PureComponent } from "react";
import CasePage from "./CasePage";

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
      },
      {
        key: "weight",
        title: "Weight",
        type: "number"
      },
      {
        key: "age",
        title: "Age",
        type: "number"
      }
    ]
  },
  {
    key: "doctors",
    title: "Doctors Information",
    inputs: [
      {
        key: "anesthetist",
        title: "Anesthetist",
        type: "text"
      },
      {
        key: "dentist",
        title: "Dentist",
        type: "text"
      },
      {
        key: "assistant",
        title: "Assistant",
        type: "text"
      },
      {
        key: "nurse",
        title: "Nurse",
        type: "text"
      }
    ]
  }
];

class CasePatientContainer extends PureComponent {
  render() {
    return <CasePage sections={sections} next="/case/setup" />;
  }
}

export default CasePatientContainer;
