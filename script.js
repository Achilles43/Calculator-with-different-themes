let deleteBtn = document.getElementById("delete-btn")
let resetBtn = document.getElementById("reset-btn")
let input = document.getElementById("main-input")
let equalsBtn = document.getElementById("equals-btn")

function del() {
    input.value = input.value.substr(0, input.value.length-1);
}

let span1 = document.getElementById("span-1")
let span2 = document.getElementById("span-2")
let span3 = document.getElementById("span-3")
let circle = document.querySelector(".circle-inside");
let body = document.querySelector("body")
let themeSpan = document.getElementById("theme-span")
let calcSpan = document.getElementById("calc-span")
let outsideCircle = document.querySelector(".small-circle")
let containerEl = document.querySelector(".container")
let btn0 = document.querySelector(".btn-0")
let btn1 = document.querySelector(".btn-1")
let btn2 = document.querySelector(".btn-2")
let btn3 = document.querySelector(".btn-3")
let btn4 = document.querySelector(".btn-4")
let btn5 = document.querySelector(".btn-5")
let btn6 = document.querySelector(".btn-6")
let btn7 = document.querySelector(".btn-7")
let btn8 = document.querySelector(".btn-8")
let btn9 = document.querySelector(".btn-9")
let btnPlus = document.querySelector(".btn-plus")
let btnMinus = document.querySelector(".btn-minus")
let btnDivide = document.querySelector(".btn-divide")
let btnMultiply = document.querySelector(".btn-multiply")
let btnDot = document.querySelector(".btn-dot")
let allBtns = document.querySelectorAll("button")
let circleInside = document.querySelector(".circle-inside")

span1.addEventListener("click", () => {
    circle.style="left:8%";
    input.style="color:white;background:hsl(223,37%,15%);transition:300ms ease";
    themeSpan.style="color:white";
    calcSpan.style="color:white"
    body.style="background:hsl(221,27%,31%); transition:300ms ease";
    outsideCircle.style="background:hsl(224,31%,21%);"
    containerEl.style="background:hsl(223,31%,20%);border:30px solid hsl(223,31%,20%);transition:300ms ease"
    deleteBtn.style="background:hsl(225,21%,49%);box-shadow:0 2.5px hsl(225,21%,49%);"
    resetBtn.style="background:hsl(225,21%,49%)"
    equalsBtn.style="background:hsl(6,63%,50%);"
    span1.style="color:white";
    span2.style="color:white";
    span3.style="color:white";
    btn0.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn1.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn2.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn3.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn4.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn5.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn6.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn7.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn8.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn9.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btnPlus.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btnMinus.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btnDivide.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btnMultiply.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btnDot.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    resetBtn.addEventListener("mousedown", () => {
        resetBtn.style="background:hsl(185,41%,56%)"
    })
    resetBtn.addEventListener("mouseup", () => {
        resetBtn.style="background:hsl(185, 42%, 37%)"
    })
    deleteBtn.addEventListener("mousedown", () => {
        deleteBtn.style="background:hsl(185,41%,56%)"
    })
    deleteBtn.addEventListener("mouseup", () => {
        deleteBtn.style="background:hsl(185, 42%, 37%)"
    })
    equalsBtn.addEventListener("mousedown", () => {
        equalsBtn.style="background:hsl(25,100%,61%)"
    })
    equalsBtn.addEventListener("mouseup", () => {
        equalsBtn.style="background:hsl(6,63%,50%)"
    })
    btn0.addEventListener("mousedown", () => {
        btn0.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";  
    })
    btn0.addEventListener("mouseup", () => {
        btn0.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn1.addEventListener("mousedown", () => {
        btn1.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn1.addEventListener("mouseup", () => {
        btn1.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn2.addEventListener("mousedown", () => {
        btn2.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn2.addEventListener("mouseup", () => {
        btn2.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn3.addEventListener("mousedown", () => {
        btn3.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn3.addEventListener("mouseup", () => {
        btn3.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn4.addEventListener("mousedown", () => {
        btn4.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn4.addEventListener("mouseup", () => {
        btn4.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn5.addEventListener("mousedown", () => {
        btn5.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn5.addEventListener("mouseup", () => {
        btn5.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn6.addEventListener("mousedown", () => {
        btn6.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn6.addEventListener("mouseup", () => {
        btn6.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn7.addEventListener("mousedown", () => {
        btn7.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn7.addEventListener("mouseup", () => {
        btn7.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn8.addEventListener("mousedown", () => {
        btn8.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn8.addEventListener("mouseup", () => {
        btn8.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn9.addEventListener("mousedown", () => {
        btn9.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn9.addEventListener("mouseup", () => {
        btn9.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btnPlus.addEventListener("mousedown", () => {
        btnPlus.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btnPlus.addEventListener("mouseup", () => {
        btnPlus.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btnMinus.addEventListener("mousedown", () => {
        btnMinus.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btnMinus.addEventListener("mouseup", () => {
        btnMinus.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btnDivide.addEventListener("mousedown", () => {
        btnDivide.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btnDivide.addEventListener("mouseup", () => {
        btnDivide.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btnMultiply.addEventListener("mousedown", () => {
        btnMultiply.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btnMultiply.addEventListener("mouseup", () => {
        btnMultiply.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btnDot.addEventListener("mousedown", () => {
        btnDot.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btnDot.addEventListener("mouseup", () => {
        btnDot.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
})
span2.addEventListener("click", () => {
    circle.style="left:38%";
    input.style="color:black;background:hsl(0,0%,93%);transition:300ms ease";
    themeSpan.style="color:black";
    calcSpan.style="color:black"
    body.style="background:hsl(0,0%,90%); transition:300ms ease";
    outsideCircle.style="background:hsl(0,6%,82%);"
    containerEl.style="background:hsl(0,6%,82%);border:30px solid hsl(0,6%,82%);transition:300ms ease"
    deleteBtn.style="background:hsl(185, 42%, 37%);box-shadow:0 2.5px hsl(185, 58%, 25%);"
    resetBtn.style="background:hsl(185, 42%, 37%)"
    equalsBtn.style="background:hsl(25, 98%, 40%);"
    span1.style="color:black";
    span2.style="color:black";
    span3.style="color:black";
    btn0.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn1.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn2.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn3.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn4.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn5.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn6.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn7.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn8.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btn9.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btnPlus.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btnMinus.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btnDivide.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btnMultiply.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    btnDot.style="background:hsl(30,25%,89%); color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(35,10%,61%)";
    resetBtn.addEventListener("mousedown", () => {
        resetBtn.style="background:hsl(185,41%,56%)"
    })
    resetBtn.addEventListener("mouseup", () => {
        resetBtn.style="background:hsl(185, 42%, 37%)"
    })
    deleteBtn.addEventListener("mousedown", () => {
        deleteBtn.style="background:hsl(185,41%,56%)"
    })
    deleteBtn.addEventListener("mouseup", () => {
        deleteBtn.style="background:hsl(185, 42%, 37%)"
    })
    equalsBtn.addEventListener("mousedown", () => {
        equalsBtn.style="background:hsl(25,100%,61%)"
    })
    equalsBtn.addEventListener("mouseup", () => {
        equalsBtn.style="background:hsl(25, 98%, 40%)"
    })
    btn0.addEventListener("mousedown", () => {
        btn0.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";  
    })
    btn0.addEventListener("mouseup", () => {
        btn0.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn1.addEventListener("mousedown", () => {
        btn1.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn1.addEventListener("mouseup", () => {
        btn1.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn2.addEventListener("mousedown", () => {
        btn2.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn2.addEventListener("mouseup", () => {
        btn2.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn3.addEventListener("mousedown", () => {
        btn3.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn3.addEventListener("mouseup", () => {
        btn3.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn4.addEventListener("mousedown", () => {
        btn4.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn4.addEventListener("mouseup", () => {
        btn4.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn5.addEventListener("mousedown", () => {
        btn5.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn5.addEventListener("mouseup", () => {
        btn5.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn6.addEventListener("mousedown", () => {
        btn6.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn6.addEventListener("mouseup", () => {
        btn6.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn7.addEventListener("mousedown", () => {
        btn7.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn7.addEventListener("mouseup", () => {
        btn7.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn8.addEventListener("mousedown", () => {
        btn8.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn8.addEventListener("mouseup", () => {
        btn8.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btn9.addEventListener("mousedown", () => {
        btn9.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btn9.addEventListener("mouseup", () => {
        btn9.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btnPlus.addEventListener("mousedown", () => {
        btnPlus.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btnPlus.addEventListener("mouseup", () => {
        btnPlus.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btnMinus.addEventListener("mousedown", () => {
        btnMinus.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btnMinus.addEventListener("mouseup", () => {
        btnMinus.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btnDivide.addEventListener("mousedown", () => {
        btnDivide.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btnDivide.addEventListener("mouseup", () => {
        btnDivide.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btnMultiply.addEventListener("mousedown", () => {
        btnMultiply.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btnMultiply.addEventListener("mouseup", () => {
        btnMultiply.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)"
    })
    btnDot.addEventListener("mousedown", () => {
        btnDot.style="background:white;color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
    btnDot.addEventListener("mouseup", () => {
        btnDot.style="background:hsl(30,25%,89%);color:hsl(60,7%,25%);box-shadow:0 2.5px hsl(36,10%,61%)";
    })
})
span3.addEventListener("click", () => {
    circle.style="left:72.5%; background:hsl(179,98%,78%)";
    input.style="color:hsl(52,98%,61%);background:hsl(269,74%,12%);transition:300ms ease";
    themeSpan.style="color:hsl(52,98%,61%)";
    calcSpan.style="color:hsl(52,98%,61%)"
    body.style="background:hsl(268,75%,9%); transition:300ms ease";
    outsideCircle.style="background:hsl(269,74%,12%);"
    containerEl.style="background:hsl(269,74%,12%);border:30px solid hsl(269,74%,12%);transition:300ms ease"
    deleteBtn.style="background:hsl(185, 42%, 37%);box-shadow:0 2.5px hsl(185, 58%, 25%);"
    resetBtn.style="background:hsl(185, 42%, 37%)"
    equalsBtn.style="background:hsl(25, 98%, 40%);"
    span1.style="color:hsl(52,98%,61%)";
    span2.style="color:hsl(52,98%,61%)";
    span3.style="color:hsl(52,98%,61%)";
    deleteBtn.style="background:hsl(281, 89%, 26%);box-shadow:0 2.5px hsl(285, 91%, 52%);"
    resetBtn.style="background:hsl(281, 89%, 26%); box-shadow:0 2.5px hsl(285, 91%, 52%)"
    equalsBtn.style="background:hsl(176, 100%, 44%); box-shadow:0 2.5px hsl(177, 92%, 70%); color:black;"
    btn0.style="background:hsl(269,48%,20%); color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    btn1.style="background:hsl(269,48%,20%); color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    btn2.style="background:hsl(269,48%,20%); color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    btn3.style="background:hsl(269,48%,20%); color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    btn4.style="background:hsl(269,48%,20%); color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    btn5.style="background:hsl(269,48%,20%); color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    btn6.style="background:hsl(269,48%,20%); color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    btn7.style="background:hsl(269,48%,20%); color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    btn8.style="background:hsl(269,48%,20%); color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    btn9.style="background:hsl(269,48%,20%); color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    btnPlus.style="background:hsl(269,48%,20%); color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    btnMinus.style="background:hsl(269,48%,20%); color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    btnDivide.style="background:hsl(269,48%,20%); color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    btnMultiply.style="background:hsl(269,48%,20%); color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    btnDot.style="background:hsl(269,48%,20%); color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    
    btn0.addEventListener("mousedown", () => {
        btn0.style="background:hsl(267,54%,44%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";  
    })
    btn0.addEventListener("mouseup", () => {
        btn0.style="background:hsl(269,47%,20%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)"
    })
    btn1.addEventListener("mousedown", () => {
        btn1.style="background:hsl(267,54%,44%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    })
    btn1.addEventListener("mouseup", () => {
        btn1.style="background:hsl(269,47%,20%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)"
    })
    btn2.addEventListener("mousedown", () => {
        btn2.style="background:hsl(267,54%,44%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    })
    btn2.addEventListener("mouseup", () => {
        btn2.style="background:hsl(269,47%,20%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)"
    })
    btn3.addEventListener("mousedown", () => {
        btn3.style="background:hsl(267,54%,44%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    })
    btn3.addEventListener("mouseup", () => {
        btn3.style="background:hsl(269,47%,20%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)"
    })
    btn4.addEventListener("mousedown", () => {
        btn4.style="background:hsl(267,54%,44%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    })
    btn4.addEventListener("mouseup", () => {
        btn4.style="background:hsl(269,47%,20%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)"
    })
    btn5.addEventListener("mousedown", () => {
        btn5.style="background:hsl(267,54%,44%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    })
    btn5.addEventListener("mouseup", () => {
        btn5.style="background:hsl(269,47%,20%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)"
    })
    btn6.addEventListener("mousedown", () => {
        btn6.style="background:hsl(267,54%,44%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    })
    btn6.addEventListener("mouseup", () => {
        btn6.style="background:hsl(269,47%,20%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)"
    })
    btn7.addEventListener("mousedown", () => {
        btn7.style="background:hsl(267,54%,44%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    })
    btn7.addEventListener("mouseup", () => {
        btn7.style="background:hsl(269,47%,20%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)"
    })
    btn8.addEventListener("mousedown", () => {
        btn8.style="background:hsl(267,54%,44%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    })
    btn8.addEventListener("mouseup", () => {
        btn8.style="background:hsl(269,47%,20%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)"
    })
    btn9.addEventListener("mousedown", () => {
        btn9.style="background:hsl(267,54%,44%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    })
    btn9.addEventListener("mouseup", () => {
        btn9.style="background:hsl(269,47%,20%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)"
    })
    btnPlus.addEventListener("mousedown", () => {
        btnPlus.style="background:hsl(267,54%,44%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    })
    btnPlus.addEventListener("mouseup", () => {
        btnPlus.style="background:hsl(269,47%,20%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)"
    })
    btnMinus.addEventListener("mousedown", () => {
        btnMinus.style="background:hsl(267,54%,44%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    })
    btnMinus.addEventListener("mouseup", () => {
        btnMinus.style="background:hsl(269,47%,20%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)"
    })
    btnDivide.addEventListener("mousedown", () => {
        btnDivide.style="background:hsl(267,54%,44%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    })
    btnDivide.addEventListener("mouseup", () => {
        btnDivide.style="background:hsl(269,47%,20%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)"
    })
    btnMultiply.addEventListener("mousedown", () => {
        btnMultiply.style="background:hsl(267,54%,44%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    })
    btnMultiply.addEventListener("mouseup", () => {
        btnMultiply.style="background:hsl(269,47%,20%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)"
    })
    btnDot.addEventListener("mousedown", () => {
        btnDot.style="background:hsl(267,54%,44%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    })
    btnDot.addEventListener("mouseup", () => {
        btnDot.style="background:hsl(269,47%,20%);color:hsl(52,100%,64%);box-shadow:0 2.5px hsl(290, 70%, 36%)";
    })
    resetBtn.addEventListener("mousedown", () => {
        resetBtn.style="background:hsl(281,56%,44%); box-shadow:0 2.5px hsl(285,91%,52%)"
    })
    resetBtn.addEventListener("mouseup", () => {
        resetBtn.style="background:hsl(281,89%,26%); box-shadow:0 2.5px hsl(285,91%,52%)"
    })
    deleteBtn.addEventListener("mousedown", () => {
        deleteBtn.style="background:hsl(281,56%,44%); box-shadow:0 2.5px hsl(285,91%,52%)"
    })
    deleteBtn.addEventListener("mouseup", () => {
        deleteBtn.style="background:hsl(281,89%,26%); box-shadow:0 2.5px hsl(285,91%,52%)"
    })
    equalsBtn.addEventListener("mousedown", () => {
        equalsBtn.style="background:hsl(177,100%,79%); box-shadow: 0 2.5px hsl(177,92%,70%); color:black;"
    })
    equalsBtn.addEventListener("mouseup", () => {
        equalsBtn.style="background:hsl(176,100%,44%); box-shadow: 0 2.5px hsl(177,92%,70%); color:black"
    })
})
