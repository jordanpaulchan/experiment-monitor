import React from "react";

import { Table } from "semantic-ui-react";

export default ({ header, data }) => {
  const tableHeader = header.map(item => (
    <Table.HeaderCell key={item}>{item}</Table.HeaderCell>
  ));

  const tableData = data.map((row, idx) => {
    const dataRow = row.map(item => <Table.Cell key={item}>{item}</Table.Cell>);

    return <Table.Row key={idx}>{dataRow}</Table.Row>;
  });

  return (
    <Table celled definition>
      <Table.Header>
        <Table.Row>{tableHeader}</Table.Row>
      </Table.Header>
      <Table.Body>{tableData}</Table.Body>
    </Table>
  );
};
