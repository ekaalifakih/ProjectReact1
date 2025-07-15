//Demo untuk melihat perbedaan state dengan variable biasa
import * as React from "react";

export function VariableVsState() {
  let countVar = 0; // Variabel biasa
  const [countState, setCountState] = React.useState(0); // Ini State
  const [disabled, setDisabled] = React.useState(false); // State untuk disable button

  // Fungsi untuk menaikan nilai variabel biasa
  const increaseVar = () => {
    countVar += 1; // Mengubah nilai variabel biasa
    console.log("Nilai countVar:", countVar); // Hanya mengubah nilai variabel, tidak memicu re-render
    alert("Nilai countVar: " + countVar);
  };

  // Fungsi untuk menurunkan nilai variabel biasa
  const decreaseVar = () => {
    if (countVar > 0) {
      countVar -= 1; // Mengubah nilai variabel biasa
      console.log("Nilai countVar:", countVar); // Hanya mengubah nilai variabel, tidak memicu re-render
    }
    alert("Nilai countVar: " + countVar);
  };

  // Fungsi untuk menaikan nilai state
  const increaseState = () => {
    setCountState(countState + 1); // Mengubah nilai state
    console.log("Nilai countState:", countState + 1); // Memicu re-render, sehingga komponen akan diperbarui
    if (countState >= 1) {
      setDisabled(false);
    }
  };
  // Fungsi untuk menurunkan nilai state
  const decreaseState = () => {
    if (countState > 0) {
      setCountState(countState - 1); // Mengubah nilai state
      console.log("Nilai countState:", countState - 1); // Memicu re-render, sehingga komponen akan diperbarui
      setDisabled(false);
    } else {
      setDisabled(true); // Jika countState sudah 0, disable button
    }
  };

  return (
    <div>
      <h2>Perbandingan State dan Variabel Biasa</h2>
      <button onClick={increaseVar}>Tambah countVar</button>
      <button onClick={decreaseVar}>Kurangi countVar</button>
      <p>Nilai countVar (Variabel Biasa): {countVar}</p>
      <button onClick={increaseState}>Tambah countState</button>
      <button onClick={decreaseState} disabled={disabled}>
        Kurangi countState
      </button>
      <p>Nilai countState (State): {countState}</p>
    </div>
  );
}
