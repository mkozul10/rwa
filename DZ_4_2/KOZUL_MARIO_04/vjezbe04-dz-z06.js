const form = document.querySelector('#form-1');

const f = e => {
    e.preventDefault();
    const x = document.querySelector('#input-x').value;
    const y = document.querySelector('#input-y').value;
    if(isNaN(+x) || isNaN(+y)) alert('Unosi moraju biti brojevi');
    else {
        const rezultat = document.querySelector('#rezultat');
        rezultat.value = (+x) + (+y);
    }
}

form.addEventListener('submit', f);