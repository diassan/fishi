import {bonus} from "./lib.js";

const itemsEl = document.getElementById('items');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

function reactToClick(){
    console.log(itemsEl);
    const items = itemsEl.value;
    console.log(items,bonus(items));
    resultEl.textContent = bonus([items]);
}
calculateEl.addEventListener('click',reactToClick);