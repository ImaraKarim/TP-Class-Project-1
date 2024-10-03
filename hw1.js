/*
    Name: Imara Karim
    Date created: 9/17/2024
    Date Last Updated: 9/21/2024
    Purpose: Homework 1 JavaScript Form
*/

//date code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider code
let slider = document.getElementById("range")
    let output = document.getElementById("range slider")
    output.innerHTML = slider.value;

    slider.oninput = function () {output.innerHTML = this.value;};