const mensagem = document.querySelector(".mensagem");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const formulario = document.getElementById("formulario");

formulario.onsubmit = (evento) =>{
    let dados = JSON.parse(localStorage.getItem("dados"));
    dados.forEach((elemento) => {
        if (elemento.email === email.value && elemento.senha == senha.value){
            evento.preventDefault();
            mensagem.innerHTML="Acesso permitido";
            setTimeout(() => {
                window.location.assign("catalogo.html")
            }, 2000);
            return true;
        }else{
            evento.preventDefault();
            mensagem.innerHTML="senha ou e-mail incorreto"
        }
    });
}