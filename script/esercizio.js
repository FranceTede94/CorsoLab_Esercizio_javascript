
document.getElementById("calcolo").onclick = function(){
    console.log("test")

let num1;
let num2;
num1=document.getElementById("numero1").value;
num2=document.getElementById("numero2").value;

document.getElementById("somma").innerHTML= parseInt(num1) + parseInt(num2);
document.getElementById("sottrazione").innerHTML= num1 - num2;
document.getElementById("moltiplicazione").innerHTML= (num1 * num2);
document.getElementById("divisione").innerHTML= (num1 / num2);


}



