const form = document.querySelector('#form1');
const f = e => {
    e.preventDefault();
    const inputValue = document.querySelector('#input1').value;
    if(isNaN(+inputValue) || (!isNaN(+inputValue) && (+inputValue < 1 || +inputValue > 5))) alert('Your input is not valid');
    else {
        const p = document.querySelector('#ocjena');
        const number = +inputValue;
        switch(number){
            case 1:
                p.innerText = '1 – nedovoljan';
                break;
            case 2:
                p.innerText = '2 – dovoljan';
                break;
            case 3:
                p.innerText = '3 – dobar';
                break;
            case 4:
                p.innerText = '4 – vrlo dobar';
                break;
            case 5:
                p.innerText = '5 – odličan';
                break;
            default:
                break;
        }
    }
}

form.addEventListener('submit', f);