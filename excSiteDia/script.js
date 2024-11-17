
function carregarDados(){
var msg = window.document.getElementById("msg");
var img = window.document.getElementById("fotos");
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas.`;
if (hora >= 0 && hora < 12){
    //Bom dia  
    img.src = "imagens/Novo Projetomanha.webp"; 
    document.body.style.background = "#cab9ae";
}else if (hora >= 12 && hora < 18){
    //Boa tarde
    img.src = "imagens/tarde.webp";
    document.body.style.background = "#e4a428";
}else{
    //Boa noite
    img.src = "imagens/Novo Projetonoite.webp";
    document.body.style.background = "#00172d";
}
}