import Drum from "./drum/Drum";
import React from "react";
import "antd/dist/antd.css";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      key: "Q",
    };
  }

  render() {
    return (
      <div className="App" >
        <Drum clip={this.state.key} />
      </div>
    );
  }
}

export default App;
