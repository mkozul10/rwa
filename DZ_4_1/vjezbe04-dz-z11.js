// Polje sadrži datum i vrijednosti temperature kroz 24 sata. Napisati funkciju koja obrađuje ovo ulazno polje
// a ispisuje u konzoli: datum, najmanju i najveću dnevnu temperaturu, te prosječnu temperaturu za taj dan.

function calculatingTemperature(arr1){

    const arr = [...arr1];
    const check = () => {
        const date = new Date(arr[0]);
        const check1 = !isNaN(date.getTime());
    
        const temperatures = [...arr];
        temperatures.shift();
    
        const check2 = temperatures.every(el => typeof el === 'number');
    
        return (check1 && check2) ? true : false;
    }

    const f = () => {
        if(!check()) return console.log('Array is not formated well');
    
        arr.shift();
        const temperature = arr.reduce((acc, el) => acc += el, 0);
        const average = (temperature / arr.length).toFixed(4);
        const lowest = Math.min(...arr);
        const highest = Math.max(...arr);
        console.log(`temperature: ${temperature}, average: ${average}, lowest: ${lowest}, highest: ${highest}`);
    }
    
    return {
        f
    }
};

const consttempDay = ['2023-11-29', -1, 0, -0.5,0.5, 0, 1.2,1.8,2, 3, 4, 6, 9, 12, 7, 6, 6,8,5,4,2,3,2,1,0];

const obj = calculatingTemperature(consttempDay);
obj.f();