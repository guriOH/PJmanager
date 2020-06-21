import React from "react";
import { Segment, Header } from "semantic-ui-react";

const CommonLayout = ({children}) => {
  return (
  <div>
    <Segment basic style={{ height: "100vh" }}>
          <Header as="h3">{children.Header}</Header>
          {children}
    </Segment>
  </div>
  );
}

export default CommonLayout;