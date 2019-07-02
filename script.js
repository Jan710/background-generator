var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function changeColor() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function randomColor(){
	color1.value = '#' + (0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	color2.value = '#' + (0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	changeColor();
}

changeColor();

color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);

button.addEventListener("mousedown", randomColor);



