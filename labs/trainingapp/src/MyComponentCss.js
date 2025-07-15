//Contoh inline styling
export const Satu = () => {
  return (
    <>
      <h1 style={{ backgroundColor: "lightblue" }}>Contoh Inline Styling</h1>
      <p>Ini contoh inline styling</p>
    </>
  );
};

//Contoh Object styling
export const Dua = () => {
  const myStyle = {
    backgroundColor: "lightgreen",
    color: "darkblue",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <>
      <h1 style={myStyle}>Contoh Object Styling</h1>
      <p>Ini contoh object styling</p>
    </>
  );
};
