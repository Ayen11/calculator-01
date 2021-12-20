let result = 0;
let aa = "0";
let bb = "0";
let op = "divide"
let firstNumber = true;

//******************************************** */
// setup operaator numbers
const plusBtn = document.querySelector('#plus');
plusBtn.addEventListener("click", () => {
    op = "plus";
    alert(op);
});

const minusBtn = document.querySelector('#minus');
minusBtn.addEventListener("click", () => {
    op = "minus";
    alert(op);
});

const multiplyBtn = document.querySelector('#multiply');
multiplyBtn.addEventListener("click", () => {
    op = "multiply";
    alert(op);
});

const divideBtn = document.querySelector('#divide');
divideBtn.addEventListener("click", () => {
    op = "divide";
    alert(op);
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
    firstNumber = false;
    if (operator == "plus") {
        result = a + b;
        alert(result)
    }
    else if (operator == "minus") {
        result = a - b;
        alert(result)
    }
    else if (operator == "multiply") {
        result = a * b;
        alert(result)
    }
    else if (operator == "divide") {
        result = a / b;
        alert(result)
    }
    
};

//******************************************** */
//add a number
function addNumber(number) {
    if (firstNumber == true) {
        aa = + number;
        alert("aa" + aa);
        }
        else {
        bb = + number;
        alert("bb" + bb);
        };
        return firstNumber = false;
};

const equalBtn = document.querySelector('#equal');
equalBtn.addEventListener("click", () => {
    result = operate(aa,bb,op);
    return firstNumber = true;
});