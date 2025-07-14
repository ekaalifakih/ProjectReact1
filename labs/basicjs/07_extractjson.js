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

//Mengextract data dari object info dengan cara lama
const nama = info.nama;
const alamat = info.lokasi.alamat;
const kota = info.lokasi.kota;
const propinsi = info.lokasi.propinsi;
const umur = info.umur;
const jenisKelamin = info.jenisKelamin;
const grade = info.grade;
console.log(
  `Identitas : ${nama}, Alamat: ${alamat}, ${kota}, ${propinsi}. Umur: ${umur}, Jenis Kelamin: ${jenisKelamin}, Grade: ${grade}`
);

//Mengextract data dari object info dengan cara baru (destructuring)
