import React from "react";
import { tampilkanTahun } from "./utils.js";
import { Headers } from "./Headers.js";

class App extends React.Component {
  render() {
    return (
      <>
        <Headers />
        <h2>Selamat Datang di Aplikasi React</h2>
        <p>Tahun saat ini adalah: {tampilkanTahun()}</p>
        <footer>
          <p>&copy; {tampilkanTahun()} - Hak Cipta Dilindungi</p>
        </footer>
      </>
    );
  }
}

export default App;
