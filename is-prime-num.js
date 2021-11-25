/*
Cek apakah sebuah bilangan adalah bilangan prima

Input: 23
Output: 23 adalah bilangan prima

Edge Case; jika memasukan 0 atau angka negative maka return "harus memasukan angka mulai dari 2"
*/

function isPrime(num) {
  if (num <= 1) return `harus memasukkan angka mulai dari 2`; //min angka
  if (num % 2 == 0 && num > 2) return `${num} bukanlah bilangan prima`; //angka yang bisa dibagi 2
  const x = Math.sqrt(num); //angka yang bisa diakar
  for (let i = 3; i <= x; i += 2) {
    //mulai dari 3,increment 2, berhenti di akar
    if (num % i === 0) return `${num} bukanlah bilangan prima`; //yang bisa dibagi bilangan ganjil
  }
  return `${num} adalah bilangan prima`;
}

console.log(isPrime(23)); // 23 adalah bilangan prima
console.log(isPrime(7)); // 23 adalah bilangan prima
console.log(isPrime(0)); // harus memasukan angka mulai dari 2
console.log(isPrime(1)); // harus memasukan angka mulai dari 2
