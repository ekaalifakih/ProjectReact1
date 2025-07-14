//Promis: built in object yang digunakan untuk menghandle async operation
//Function biasa untuk generate angka acak
function generateRandomNumber() {
  let randomNo = Math.floor(Math.random() * 100);
  return randomNo;
}

//contoh promise yang digunakan untuk menunggu bilangan genap
//jika genap maka resolve, jika ganjil maka reject
let janji = new Promise((resolve, reject) => {
  setTimeout(() => {
    let angka = generateRandomNumber();
    if (angka % 2 === 0) {
      resolve(angka); // Jika angka genap, promise berhasil
    } else {
      reject(angka); // Jika angka ganjil, promise gagal
    }
  }, 1000); // Tunggu 2 detik sebelum menghasilkan angka
});

//Menggunakan promise dengan then dan catch
// janji
//   .then((angka) => {
//     console.log(`Angka yang dihasilkan adalah genap: ${angka}`);
//   })
//   .catch((angka) => {
//     console.log(`Angka yang dihasilkan adalah ganjil: ${angka}`);
//   })
//   .finally(() => {
//     console.log("Operasi selesai, baik berhasil maupun gagal.");
//   });

//Contoh mengunakan promise tanpa then dan catch
janji
  .then(
    function (angka) {
      console.log(`Operasi berhasil, angka yang dihasilkan adalah genap: ${angka}`);
    },
    (angka) => {
      console.log(`Angka yang dihasilkan adalah ganjil: ${angka}`);
    }
  )
  .finally(function () {
    console.log("Operasi selesai.");
  });
