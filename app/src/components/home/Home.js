import React from "react";
import { Container, Segment } from "semantic-ui-react";

import CreateCaseButton from "../case/CreateCaseButton";

import "./Home.css";

export default () => {
  return (
    <main>
      <Container className="Home">
        <section className="Create">
          <CreateCaseButton />
        </section>
        <section className="Content">
          <Segment.Group>
            <Segment>Case 1</Segment>
            <Segment>Case 2</Segment>
            <Segment>Case 3</Segment>
            <Segment>Case 4</Segment>
          </Segment.Group>
        </section>
      </Container>
    </main>
  );
};
