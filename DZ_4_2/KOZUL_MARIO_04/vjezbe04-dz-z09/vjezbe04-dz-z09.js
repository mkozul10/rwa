const prekidac = document.querySelector('#prekidac-img');
const zarulja = document.querySelector('#zarulja-img');
const f = () => {
    const prekidacFile = prekidac.src.split('/').at(-1);
    prekidacFile === 'off.png' ? change() : change(1);
}
prekidac.addEventListener('click', f);
const change = (cond = false) => cond ? (prekidac.src = 'off.png', zarulja.src = 'zaruljaOff.png') : (prekidac.src = 'on.png', zarulja.src = 'zaruljaOn.png');