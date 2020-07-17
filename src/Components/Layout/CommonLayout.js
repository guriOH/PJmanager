import React from "react";
import { Segment } from "semantic-ui-react";

const CommonLayout = ({children}) => {
  return (
    <Segment style={{ height: "100vh"}}>
          {children}
    </Segment>
  );
}

export default CommonLayout;