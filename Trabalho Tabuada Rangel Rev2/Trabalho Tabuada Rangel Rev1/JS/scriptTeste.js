//EDG por causa do meu nome EDIMAR GABRIEL
import {numbersEDG, operationsEDG, resultEDG, clearEDG, displayEDG, deleteLastEDG} from './QuerySelectorTeste.js';


numbersEDG.forEach((numberEDG) => {
    numberEDG.addEventListener("click", () => {
        
        if(displayEDG.textContent === "0"){
            displayEDG.textContent = "";
        }
        displayEDG.textContent += numberEDG.textContent;
    });
});    
;
  operationsEDG.forEach((opEDG) => {
    opEDG.addEventListener("click", () => {
        displayEDG.textContent += opEDG.textContent;
    }) 
});

resultEDG.addEventListener("click", () => {
    let tabuadaEDG = "";
    
    let operationIndiceEDG = displayEDG.textContent.indexOf('+');
    if(operationIndiceEDG !== -1){
        let numberEDG = parseInt(displayEDG.textContent.slice(0, operationIndiceEDG));
        for(let i = 1; i <= 10; i++){
            tabuadaEDG += `${parseFloat(numberEDG)} + ${i} = ${numberEDG + i}<br>`;
            displayEDG.innerHTML = tabuadaEDG;
        }
    }

    operationIndiceEDG = displayEDG.textContent.indexOf('-');
    if(operationIndiceEDG !== -1){
        let numberEDG = parseInt(displayEDG.textContent.slice(0, operationIndiceEDG));
        for(let i = 1; i <= 10; i++){
            tabuadaEDG += `${parseFloat(numberEDG)} - ${i} = ${numberEDG - i}<br>`;
            displayEDG.innerHTML = tabuadaEDG;
        }
    }

    operationIndiceEDG = displayEDG.textContent.indexOf('*');
    if(operationIndiceEDG !== -1){
        let numberEDG = parseInt(displayEDG.textContent.slice(0, operationIndiceEDG));
        for(let i = 1; i <= 10; i++){
            tabuadaEDG += `${parseFloat(numberEDG)} * ${i} = ${numberEDG * i}<br>`;
            displayEDG.innerHTML = tabuadaEDG;
        }
    }

    operationIndiceEDG = displayEDG.textContent.indexOf('/');
    if(operationIndiceEDG !== -1){
        let numberEDG = parseInt(displayEDG.textContent.slice(0, operationIndiceEDG));
        for(let i = 1; i <= 10; i++){
            tabuadaEDG += `${parseFloat(numberEDG)} / ${i} = ${numberEDG / i}<br>`;
            displayEDG.innerHTML = tabuadaEDG;
        }
    }
});

clearEDG.addEventListener("click", () => {
    if(displayEDG.textContent !== ""){
        displayEDG.textContent = "";
    }

});

deleteLastEDG.addEventListener("click", () => {
    if(displayEDG.textContent !== ""){
        let clearOneEDG = displayEDG.textContent.length;
        displayEDG.textContent = displayEDG.textContent.slice(0, clearOneEDG - 1);
    }
});