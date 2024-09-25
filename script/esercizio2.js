document.getElementById("stampa").onclick = function(){
    console.log("test");

    let nomepersona;
    let cognomepersona;
    let indirizzocivico;
    
    nomepersona = document.getElementById("nome").value;
    console.log(nomepersona);
    cognomepersona = document.getElementById("cognome").value;
    console.log(cognomepersona);
    indirizzocivico = document.getElementById("indirizzocivico").value;
    console.log(indirizzocivico);

        //document.getElementById("datipersona").innerHTML = nomepersona;
        //document.getElementById("datipersona1").innerHTML = cognomepersona;

    if(nomepersona.length > 5, cognomepersona.length > 5){
        document.getElementById("datipersona").innerHTML = nomepersona;
        document.getElementById("datipersona1").innerHTML = cognomepersona;
        document.getElementById("datipersona2").innerHTML = indirizzocivico;
    } 
    else{
        document.getElementById("datipersona").innerHTML = "";
        document.getElementById("datipersona1").innerHTML = "";
        document.getElementById("datipersona2").innerHTML = "";
    }

}