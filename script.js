//query elements 
const container = document.querySelector('.main_grid');
const btn = document.querySelector('#init_btn');

const randColor = Math.floor(Math.random() * 255);

btn.addEventListener('click', () => {
    const totalBoxes = +prompt('Please enter a number from 10 to 100', "50");
    if (totalBoxes > 100 || totalBoxes < 0) {
        alert('invalid value');
        return;}; 
    document.documentElement.style.setProperty('--boxes', totalBoxes);
    createBoxes(totalBoxes**2)});

//random rbg
const randInt = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
let rgbColors = () => `rgb(${randInt(0,255)},${randInt(0,255)},${randInt(0,255)})`;

//
const createBoxes = (boxes) => {
    const white = 255;
    const darkenRate = Math.floor(white/10);
    //if it has childnode. remove them first and then add new one
    container.replaceChildren();
    for (i=1;i<boxes + 1;i++) {
        const box = document.createElement('div');
        box.classList.add('grid_item',`box_${i}`);
        box.textContent = `*` //can be removed
        const initBckgrdColor = [white,white,white]
        let darkenBox
        
        // hover mouse for random color
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = rgbColors();
        });
        // darken the bckground after each visit
        box.addEventListener("mouseout", () => {
            let initialColor = darkenBox || initBckgrdColor
            let [r,g,b] = initialColor.map( element => element - darkenRate );
            box.style.backgroundColor = `rgb(${r},${g},${b})`;
            darkenBox = [r,g,b];})
            
        container.appendChild(box);
    }
}

