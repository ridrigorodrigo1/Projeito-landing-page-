var setaDireita = window.document.getElementById("seta-direita");
var bruna = window.document.getElementById("bruna");
var samanta = window.document.getElementById("samanta");
var leonardo = window.document.getElementById("leonardo");
var setaEsquerda = window.document.getElementById("seta-esquerda");


function RolarParaDireita() {
    setaDireita.style = "display:none"
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaEsquerda.style = "display:flex"
}
function RolarParaEsquerda(){
    setaEsquerda.style = "display:none margin-top: 75px;"
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDireita.style = "display:flex"
}
