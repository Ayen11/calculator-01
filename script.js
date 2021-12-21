let result = 0;
let aa = "0";
let bb = "0";
let op = "+"
let firstNumberBool = true;


//******************************************** */
//setup display
const firstNumRef = document.querySelector('#firstNum');
firstNumRef.textContent = aa;

const opRef = document.querySelector('#op');
opRef.textContent = op;

const secondNumRef = document.querySelector("#secondNum");
secondNumRef.textContent = bb;

const resultRef = document.querySelector("#result");
resultRef.textContent = result;




//******************************************** */
// setup operator numbers
const plusBtn = document.querySelector('#plus');
plusBtn.addEventListener("click", () => {
    op = "+";
    opRef.textContent = op;
});

const minusBtn = document.querySelector('#minus');
minusBtn.addEventListener("click", () => {
    op = "-";
    opRef.textContent = op;
});

const multiplyBtn = document.querySelector('#multiply');
multiplyBtn.addEventListener("click", () => {
    op = "*";
    opRef.textContent = op;
});

const divideBtn = document.querySelector('#divide');
divideBtn.addEventListener("click", () => {
    op = "/";
    opRef.textContent = op;
});


//******************************************** */
// setup extra functions

const clearBtn = document.querySelector("#clear")
clearBtn.addEventListener("click", () =>{
    aa = "";
    bb = "";
    op = "";
    result = "";
    resultRef.textContent = result; 
    secondNumRef.textContent = bb;
    firstNumRef.textContent = aa;
    opRef.textContent = op;
});


//******************************************** */
//set up numbers buttons
const zeroBtn = document.querySelector('#zero');
zeroBtn.addEventListener("click", () => {
    addNumber("0")
});
const oneBtn = document.querySelector('#one');
oneBtn.addEventListener("click", () => {
    addNumber("1")
});
const twoBtn = document.querySelector('#two');
twoBtn.addEventListener("click", () => {
    addNumber("2")
});
const threeBtn = document.querySelector('#three');
threeBtn.addEventListener("click", () => {
    addNumber("3")
});
const fourBtn = document.querySelector('#four');
fourBtn.addEventListener("click", () => {
    addNumber("4")
});
const fiveBtn = document.querySelector('#five');
fiveBtn.addEventListener("click", () => {
    addNumber("5")
});
const sixBtn = document.querySelector('#six');
sixBtn.addEventListener("click", () => {
    addNumber("6")
});
const sevenBtn = document.querySelector('#seven');
sevenBtn.addEventListener("click", () => {
    addNumber("7")
});
const eightBtn = document.querySelector('#eight');
eightBtn.addEventListener("click", () => {
    addNumber("8")
});
const nineBtn = document.querySelector('#nine');
nineBtn.addEventListener("click", () => {
    addNumber("9")
});



//******************************************** */
// oprate function
function operate (a, b, operator) {
    a = parseInt(a);
    b = parseInt(b);
    firstNumberBool = false;
    if (operator == "+") {
        result = a + b;
        resultRef.textContent = result;
    }
    else if (operator == "-") {
        result = a - b;
        resultRef.textContent = result;
    }
    else if (operator == "*") {
        result = a * b;
        resultRef.textContent = result;
    }
    else if (operator == "/") {
        result = a / b;
        resultRef.textContent = result;
    }
    
};

//******************************************** */
//add a number
function addNumber(number) {
    if (firstNumberBool == true) {
        aa = + number;
        firstNumRef.textContent = aa;
        }
        else {
        bb = + number;
        secondNumRef.textContent = bb;
        };
        return firstNumberBool = false;
};

//******************************************** */
//calculate the equation - adding the equal button
const equalBtn = document.querySelector('#equal');
equalBtn.addEventListener("click", () => {
    result = operate(aa,bb,op);
    return firstNumberBool = true;
});