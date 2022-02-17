// Javascript code by Edwin!
document.getElementById("calculation").addEventListener("click", calcArea);

// Event Function
function calcArea() {
//Input
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let num3 = +document.getElementById("num3").value;

// Process
    let area = num3*(num1 + num2)/2;
    let finalarea = 'The area of the trapezoid is' + area;

// Output

    document.getElementById("finalarea").innerHTML = finalarea;

}