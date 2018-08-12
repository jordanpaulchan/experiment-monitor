import React from "react";
import styled from "react-emotion";

import Chart from "../chart/Chart";
import TableContainer from "../table/TableContainer";

const CaseDataPage = styled("div")`
  margin: 7rem 3rem 2rem 23rem;
`;

export default () => {
  return (
    <CaseDataPage>
      <TableContainer />
      <Chart />
    </CaseDataPage>
  );
};
