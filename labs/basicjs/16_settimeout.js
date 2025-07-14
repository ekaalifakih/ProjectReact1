//setTimeout(fungsinya,durasinya) dalam milidetik
//Contoh penggunaan setTimeout
function tampilkanPesan() {
  console.log("Ini adalah pesan yang ditampilkan setelah 2 detik.");
}
setTimeout(tampilkanPesan, 2000); // Menampilkan pesan setelah 2 detik
setTimeout(function () {
  console.log("Ini adalah pesan yang ditampilkan setelah 3 detik dengan function biasa.");
}, 3000); // Menampilkan pesan setelah 3 detik dengan function biasa
setTimeout(() => {
  console.log("Ini adalah pesan yang ditampilkan setelah 4 detik dengan arrow function.");
}, 4000); // Menampilkan pesan setelah 4 detik dengan arrow function
