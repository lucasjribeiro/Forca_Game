import { levelFacil, levelMedio, levelDificil, levelExpert } from './person_body.js';

var input = document.querySelectorAll("input");

input[0].addEventListener("click", function(){ teste(["A","Á","À","Â","Ã"]); });
input[1].addEventListener("click", function(){ teste("B"); });
input[2].addEventListener("click", function(){ teste(["C","Ç"]); });
input[3].addEventListener("click", function(){ teste("D"); });
input[4].addEventListener("click", function(){ teste(["E","É","È","Ê"]); });
input[5].addEventListener("click", function(){ teste("F"); });
input[6].addEventListener("click", function(){ teste("G"); });
input[7].addEventListener("click", function(){ teste("H"); });
input[8].addEventListener("click", function(){ teste(["I","Í","Ì","Î"]); });
input[9].addEventListener("click", function(){ teste("J"); });
input[10].addEventListener("click", function(){ teste("K"); });
input[11].addEventListener("click", function(){ teste("L"); });
input[12].addEventListener("click", function(){ teste("M"); });
input[13].addEventListener("click", function(){ teste(["N","Ñ"]); });
input[14].addEventListener("click", function(){ teste(["O","Ó","Ò","Ô","Õ"]); });
input[15].addEventListener("click", function(){ teste("P"); });
input[16].addEventListener("click", function(){ teste("Q"); });
input[17].addEventListener("click", function(){ teste("R"); });
input[18].addEventListener("click", function(){ teste("S"); });
input[19].addEventListener("click", function(){ teste("T"); });
input[20].addEventListener("click", function(){ teste(["U","Ú","Ù","Û"]); });
input[21].addEventListener("click", function(){ teste("V"); });
input[22].addEventListener("click", function(){ teste("W"); });
input[23].addEventListener("click", function(){ teste("X"); });
input[24].addEventListener("click", function(){ teste("Y"); });
input[25].addEventListener("click", function(){ teste("Z"); });



var palavra = sessionStorage.word.toUpperCase().trim();

var posIndex = [];
var newWordDash = [];
for (var i=0; i<palavra.length; i++){
    if (palavra[i] === " "){
        posIndex.push(i);
    }
    newWordDash[i] = "_";
}

for (var i=0; i<posIndex.length; i++){
    newWordDash[posIndex[i]] = " ";
}



var nivel = sessionStorage.opt;
var tentativas;
var dificult;
if (nivel === "level=facil"){
    tentativas = 10;
    dificult = levelFacil;
}
else if (nivel === "level=medio"){
    tentativas = 7;
    dificult = levelMedio;
}
else if (nivel === "level=dificil"){
    tentativas = 4;
    dificult = levelDificil;
}
else{
    tentativas = 2;
    dificult = levelExpert;
}

var restante = document.querySelector(".restante");
restante.innerHTML = `Restam ${tentativas} tentativas`;

var erro = document.querySelector(".erroLetra");

var palavraEscondida = document.querySelector(".palavraEscondida");
palavraEscondida.innerHTML = newWordDash.join("");

var letrasErradas = Array();


var add = document.querySelector(".add");



function Ganhou(){
    add.innerHTML = "VOCÊ GANHOU !!!";
    add.style.transform = "translate(0, 230px)";
    add.style.background = "greenyellow";
}



function Perdeu(){
    add.innerHTML = "VOCÊ PERDEU !!!";
    add.style.transform = "translate(0, 230px)";
    add.style.background = "red";
}



function resetDelay(miliseg){
    setTimeout(function(){
        location.href = "../../../pages/friends/index.html";
    }, miliseg);
}




function teste(le){
    var match = false;
    for (var i=0; i<palavra.length; i++){
        for (var j=0; j<le.length; j++){
            if (palavra[i] === le[j]){
                newWordDash[i] = le[j];
                palavraEscondida.innerHTML = newWordDash.join("");
                if (palavra === newWordDash.join("")){
                    // console.log("VOCÊ GANHOU !!!");
                    Ganhou();
                    resetDelay(2000);
                }
                match = true;
            }
        }
    }

    if (match === false){
        dificult(0);
        letrasErradas.push(le[0]);
        if (tentativas - letrasErradas.length <= 1){
            restante.innerHTML = `Resta ${tentativas - letrasErradas.length} tentativa`;
            restante.style.background = "firebrick"}
        else
            restante.innerHTML = `Restam ${tentativas - letrasErradas.length} tentativas`;
        // console.log(letrasErradas);
        erro.innerHTML = letrasErradas.join(" ");
        if (letrasErradas.length >= tentativas){
            // console.log("VOCÊ PERDEU !!!");
            Perdeu();
            setTimeout(function(){
                if (confirm("Você Perdeu. Para continuar com a mesma palavra pressione OK.\nOu pressione Cancelar para iniciar um novo jogo.")){
                    add.innerHTML = "";
                    add.style.transform = "translate(0, 0px)";
                    tentativas += 2;
                    restante.style.background = "green";
                    restante.innerHTML = `Restam ${tentativas - letrasErradas.length} tentativas`;
                    document.querySelector(".rightLeg").style.visibility = "hidden";
                    dificult(1);
                }
                else{
                    resetDelay(0);
                }
            }, 2000);
        }
    }
}