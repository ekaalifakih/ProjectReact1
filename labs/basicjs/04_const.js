const tarifPajak = 0.5; //Variable yang digunakan untuk acuan dan tidak dapat dirubah di code berikutnya dengan value berbeda
let gaji = 100000000;
let pajak = gaji * tarifPajak;
let takeHomePay = gaji - pajak;

console.log(`Gaji: ${gaji}`);
console.log(`Tarif Pajak: ${tarifPajak}`);
console.log(`Pajak: ${pajak}`);
console.log("________________________________");
console.log(`Take Home Pay: ${takeHomePay}`);

//contoh perubahan const yang akan menyebabkan error
// tarifPajak = 0.6; //Uncommenting this line will cause an error because const cannot be reassigned
