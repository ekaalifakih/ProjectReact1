import React from "react";
import Pertama from "./Pertama.js";
import Kedua from "./Kedua.js";
import Ketiga from "./Ketiga.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Belajar ReactJS</h1>
        <Pertama></Pertama>
        <Kedua></Kedua>
        <Ketiga></Ketiga>
      </div>
    );
  }
}

export default App;
