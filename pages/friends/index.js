var form = document.querySelector("form");
var word = document.querySelector("#secretWord");

form.addEventListener("submit", function(event){
    var data = new FormData(form);
    var output = "";
    for (const nameValue of data){
        output = nameValue[0] + "=" + nameValue[1];
    }

    sessionStorage.word = word.value;
    sessionStorage.opt = output;

    if (word.value.length > 0 && output != ""){
        location.href = "../main/index.html";
    }

    event.preventDefault();
}, false);