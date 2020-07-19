import React from "react";

import { Header, Container, Segment } from "semantic-ui-react";

const DashboardPage = () => (
  <div>
    <Header as="h3">대쉬보드</Header>
   
    <Container>
    <Segment inverted color='red' size='large'>
      Red
    </Segment>
    </Container>
    <Container>
    <Segment inverted color='orange'>
      Red
    </Segment>
    </Container>
  </div>
);

export default DashboardPage;
