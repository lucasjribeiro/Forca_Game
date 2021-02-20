var head = document.querySelector(".head");
var leftEye = document.querySelector(".leftEye");
var rightEye = document.querySelector(".rightEye");
var mounth = document.querySelector(".mounth");
var trunk = document.querySelector(".trunk");
var leftArm = document.querySelector(".leftArm");
var rightArm = document.querySelector(".rightArm");
var leftLeg = document.querySelector(".leftLeg");
var rightLeg = document.querySelector(".rightLeg");

var lista = [head, leftEye, rightEye, mounth, trunk, leftArm, rightArm, leftLeg, rightLeg];

var i = 0;

export function levelFacil(rest){
    if (i < 9){
        lista[i].style.visibility = "visible";
        i++;
    }
    i -= rest;
}

export function levelMedio(rest){
    if (i < 9){
        lista[i].style.visibility = "visible";
        i++;
        for(i; i<4; i++){
            lista[i].style.visibility = "visible";
        }
    }
    i -= rest;
}

export function levelDificil(rest){
    if (i < 9){
        if (i < 4){
            for(i; i<4; i++){
                lista[i].style.visibility = "visible";
            }
        }
        else if (i < 7){
            for (i; i<7; i++){
                lista[i].style.visibility = "visible";
            }
        }
        else{
            for (i; i<9; i++){
                lista[i].style.visibility = "visible";
            }
        }
    }
    i -= rest;
}

export function levelExpert(rest){
    if (i < 9){
        for (i; i<9; i++){
            lista[i].style.visibility = "visible";
        }
    }
    i -= rest;
}