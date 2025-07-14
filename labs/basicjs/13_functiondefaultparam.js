//function dengan default param, value default dari suatu parameter langsung di inisiasi di dalam function
//Versi non arrow function
function haloDefault(nama = "Teman", umur = 20) {
  console.log(`Halo, ${nama}! Kamu berumur ${umur} tahun.`);
}
//Versi arrow function
haloDefaultArrow = (nama = "Teman", umur = 20) => {
  console.log(`Halo, ${nama}! Kamu berumur ${umur} tahun. Ini adalah versi arrow function.`);
};

//Memanggil function dengan default parameter
haloDefault("Budi", 25); // Menggunakan nilai yang diberikan
haloDefault(); // Menggunakan nilai default
haloDefaultArrow("Andi", 30); // Menggunakan nilai yang diberikan
haloDefaultArrow(); // Menggunakan nilai default
