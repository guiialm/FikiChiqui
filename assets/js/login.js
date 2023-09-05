

let EntrarPainel = document.getElementById("EntrarPainel");
let CadastroSite = document.getElementById("CadastroSite");
let Indicador = document.getElementById("Indicador");

function Cadastro() {
    CadastroSite.style.transform = "translateX(0px)";
    EntrarPainel.style.transform = "translateX(0px)";
    Indicador.style.transform = "translateX(100px)";
}

function Entrar() {
    CadastroSite.style.transform = "translateX(300px)";
    EntrarPainel.style.transform = "translateX(300px)";
    Indicador.style.transform = "translateX(0px)";
}