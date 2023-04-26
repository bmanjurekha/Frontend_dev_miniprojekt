const servingField = document.querySelector('.serving-field');

const flour = document.querySelector('.flour');
const sugar = document.querySelector('.sugar');
const eggs = document.querySelector('.eggs');
const serving = document.querySelector('.serving')


function updateValue() {
    if(!(servingField.value<=15)){
    flour.textContent = ((servingField.value*2)/15).toFixed(2);
    sugar.textContent =  ((servingField.value*2)/15).toFixed(2);
    eggs.textContent = Math.round((servingField.value*2)/15);
    serving.textContent = servingField.value;
    }
    else{
        flour.textContent=2;
        sugar.textContent=2;
        eggs.textContent=2;
        serving.textContent=15;
    }
}
servingField.addEventListener("input", updateValue);

