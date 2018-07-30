import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Segment } from "semantic-ui-react";

import "./Home.css";

export default () => {
  return (
    <main>
      <Container className="Home">
        <section>
          <Link to="/case">
            <Button primary size="large">
              <Button.Content>Log Case</Button.Content>
            </Button>
          </Link>
        </section>
        <section>
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
