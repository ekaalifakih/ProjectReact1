//Callback Function dengan paramater function multi parameter
//Contoh callback function dengan parameter multi parameter
function demoCallback(num1, num2, fungsi) {
  fungsi(num1, num2); // Memanggil function callback dengan dua parameter
  console.log("______________________________");
}

function cetak(a, b) {
  console.log("a: " + a);
  console.log("b: " + b);
}

demoCallback(10, 20, cetak); // Memanggil demoCallback dengan function cetak sebagai callback
demoCallback(20, 30, () => {
  console.log("Ini adalah function anonymous sebagai callback dengan arrow function");
}); // Memanggil demoCallback dengan function anonymous sebagai callback
demoCallback(30, 40, function () {
  console.log("Ini adalah function anonymous sebagai callback dengan function biasa");
}); // Memanggil demoCallback dengan function anonymous sebagai callback
