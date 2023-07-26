const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.display span');
const signs = document.querySelectorAll('.oper'); 
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals'); 
const percent = document.querySelector('.percent'); 
const deleteN = document.querySelector('.delete'); 

let firstValue = "";
let isFisrtValue = false; 
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if (isFisrtValue === false) {
            getFirstValue(atr); 
        }
        if (isSecondValue === false) {
            getSecondValue(atr); 
        }
    });
}

function getFirstValue(el) { 
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el){
    if(firstValue!= "" && sign!= ""){
        secondValue+=el;
        result.innerHTML=secondValue;
        secondValue=+secondValue; 
    }
}

function getSign() {
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isFisrtValue = true; 
            
        });
    }
}

getSign();

equals.addEventListener('click',() =>{
    result.innerHTML="";
    if(sign==="+"){
        resultValue=firstValue+secondValue;
    }else if(sign==="-"){
        resultValue=firstValue-secondValue;
    }else if(sign==="*"){
        resultValue=firstValue*secondValue;
    }else if(sign==="/"){
        resultValue=firstValue/secondValue;
    }
    result.innerHTML=resultValue;
    firstValue=resultValue;
    secondValue="";
})

clear.addEventListener('click',() =>{
    result.innerHTML=0;
    firstValue="";
    isFisrtValue=false;
    secondValue="";
    isSecondValue=false;
    sign="";
    resultValue=0;

})

percent.addEventListener('click',()=>{
    result.innerHTML="";
    if(firstValue!=""){
        resultValue=firstValue/100;
        firstValue=resultValue;
    }
    if(firstValue!="" && secondValue!="" && sign!=""){
        resultValue=resultValue/100;
    }
    result.innerHTML=resultValue;
})

deleteN.addEventListener('click',()=>{
    if(firstValue!=""){
        firstValue=firstValue.toString().slice(0,-1)
        result.innerHTML=firstValue;
    }

    if(firstValue!="" && secondValue!="" && sign!=""){
        secondValue=secondValue.toString().slice(0,-1)
        result.innerHTML=secondValue;
    }
    


})