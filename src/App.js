import React, { Component } from "react";
import AllSongs from "./components/MusicTable/MusicTable";
import 'bootstrap/dist/css/bootstrap.min.css';
import SongCreateForm from "./components/SongForm/SongForm";
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };
  }

  render() {
    return (
      <div className= "div">
          <AllSongs />
          <SongCreateForm />
      </div>
    );
  }
}

export default App;
