var form = document.querySelector("form");
var select = document.querySelector("#select");

form.addEventListener("submit", function(event){
    var data = new FormData(form);
    var output = "";
    for (const nameValue of data){
        output = nameValue[0] + "=" + nameValue[1];
    }

    sessionStorage.select = select.value;
    sessionStorage.opt = output;

    if (select.value.length > 0 && output != ""){
        location.href = "../main/index.html";
    }

    event.preventDefault();
}, false);