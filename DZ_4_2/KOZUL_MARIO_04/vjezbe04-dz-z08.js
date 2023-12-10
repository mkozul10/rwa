function Calculator(){

    const zbroji = (a, b) => a + b;
    const oduzmi = (a, b) => a - b;
    const pomnozi = (a, b) => a * b;
    const podjeli = (a, b) => (a / b).toFixed(3);
    const sin = a => Math.sin(a);
    const cos = a => Math.cos(a);
    const tan = a => Math.tan(a);
    const ln = a => Math.log(a);
    const log = a => Math.log10(a);
    const kvadrat = a => a ** 2;
    const kub = a => a ** 3;
    const n = (a, n) => a ** n;
    
    return { zbroji, oduzmi, pomnozi, podjeli, sin, cos, tan, ln, log, kvadrat, kub, n }
}

function manipulatingDOM(){
    const calculator = Calculator();

    const input1 = document.querySelector('#op-1');
    const input2 = document.querySelector('#op-2');
    const buttons = document.querySelectorAll('button');

    const clear = () => (input1.value = '', input2.value = '');

    const validation = (cond = true) => {
        if(cond){
            if (input1.value === '' || input2.value === ''){
                alert('Both operands are needed');
                clear();
                return true; 
            }
        }
        else {
            if((!input1.value && !input2.value) || (input1.value && input2.value)){
                alert('One operand is needed');
                clear();
                return true;
            }
        } 
    }

    const izvediOperaciju = e => {
        const operand = e.target.dataset.value;

        switch(operand){
            case '+': {
                if(validation()) break;
                alert(`${input1.value} + ${input2.value} = ${calculator.zbroji(+input1.value, +input2.value)}`);
                clear();
                break;
            }
            case '-': {
                if(validation()) break;
                alert(`${input1.value} - ${input2.value} = ${calculator.oduzmi(+input1.value, +input2.value)}`);
                clear();
                break;
            }
            case '*': {
                if(validation()) break;
                alert(`${input1.value} * ${input2.value} = ${calculator.pomnozi(+input1.value, +input2.value)}`);
                clear();
                break;
            }
            case '/': {
                if(validation()) break;
                alert(`${input1.value} / ${input2.value} = ${calculator.podjeli(+input1.value, +input2.value)}`);
                clear();
                break;
            }
            case 'sin': {
                if(validation('')) break;
                const input = input1.value || input2.value;
                alert(`sin(${input}) = ${calculator.sin(+input)}`);
                clear();
                break;
            }
            case 'cos': {
                if(validation('')) break;
                const input = input1.value || input2.value;
                alert(`cos(${input}) = ${calculator.cos(+input)}`);
                clear();
                break;
            }
            case 'tan': {
                if(validation('')) break;
                const input = input1.value || input2.value;
                alert(`tan(${input}) = ${calculator.tan(+input)}`);
                clear();
                break;
            }
            case 'ln': {
                if(validation('')) break;
                const input = input1.value || input2.value;
                alert(`ln(${input}) = ${calculator.ln(+input)}`);
                clear();
                break;
            }
            case 'log': {
                if(validation('')) break;
                const input = input1.value || input2.value;
                alert(`log(${input}) = ${calculator.log(+input)}`);
                clear();
                break;
            }
            case '⌃2': {
                if(validation('')) break;
                const input = input1.value || input2.value;
                alert(`${input}⌃2 = ${calculator.kvadrat(+input)}`);
                clear();
                break;
            }
            case '⌃3': {
                if(validation('')) break;
                const input = input1.value || input2.value;
                alert(`${input}⌃3 = ${calculator.kub(+input)}`);
                clear();
                break;
            }
            case '⌃n': {
                if(validation()) break;
                alert(`${input1.value} ⌃${input2.value} = ${calculator.n(+input1.value, input2.value)}`);
                clear();
                break;
            }
        }
        
    }

    buttons.forEach(button => button.addEventListener('click',izvediOperaciju));
}
manipulatingDOM();