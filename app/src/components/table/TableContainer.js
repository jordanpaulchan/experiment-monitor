import React from "react";

import Table from "./Table";

const header = [
  "Time",
  "14:00",
  "14:15",
  "14:30",
  "14:45",
  "15:00",
  "15:15",
  "15:30",
  "15:45",
  "14:00"
];

const medicineData = [
  ["Midazolam", "", "", "", "", "", "", "", "", ""],
  ["Fentanyl", "", "", "", "", "", "", "", "", ""],
  ["Glycopyrrolate", "", "", "", "", "", "", "", "", ""]
];

const gasData = [
  ["CO2", "", "", "", "", "", "", "", "", ""],
  ["N2O", "", "", "", "", "", "", "", "", ""],
  ["AIR", "", "", "", "", "", "", "", "", ""]
];

const temperatureData = [
  ["Temperature", "", "", "", "", "", "", "", "", ""],
  ["RR/TV Insp/Peep", "", "", "", "", "", "", "", "", ""]
];

export default () => (
  <React.Fragment>
    <Table header={header} data={medicineData} />
    <Table header={header} data={gasData} />
    <Table header={header} data={temperatureData} />
  </React.Fragment>
);
