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
  ngebut() {
    console.log(`Mobil ${this.merek} ${this.tipe} ngebut`);
  }
}

// Membuat object dari class Mobil
let toyota = new Mobil("Toyota", "Avanza");
let honda = new Mobil("Honda", "Civic");
let ferrari = new MobilBalap("Ferrari", "488 GTB");
// Memanggil method dari object
toyota.jalan(); // Output: Mobil Toyota Avanza berjalan
toyota.berhenti(); // Output: Mobil Toyota Avanza berhenti
honda.jalan(); // Output: Mobil Honda Civic berjalan
honda.berhenti(); // Output: Mobil Honda Civic berhenti
ferrari.jalan(); // Output: Mobil Ferrari 488 GTB berjalan
ferrari.berhenti(); // Output: Mobil Ferrari 488 GTB berhenti
ferrari.ngebut(); // Output: Mobil Ferrari 488 GTB ngebut
