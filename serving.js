const servingField = document.querySelector('.serving-field');

const flour = document.querySelector('.flour');
const sugar = document.querySelector('.sugar');
const eggs = document.querySelector('.eggs');
const bksoda = document.querySelector('.bksoda');
const butter = document.querySelector('.butter');
const vextract = document.querySelector('.vextract');
const choco = document.querySelector('.choco');
const serving = document.querySelector('.serving');


function updateValue() {
    if(!(servingField.value<=15)){
    flour.textContent = ((servingField.value*2)/15).toFixed(2);
    sugar.textContent =  ((servingField.value*2)/15).toFixed(2);
    eggs.textContent = Math.round((servingField.value*2)/15);
    bksoda.textContent=Math.round((servingField.value*1)/15);
    butter.textContent=Math.round((servingField.value*1)/15);
    vextract.textContent=Math.round((servingField.value*1)/15);
    choco.textContent=Math.round((servingField.value*1)/15);
    serving.textContent = servingField.value;
    }
    else{
        flour.textContent=2;
        sugar.textContent=2;
        eggs.textContent=2;
        bksoda.textContent=1;
        butter.textContent=1;
        vextract.textContent=1;
        choco.textContent=1;
        serving.textContent=15;
    }
}
servingField.addEventListener("input", updateValue);

