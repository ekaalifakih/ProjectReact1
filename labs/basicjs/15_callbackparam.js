//Contoh callback function dengan parameter
function haloCallback(fungsi, data) {
  console.log("Ini adalah function haloCallback");
  fungsi(data); // Memanggil function callback dengan data
  console.log("______________________________");
}

function tampilkanData(nama) {
  console.log(`Halo, ${nama}! Ini adalah data yang ditampilkan.`);
}

// Memanggil function haloCallback dengan function tampilkanData sebagai callback
haloCallback(tampilkanData, "Budi");
// Memanggil function haloCallback dengan function biasa sebagai callback
haloCallback(function cetakData(nama) {
  console.log(`Halo, ${nama}! Ini adalah data yang ditampilkan dengan function biasa.`);
}, "Cici");
// Memanggil function haloCallback dengan arrow function sebagai callback
haloCallback(
  (cetakData = (nama) => {
    console.log(`Halo, ${nama}! Ini adalah data yang ditampilkan dengan arrow function.`);
  }),
  "Andi"
);
// Memanggil function haloCallback dengan function anonymous sebagai callback
haloCallback(function (nama) {
  console.log(`Halo, ${nama}! Ini adalah data yang ditampilkan dengan function anonymous.`);
}, "Cici");
// Memanggil function haloCallback dengan arrow function anonymous sebagai callback
haloCallback(() => {
  console.log("Halo, ini adalah data yang ditampilkan dengan arrow function anonymous.");
}, "Dodi");
