function mostrarTexto(){
    var popupName = document.getElementById("popupName");

    popupName.addEventListener("click", popupName.classList.toggle("show"))
}

function mostrarTextoPass(){
    var popupPass = document.getElementById("popupPass");

    popupPass.addEventListener("click", popupPass.classList.toggle("show"))
}

function mostrarPass(){
    var password = document.getElementById("password");

    if (password.type === "password"){
        password.type = "text";
    }else{
    password.type = "password";
    }
}