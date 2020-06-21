import React, { Component } from "react";
import PushableSidebar from "./sidebar/PushableSidebar";

import { BrowserRouter} from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
        <BrowserRouter>
          <PushableSidebar />å
        </BrowserRouter>
      </>
    );
  }
}

export default App;
