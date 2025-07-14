import React from "react";

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
//membuat componen dengan class
class Pertama extends React.Component {
  render() {
    return (
      <div>
        <h1>Component Pertama</h1>
      </div>
    );
  }
}

//membuat componen dengan function
function Kedua() {
  return (
    <div>
      <h2>Component Kedua</h2>
    </div>
  );
}
//membuat componen dengan arrow function
const Ketiga = () => {
  return (
    <div>
      <h3>Component Ketiga</h3>
    </div>
  );
};
