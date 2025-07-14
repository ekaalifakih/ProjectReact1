//Demo mengextract JSON dari object (json destructuring)
const info = {
  nama: "Eka Alifakih",
  lokasi: {
    alamat: "Kp Bali, Tanah Abang",
    kota: "Jakarta",
    propinsi: "DKI Jakarta",
  },
  umur: 24,
  jenisKelamin: "Laki-laki",
  grade: "15A",
};

//Mengextract data dari object info dengan cara baru (destructuring) ES6
const {
  nama: name, //Menggunakan alias jika diperlukan, bisa juga langsung nama
  lokasi: { alamat, kota, propinsi },
  umur,
  jenisKelamin,
  grade,
} = info;
console.log(
  `Identitas : ${name}, Alamat: ${alamat}, ${kota}, ${propinsi}. Umur: ${umur}, Jenis Kelamin: ${jenisKelamin}, Grade: ${grade}`
);

//Atau cara lain
// const {nama,umur,jenisKelamin,grade,} = info;
// const {alamat,kota,propinsi,} = info.lokasi;
