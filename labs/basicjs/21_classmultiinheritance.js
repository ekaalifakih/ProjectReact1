//Class dengan field
class Mobil {
  // Field atau properti dari class
  constructor(a, b) {
    this.merek = a; // Merek mobil
    this.tipe = b; // Tipe mobil
  }
  jalan() {
    console.log(`Mobil ${this.merek} ${this.tipe} berjalan`);
  }
  berhenti() {
    console.log(`Mobil ${this.merek} ${this.tipe} berhenti`);
  }
}
// Contoh class inheritance/turunan/extends
class MobilBalap extends Mobil {
  //Menambahkan construction untuk class turunan
  constructor(a, b, c) {
    super(a, b); // Memanggil constructor dari class induk
    this.cc = c; // Properti tambahan untuk class turunan
  }
  ngebut() {
    console.log(`Mobil ${this.merek} ${this.tipe} ${this.cc} ngebut`);
  }
}

class MobilBalapListrik extends MobilBalap {
  // Menambahkan constructor untuk class turunan
  constructor(a, b, c, d) {
    super(a, b, c); // Memanggil constructor dari class induk
    this.baterai = d; // Properti tambahan untuk class turunan
  }
  kapasitasbatrai() {
    console.log(
      `Mobil ${this.merek} ${this.tipe} ${this.cc} dengan baterai ${this.baterai} ngebut`
    );
  }
}

// Membuat object dari class Mobil
let toyota = new Mobil("Toyota", "Avanza");
let honda = new Mobil("Honda", "Civic");
let ferrari = new MobilBalap("Ferrari", "488 GTB", 2000);
let tesla = new MobilBalapListrik("Tesla", "Model S", 0, "100 kWh");
// Memanggil method dari object
toyota.jalan(); // Output: Mobil Toyota Avanza berjalan
toyota.berhenti(); // Output: Mobil Toyota Avanza berhenti
honda.jalan(); // Output: Mobil Honda Civic berjalan
honda.berhenti(); // Output: Mobil Honda Civic berhenti
ferrari.jalan(); // Output: Mobil Ferrari 488 GTB berjalan
ferrari.berhenti(); // Output: Mobil Ferrari 488 GTB berhenti
ferrari.ngebut(); // Output: Mobil Ferrari 488 GTB ngebut
tesla.jalan(); // Output: Mobil Tesla Model S berjalan
tesla.berhenti(); // Output: Mobil Tesla Model S berhenti
tesla.ngebut(); // Output: Mobil Tesla Model S 0 ngebut
tesla.kapasitasbatrai(); // Output: Mobil Tesla Model S 0 dengan baterai 100 kWh ngebut
