//CALLBACK Function adalah function yang dipanggil di dalam function lain. (function yang parameternya function lain)
//Contoh callback function
function duluan(callback) {
  console.log("Ini adalah function duluan");
  callback(); // Memanggil function callback
  console.log("______________________________");
}

function kemudian() {
  console.log("Ini adalah function kemudian");
}

// Memanggil function duluan dengan function kemudian sebagai callback
duluan(kemudian);
duluan(function lagi() {
  console.log("Ini adalah function lagi sebagai callback");
});
duluan(
  (lagi = () => {
    console.log("Ini adalah function lagi sebagai callback dengan arrow function");
  })
);
duluan(function () {
  console.log("Ini adalah function lagi sebagai callback dengan function anonymous");
});
duluan(() => {
  console.log("Ini adalah function lagi sebagai callback dengan arrow function anonymous");
});
duluan(() =>
  console.log(
    "Ini adalah function lagi sebagai callback dengan arrow function anonymous tanpa kurung"
  )
);
