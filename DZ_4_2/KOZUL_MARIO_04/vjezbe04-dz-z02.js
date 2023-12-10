const p = document.createElement('p');
p.id = 'color';
const body = document.querySelector('body');
body.appendChild(p);
const btn = document.querySelector('#btn');
const f = e => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    console.log(r,g,b);
    const color = `rgb(${r},${g},${b})`;
    const body = document.querySelector('body');
    body.style.backgroundColor = color;
    p.innerText = color;
}
btn.addEventListener('click', f);