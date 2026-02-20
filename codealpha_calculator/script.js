let display = document.getElementById("display");
let buttons = document.querySelectorAll(".buttons button");
let historyList = document.getElementById("historyList");

let expression = "";

/* Calculator Logic */

buttons.forEach(btn => {

btn.addEventListener("click", () => {

let value = btn.innerText;

if(value == "C"){
expression = "";
display.innerText = "0";
}

else if(value == "⌫"){
expression = expression.slice(0,-1);
display.innerText = expression || "0";
}

else if(value == "="){
try{
let result = eval(expression.replace("×","*").replace("÷","/").replace("−","-"));

historyList.innerHTML += `<p>${expression} = ${result}</p>`;

expression = result.toString();
display.innerText = expression;
}
catch{
display.innerText = "Error";
expression="";
}
}

else{
expression += value;
display.innerText = expression;
}

});

});

/* Keyboard Support */

document.addEventListener("keydown", e => {

if((e.key >= 0 && e.key <=9) || "+-*/.%".includes(e.key)){
expression += e.key;
display.innerText = expression;
}

if(e.key === "Enter"){
let result = eval(expression);
historyList.innerHTML += `<p>${expression} = ${result}</p>`;
expression = result.toString();
display.innerText = expression;
}

if(e.key === "Backspace"){
expression = expression.slice(0,-1);
display.innerText = expression || "0";
}

});

/* Theme Toggle */

let themeBtn = document.getElementById("themeBtn");
let body = document.body;

let mode = 0;

themeBtn.onclick = () => {

mode++;

if(mode == 1){
body.className = "dark";
themeBtn.innerText = "⚫";
}

else if(mode == 2){
body.className = "black";
themeBtn.innerText = "☀";
}

else{
body.className = "";
mode = 0;
themeBtn.innerText = "🌙";
}

};

/* History Toggle */

let historyBtn = document.getElementById("historyBtn");
let historyPanel = document.getElementById("historyPanel");

historyBtn.onclick = () => {
historyPanel.classList.toggle("active");
};