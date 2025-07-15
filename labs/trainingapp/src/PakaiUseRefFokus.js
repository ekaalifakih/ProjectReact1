import * as React from "react";

const PakaiUseRefFokus = () => {
  const inputRef = React.useRef(document.createElement("input"));
  const inputRef2 = React.useRef(document.createElement("input"));
  const handleFocus = () => {
    inputRef.current.focus();
  };
  const handleFocus2 = () => {
    inputRef2.current.focus();
  };

  return (
    <>
      <h2>Demo Penggunaan useRef untuk Fokus Input</h2>
      <input ref={inputRef} type="text" placeholder="Klik tombol untuk fokus" />
      <button onClick={handleFocus}>Fokus Input</button>
      <input ref={inputRef2} type="text" placeholder="Klik tombol untuk fokus" />
      <button onClick={handleFocus2}>Fokus Input2</button>
    </>
  );
};

export default PakaiUseRefFokus;
