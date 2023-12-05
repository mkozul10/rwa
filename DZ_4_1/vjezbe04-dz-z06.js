// Kreirati objekat pas čije je ime Reks i ima 2 godine. 
// Nakon kreiranja objekta dodati mu i funkcijsku osobinu "zvuk",
// koja prilikom poziva vraća vrijednost "AVAV!„ 

const pas = {
   name: 'Reks',
   age: 2,
};
pas.bark = () => 'AVAV';

console.log(pas.bark());