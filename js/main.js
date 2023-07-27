const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.span');
const signs = document.querySelectorAll('.oper'); 
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals'); 
const percent = document.querySelector('.percent'); 
const deleteN = document.querySelector('.delete'); 
const dot = document.querySelector('.dot'); 
const multi=document.querySelector('.multi')

let firstValue = "";
let isFirstValue = false; 
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;
let isDot=false;


for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if (isFirstValue === false) {
            getFirstValue(atr); 
        }
        if (isSecondValue === false) {
            getSecondValue(atr); 
        }
    });
}
multi.addEventListener('click',(f)=>{
    isDot=false;
    sign=f.target.getAttribute('name');
    isFirstValue=true;
});

function getFirstValue(el) { 
    result.value = "";
    firstValue += el
    
    result.value =firstValue;
    firstValue =+firstValue;
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
            isDot=false;
            sign = e.target.getAttribute('value');
            isFirstValue = true; 
            
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
    isFirstValue=false;
    secondValue="";
    isSecondValue=false;
    sign="";
    resultValue=0;
    isDot=false;

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

deleteN.addEventListener('click', () => {
    if (firstValue !== "" && sign === "") {
        firstValue = firstValue.toString().slice(0, -1);
        result.value = firstValue;
        if (firstValue !== "") {
            firstValue = +firstValue;
        } else {
            firstValue = 0;
        }
        resultValue = firstValue; 
    } else if (secondValue !== "") {
        secondValue = secondValue.toString().slice(0, -1);
        result.value = secondValue;
        if (secondValue !== "") {
            secondValue = +secondValue;
        } else {
            secondValue = 0;
        }
    }
});

  

dot.addEventListener('click',()=>{
    if (!isDot) { 
        if (!isFirstValue) {
            if (firstValue === "") {
                firstValue += "0";
            }
            firstValue += ".";
            result.value = firstValue;
            isDot = true; 
        } else if (!isSecondValue) {
            if (secondValue === "") {
                secondValue += "0";
            }
            secondValue += ".";
            result.value = secondValue;
            isDot = true; 
        } else {
            result.value = "0."; 
            isDot = true; 
        }
    }

    
            
})