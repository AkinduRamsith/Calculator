const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.span');
const signs = document.querySelectorAll('.oper'); 
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals'); 
const percent = document.querySelector('.percent'); 
const deleteN = document.querySelector('.delete'); 
const dot = document.querySelector('.dot'); 

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
    result.value = "";
    firstValue += el
    result.value = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el){
    if(firstValue!= "" && sign!= ""){
        secondValue+=el;
        result.value=secondValue;
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
    result.value="";
    if(sign==="+"){
        resultValue=firstValue+secondValue;
    }else if(sign==="-"){
        resultValue=firstValue-secondValue;
    }else if(sign==="*"){
        resultValue=firstValue*secondValue;
    }else if(sign==="/"){
        resultValue=firstValue/secondValue;
    }
    result.value=resultValue;
    firstValue=resultValue;
    secondValue="";
})

clear.addEventListener('click',() =>{
    result.value=0;
    firstValue="";
    isFisrtValue=false;
    secondValue="";
    isSecondValue=false;
    sign="";
    resultValue=0;

})

percent.addEventListener('click',()=>{
    result.value="";
    if(firstValue!=""){
        resultValue=firstValue/100;
        firstValue=resultValue;
    }
    if(firstValue!="" && secondValue!="" && sign!=""){
        resultValue=resultValue/100;
    }
    result.value=resultValue;
})

deleteN.addEventListener('click',()=>{
    if(firstValue!=""){
        firstValue=firstValue.toString().slice(0,-1);
        result.value=firstValue;
    }

    if(firstValue!="" && secondValue!="" && sign!=""){
        secondValue=secondValue.toString().slice(0,-1);
        result.value=secondValue;
    }
    
    


})

dot.addEventListener('click',()=>{

           
            var lastNumber = lastNumber(result);
            if (lastNumber.indexOf(".") === -1) {
              
               if (lastNumber === "") {
                  result += "0";
               }
               result += dot;
            }
            
})