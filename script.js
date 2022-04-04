let oculto = "oculto";
let nombre = document.getElementById("Nombre");
let apellido = document.getElementById("Apellido");
let email = document.getElementById("Email");

let nombreAlert = document.getElementById("NombreAlert");
let apeAlert = document.getElementById("ApeAlert");
let emailAlert = document.getElementById("EmailAlert");

let ham = document.getElementById("Ham");
let nav = document.getElementById("NavDrop");
let isShown = false;
nav.classList.add(oculto)

ham.addEventListener("click",()=>{
    if(isShown){
        nav.classList.add(oculto)
        isShown = false;    
    }
    else{
        isShown = true; 
        nav.classList.remove(oculto);
    }
})

function validarForm() {

    let nombreErr = (nombre.value == "");
    let apeErr = (apellido.value == "");
    let emailErr = (email.value == "");


    if (nombreErr && apeErr && emailErr) {
       alert("Ojo! Todos los campos deben de ser completados.");
    } else {
        if (nombreErr) {
            nombreAlert.classList.remove(oculto);
            nombreAlert.innerHTML = "*El nombre no puede estar vacío";
        }

        if (apeErr) {
            apeAlert.classList.remove(oculto);
            apeAlert.innerHTML = "*El apellido no puede estar vacío";
        }

        if (emailErr) {
            emailAlert.classList.remove(oculto);
            emailAlert.innerHTML = "*El email no puede estar vacío";
        }
    }
    if(!nombreErr && !apeErr && !emailErr){
        nombre.value = "";
        apellido.value = "";
        email.value = "";

    }
    hide();
}

function hide() {

    setTimeout(function () {
        console.log("A");
        nombreAlert.classList.add(oculto);
        apeAlert.classList.add(oculto);
        emailAlert.classList.add(oculto);
    }, 3000);

}