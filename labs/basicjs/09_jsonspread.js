//Json spread operator (...)
//ini digunakan untuk mengcopy 1 json ke json yang lain

const infoPerusahaan = {
  perusahaan: "PT. Teknologi Canggih",
  lokasi: {
    alamat: "Jl. Teknologi No. 1",
    kota: "Bandung",
    propinsi: "Jawa Barat",
  },
};

const infoKaryawan = {
  ...infoPerusahaan, //Menggunakan spread operator untuk mengcopy semua field dari infoPerusahaan
  nama: "Eka Alifakih",
  umur: 24,
  jenisKelamin: "Laki-laki",
  grade: "15A",
};

console.log(infoKaryawan);
