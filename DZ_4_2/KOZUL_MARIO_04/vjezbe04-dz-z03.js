const form = document.querySelector('#form1');
const f = e => {
    e.preventDefault();
    const inputValue = document.querySelector('#input1').value;
    if(isNaN(+inputValue) || (!isNaN(+inputValue) && (+inputValue < 1 || +inputValue > 5))) alert('Your input is not valid');
    else {
        const number = +inputValue;
        switch(number){
            case 1:
                alert('1 – nedovoljan');
                break;
            case 2:
                alert('2 – dovoljan');
                break;
            case 3:
                alert('3 – dobar');
                break;
            case 4:
                alert('4 – vrlo dobar');
                break;
            case 5:
                alert('5 – odličan');
                break;
            default:
                break;
        }
    }
}

form.addEventListener('submit', f);