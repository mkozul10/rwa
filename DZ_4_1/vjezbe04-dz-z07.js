// Napravite anonimnu funkciju i postavite je kao vrijednost varijable. Naša bi 
// funkcija trebala raditi na ovaj način: 
// •	Ako je proslijeđen broj, vraća kvadrat tog broja;
// •	Inače vraća obavijest o pogrešci

const anonymous = (num) => typeof num === 'number' ? num * num : 'Error occured, variable provided needs to be number';

console.log(anonymous(8));