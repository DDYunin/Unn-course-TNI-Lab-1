let elems = document.getElementById("first-pack");
console.log(elems);

let secondElems = document.getElementById("second-pack");
console.log(secondElems);

const newElement = document.createElement('img');
newElement.alt = "card-6-buby";
newElement.src = "../img/card-6.jpg"
newElement.className = "image-size"

const newElement1 = document.createElement('img');
newElement1.alt = "card-7-buby";
newElement1.src = "../img/card-7.jpg"
newElement1.className = "image-size"

const newElement2 = document.createElement('img');
newElement2.alt = "card-8-buby";
newElement2.src = "../img/card-8.jpg"
newElement2.className = "image-size"

const newElement3 = document.createElement('img');
newElement3.alt = "card-9-buby";
newElement3.src = "../img/card-9.jpg"
newElement3.className = "image-size"

const newElement4 = document.createElement('img');
newElement4.alt = "card-10-buby";
newElement4.src = "../img/card-10.png"
newElement4.className = "image-size"

const newElement5 = document.createElement('img');
newElement5.alt = "card-valet-buby";
newElement5.src = "../img/card-valet.jpg"
newElement5.className = "image-size"

const newElement6 = document.createElement('img');
newElement6.alt = "card-dama-buby";
newElement6.src = "../img/card-dama.jpg"
newElement6.className = "image-size"

const newElement7 = document.createElement('img');
newElement7.alt = "card-king-buby";
newElement7.src = "../img/card-king.jpg"
newElement7.className = "image-size"

const newElement8 = document.createElement('img');
newElement8.alt = "card-tuz-buby";
newElement8.src = "../img/card-tuz.jpg"
newElement8.className = "image-size"

let all_elems = [newElement, newElement1, newElement2, newElement3, newElement4, newElement5, newElement6, newElement7, newElement8];
all_elems.sort(()=>Math.random()-0.5);

const button_mix = document.querySelector('#mix');
const button_restart = document.querySelector('#restart');

const button = document.querySelectorAll('.image-size');
console.log(button);

let i = 0;

function handleClick() {
    console.log('click_0');
    console.log(elems);
    console.log(secondElems);
    elems.removeChild(elems.lastChild);
    elems.removeChild(elems.lastChild);
    secondElems.append(all_elems[i]);
    console.log('click_1');
    console.log(elems);
    console.log(secondElems);
    i += 1;
    console.log(i);
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