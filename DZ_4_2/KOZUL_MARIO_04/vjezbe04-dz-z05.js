const validation = (string) => {
    const arr = string.split('-');
    if(arr.length === 3 && /^[0-9]$/.test(arr[1]) && /^[A-Z]{3}$/.test(arr[0]) && /^[A-Z]{3}$/.test(arr[2])) return true;
    else return false;
}

const f = e => {
    e.preventDefault();
    const inputValue = document.querySelector('#input1').value;
    if(validation(inputValue)) alert(`Format ${inputValue} je ispravan`);
    else alert(`Format ${inputValue} nije ispravan`);
}
const form = document.querySelector('#form1');
form.addEventListener('submit', f);