// Napisati javascript funkciju koja ima dva ulazna argumenta koji su brojevi. Funkcija zatim 
// ispisuje pet random brojeva između ta dva broja.

const f = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 0; i < 5; i++) console.log(f(1,10));