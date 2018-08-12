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

class CasePatientContainer extends PureComponent {
  render() {
    return <CasePage sections={sections} next="/case/setup" />;
  }
}

export default CasePatientContainer;
