import React from "react";
import Kedua, { Pertama, Ketiga } from "./Komponenku"; // mengimport komponen dari file lain

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