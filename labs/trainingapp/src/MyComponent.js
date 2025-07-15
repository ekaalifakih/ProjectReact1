//Demo membuat komponen yang memiliki props

//contoh komponen yang menggunakan 1 props
export function SingleProps(props) {
  return <h2>Merk {props.merek}</h2>;
}

//contoh komponen yang menggunakan beberapa props
export function MultiProps(props) {
  return (
    <p>
      <h2>Merk {props.merek}</h2>
      <h2>Model {props.model}</h2>
      <h2>Harga {props.harga}</h2>
    </p>
  );
}

//Contoh komponen dengan prop json
export function JsonProps(props) {
  const { mobil } = props;
  return (
    <p>
      <h2>Mobil List</h2>
      <h2>Merek : {mobil.merek}</h2>
      <h2>Model : {mobil.model}</h2>
      <h2>Harga : {mobil.harga}</h2>
    </p>
  );
}
