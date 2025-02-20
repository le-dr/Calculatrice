const ecran = document.getElementById("ecran");

var nombre1 = ""

var nombre2 = ""

var signe = ""

var nombre = ""


function chiffreAtr(chiffre){

    if(signe == ""){
        nombre1 = nombre1 + chiffre

        ecran.innerText = nombre1
    }
    else{
        nombre2 = nombre2 + chiffre

        ecran.innerText = nombre2
    }
}

function bouttonC(){
    nombre1 = ""
    nombre2 = ""
    signe = ""
    ecran.innerText = ""
}

function signeAtr(cara){
    signe = cara
}



function resultat(){
    if(signe == "*"){
        nombre1 = parseFloat(nombre1)*parseFloat(nombre2)
        nombre2 = ""
    }
    if(signe == "+"){
        nombre1 = parseFloat(nombre1)+parseFloat(nombre2)
        nombre2 = ""
    }
    if(signe == "-"){
        nombre1 = parseFloat(nombre1)-parseFloat(nombre2)
        nombre2 = ""
    }
    if(signe == "/"){
        nombre1 = parseFloat(nombre1)/parseFloat(nombre2)
        nombre2 = ""
    }
    if(signe == "^"){
        nombre1 = parseFloat(nombre1)**parseFloat(nombre2)
        nombre2 = ""
    }
    if(signe == "√"){
        nombre1 = Math.sqrt(parseFloat(nombre1))
    }
ecran.innerText = nombre1
}












