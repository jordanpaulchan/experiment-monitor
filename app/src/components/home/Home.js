import React from "react";
import { List } from "immutable";
import { Container } from "semantic-ui-react";

import CaseList from "../case/CaseList";
import CreateCaseButton from "../case/CreateCaseButton";

import "./Home.css";

const NUM_CASES = 10;
const CASE_DATA = new List(new Array(NUM_CASES)).map((items, idx) => ({
  id: idx,
  name: `Case ${idx}`
}));

export default () => {
  return (
    <main>
      <Container className="Home">
        <section className="Create">
          <CreateCaseButton />
        </section>
        <section className="Content">
          <CaseList cases={CASE_DATA} />
        </section>
      </Container>
    </main>
  );
};
