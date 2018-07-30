import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Segment } from "semantic-ui-react";

export default () => {
  return (
    <main>
      <article>
        <Container style={{ marginTop: "7em" }}>
          <Link to="/case">
            <Button primary size="large">
              <Button.Content>Log Case</Button.Content>
            </Button>
          </Link>
          <section>
            <Segment.Group style={{ marginTop: "1em" }}>
              <Segment>Case 1</Segment>
              <Segment>Case 2</Segment>
              <Segment>Case 3</Segment>
              <Segment>Case 4</Segment>
            </Segment.Group>
          </section>
        </Container>
      </article>
    </main>
  );
};
