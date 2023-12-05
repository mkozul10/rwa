// Napisati javascript funkciju koja ima jedan ulazni argument koji je broj. Funkcija zatim ispisuje
// sve savršene brojeve od broja 1 do toga broja.

const isPerfect = num => {
    const nums = [];
    for(let i = 1; i < num; i++) if(num % i === 0) nums.push(i);
    const res = nums.reduce((acc, el) => acc += el, 0);
    return res === num ? true : false;
}

const f = br => {
    const result = [];
    for(let i = 1; i < br; i++) if(isPerfect(i)) result.push(i);

    return result ? result : `There are no perfect numbers below ${br}`;
}

console.log(f(129));