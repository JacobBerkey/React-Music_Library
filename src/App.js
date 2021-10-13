import React, { Component } from "react";
import AllSongs from "./components/MusicTable/MusicTable";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
          <AllSongs />
      </div>
    );
  }
}

export default App;
