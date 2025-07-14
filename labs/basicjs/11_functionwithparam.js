//Function dengan 1 parameter
//Versi non arrow function
function halo(nama) {
  console.log(`Halo, ${nama}!`);
}
//Versi arrow function versi 1
haloArrow1 = (nama) => {
  console.log(`Halo, ${nama}! ini adalah versi arrow 1`);
};

//Memanggil function dengan parameter
halo("Budi");
haloArrow1("Andi");
