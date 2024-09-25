document.getElementById("Invia").onclick = function(){
    console.log("test");

let contenuto;
contenuto = document.getElementById("nome").value;
console.log(contenuto);

if (contenuto.length > 4 ){
    document.getElementById("risultato").innerHTML = contenuto;
}
else
{
    document.getElementById("risultato").innerHTML = ""; 
    //alert("Devi inserire almeno tre parole") in questo caso mi uscirà una finestra con il commento messo
}

}

