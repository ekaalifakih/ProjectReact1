import React from "react";
import { JsonProps, SingleProps, MultiProps } from "./MyComponent";

class App extends React.Component {
  data = {
    mobil: { merek: "Toyota", model: "Supra", harga: "2jt" },
  }
  render() {
    return (
      <>
        <SingleProps merek="Toyota" />
        <MultiProps merek="Toyota" model="Supra" harga="2jt" />
        <MultiProps merek="Honda" model="Civic" harga="3jt" />
        <MultiProps merek="Suzuki" model="Ertiga" harga="4jt" />
        <JsonProps mobil={this.data.mobil} />
      </>
    );
  }
}

export default App;
