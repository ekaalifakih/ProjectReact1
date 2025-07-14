//Function dengan banyak parameter
//Versi non arrow function
function haloBanyak(nama, umur, kota) {
  console.log(`Halo, ${nama}! Kamu berumur ${umur} tahun dan tinggal di ${kota}.`);
}
//Versi arrow function
haloBanyakArrow = (nama, umur, kota) => {
  console.log(
    `Halo, ${nama}! Kamu berumur ${umur} tahun dan tinggal di ${kota}. Ini adalah versi arrow function.`
  );
};

haloBanyak("Budi", 25, "Jakarta");
haloBanyakArrow("Andi", 30, "Bandung");
