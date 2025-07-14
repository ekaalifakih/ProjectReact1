//Class: blue print/ cetakan dari sebuah object
//dengan 1 class kita bisa membuat banyak object
class Mobil {
  jalan(namamobil) {
    console.log(`Mobil ${namamobil} berjalan`);
  }
  berhenti(namamobil) {
    console.log(`Mobil ${namamobil} berhenti`);
  }
}

//contoh class inheritance/turunan/extends
class MobilBalap extends Mobil {
  ngebut(namamobil) {
    console.log(`Mobil ${namamobil} ngebut`);
  }
}

//Membuat object dari class Mobil
let toyota = new Mobil();
let honda = new Mobil();
//Memanggil method dari object
toyota.jalan("toyota"); // Output: Mobil berjalan
toyota.berhenti("toyota"); // Output: Mobil berhenti
honda.jalan("honda"); // Output: Mobil berjalan
honda.berhenti("honda"); // Output: Mobil berhenti

let ferrari = new MobilBalap();
ferrari.ngebut("ferrari"); // Output: Mobil ferrari ngebut
