import { levelFacil, levelMedio, levelDificil, levelExpert } from './person_body.js';

var input = document.querySelectorAll("input");

var a = input[0];
var b = input[1];
var c = input[2];
var d = input[3];
var e = input[4];
var f = input[5];
var g = input[6];
var h = input[7];
var i = input[8];
var j = input[9];
var k = input[10];
var l = input[11];
var m = input[12];
var n = input[13];
var o = input[14];
var p = input[15];
var q = input[16];
var r = input[17];
var s = input[18];
var t = input[19];
var u = input[20];
var v = input[21];
var w = input[22];
var x = input[23];
var y = input[24];
var z = input[25];

a.addEventListener("click", function(){ teste("A"); });
b.addEventListener("click", function(){ teste("B"); });
c.addEventListener("click", function(){ teste("C"); });
d.addEventListener("click", function(){ teste("D"); });
e.addEventListener("click", function(){ teste("E"); });
f.addEventListener("click", function(){ teste("F"); });
g.addEventListener("click", function(){ teste("G"); });
h.addEventListener("click", function(){ teste("H"); });
i.addEventListener("click", function(){ teste("I"); });
j.addEventListener("click", function(){ teste("J"); });
k.addEventListener("click", function(){ teste("K"); });
l.addEventListener("click", function(){ teste("L"); });
m.addEventListener("click", function(){ teste("M"); });
n.addEventListener("click", function(){ teste("N"); });
o.addEventListener("click", function(){ teste("O"); });
p.addEventListener("click", function(){ teste("P"); });
q.addEventListener("click", function(){ teste("Q"); });
r.addEventListener("click", function(){ teste("R"); });
s.addEventListener("click", function(){ teste("S"); });
t.addEventListener("click", function(){ teste("T"); });
u.addEventListener("click", function(){ teste("U"); });
v.addEventListener("click", function(){ teste("V"); });
w.addEventListener("click", function(){ teste("W"); });
x.addEventListener("click", function(){ teste("X"); });
y.addEventListener("click", function(){ teste("Y"); });
z.addEventListener("click", function(){ teste("Z"); });



var palavra = sessionStorage.word.toUpperCase().trim();
console.log(palavra.trim());


/* ================== TESTE ================== /
var palavra = "      lucas jose ribeiro     ";
palavra =  palavra.trim();
var posIndex = [];
for (var i=0; i<palavra.length; i++){
    if (palavra[i] === " "){
        posIndex.push(i);
    }
}
console.log(posIndex);
var newlist = [];
for(var i of palavra){
    newlist.push("_");
}
for (var i=0; i<posIndex.length; i++){
    newlist[posIndex[i]] = "a";
}
console.log(newlist);

// ===================================== //
var res = [];
var nome  = "lacas amor ";
for (var i=0; i<nome.length; i++){
    if (nome[i] === "a"){
        res.push(nome[i]);
    }
}
console.log(res.length);
/* ================== TESTE ================== */



var tentativas;
var nivel = sessionStorage.opt;
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
palavraEscondida.innerHTML = " _ ".repeat(palavra.length);

var indexPalavra = Array(palavra.length);

for (var i=0; i<indexPalavra.length; i++){
    indexPalavra[i] = "_";
}

// console.log(indexPalavra);

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
    // palavra = palavra.normalize("NFD");
    if (palavra.includes(le)){
        for (var i=0; i<palavra.length; i++){
            if (palavra[i] === le){
                indexPalavra[i] = le;
                // console.log(indexPalavra);
            }
        }
        palavraEscondida.innerHTML = indexPalavra.join(" ");
        if (palavra === indexPalavra.join("")){
            // console.log("VOCÊ GANHOU !!!");
            Ganhou();
            resetDelay(2000);
        }
    }
    
    else{
        dificult(0);
        letrasErradas.push(le);
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