import React from "react";
import { Segment, Header } from "semantic-ui-react";

const CommonLayout = ({children}) => {
  return (
  <div>
    <Segment basic style={{ height: "100vh" }}>
         
          {children}
    </Segment>
  </div>
  );
}

export default CommonLayout;