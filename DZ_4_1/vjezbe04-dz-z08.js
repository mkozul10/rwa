// Napisati JS funkciju koja za zadan ulazno polje (array of strings), kreira novo 
// polje (array of strings) i ispiše ga, a koje sadrži samo one vrijednost(nizove) 
// unutar polja s velikim slovima(najmanje 1) ili vrijednosti koji su sadržavali 5 
// ili više slova/brojeva;

const containsAtLeastFive = str => {
    const arr = str.split('');
    const res = arr.reduce((acc,el) => /^[A-Za-z0-9]$/.test(el) ? acc += 1 : acc, 0);
    return res >= 5 ? true : false;
}

const checkState = (string) => string.split('').some((char, index) => (string.charCodeAt(index) >= 65 && string.charCodeAt(index) <= 90) || containsAtLeastFive(string));

var arr = ['Ovo', 'je', 'My', 'prvi', 'komad', 'OF', 'JAVASCRIPT', 'koda', 'Koji', ',', 'je\'', 'proradio'];

const newArr = arr.filter(el => checkState(el));
console.log(newArr);