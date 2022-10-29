let elems = document.getElementById("first-pack");

let secondElems = document.getElementById("second-pack");

let cardsNamesAlt = ['card-6-buby','card-7-buby','card-8-buby','card-9-buby','card-10-buby','card-valet-buby','card-dama-buby','card-king-buby', 'card-tuz-buby'];
let cardsSrc = ['img/card-6.jpg','img/card-7.jpg','img/card-8.jpg','img/card-9.jpg','img/card-10.png','img/card-valet.jpg','img/card-dama.jpg','img/card-king.jpg','img/card-tuz.jpg'];
let cardClassName = 'image-size';

let all_elems = []

for (let index = 0; index < cardsNamesAlt.length; index++) {
    all_elems[index] = document.createElement('img');
    all_elems[index].alt = cardsNamesAlt[index];
    all_elems[index].src = cardsSrc[index];
    all_elems[index].className = cardClassName;
};

all_elems.sort(()=>Math.random()-0.5);

const button_mix = document.querySelector('#mix');
const button_restart = document.querySelector('#restart');

const button = document.querySelectorAll('.image-size');

let i = 0;

function handleClick() {
    elems.removeChild(elems.lastChild);
    elems.removeChild(elems.lastChild);
    secondElems.append(all_elems[i]);
    i += 1;
};

button.forEach(function(userItem) {
    console.log(userItem);
    userItem.onclick = handleClick;
});

button_mix.onclick = function() {
    all_elems.sort(()=>Math.random()-0.5);
};

button_restart.onclick = function() {
    location. reload();
};