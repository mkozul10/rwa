const form = document.querySelector('#form-1');

const formatValidation = (d, m, g) => {
    if(m > 12 || m < 1) return false; 
    if (isNaN(d) || isNaN(m) || isNaN(g)) return false;
    return true;
}

const dateValidation = (d, m, g) => {
    const date = new Date(g, m, d);
    if (date.getDate() === d && date.getMonth() === m && date.getFullYear() === g) return true;
    else return false;
}

const createAndCheckDate = (d, m, g) => {
    const addedDate = new Date(g, m, d).getTime();
    const currentDate = new Date().getTime();

    const difference = currentDate - addedDate;
    const days = difference / (1000 * 60 * 60 * 24);
    if (days < 0) {
        alert('You inputed date from future');
        return;
    }

    if(days > 365){
        const years = Math.floor(days / 365);
        alert(`Date is ${years} and ${Math.floor(days - years * 365)} days old`);
        return;
    }

    alert(`Date is ${Math.floor(days)} days old`);
    return;
}

const f = e => {
    e.preventDefault();

    const dan = +document.querySelector('#dan').value;
    const mjesec = +document.querySelector('#mjesec').value;
    const godina = +document.querySelector('#godina').value;

    if (!formatValidation(dan, mjesec, godina) || !dateValidation(dan, mjesec - 1, godina)){
        alert('Invalid date format');
        return;
    }
    
    createAndCheckDate(dan, mjesec - 1, godina);
}

form.addEventListener('submit', f);