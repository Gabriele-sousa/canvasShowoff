const canvas = document.getElementById('canvas');
const canvas2 = document.getElementById('canvas2');
//canvas do cenario
const ctx = canvas.getContext('2d');
//canvas do fantasma
const gst = canvas2.getContext('2d');
//classe do fantasma
const ghost = new Ghost();
//classe do cenario
const fundo = new Cenario();
//sobreposição dos canvas
canvas.style.position = "absolute";
canvas2.style.position = "absolute";
//tamanho do canas
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
canvas2.width = canvas.width;
canvas2.height = canvas.height;
w = canvas.width;
h = canvas.height;

//desenha o fundo preto
ctx.fillRect(0, 0, w, h);

fundo.chuva();
//coloca a janela invisivel do fantasma
fundo.janela(w, h);


//variavei de rotação e transformação do fantasma
ghost.r = 0;
ghost.t = 0;

//desenha o chão
piso(0, (h-20), w, h);
function piso(x, y, w, h){
    ctx.fillStyle = "#003300";
    ctx.fillRect(x, y, w, h);
}

//definindo a posição do fantasma
ghost.x = 270;
ghost.y = h - 60;
ghost.s = 1;

//desenha o fantasma
ghost.desenhar(ghost.x, ghost.y);
    
//identifica botão
document.addEventListener("keydown", function(e){
    ghost.travaY = h-20;

//movimento
    if(e.key === "d"){
        ghost.mover(20, 0);
    }else if(e.key === "a"){
        ghost.mover(-20, 0);
    }else if(e.key === "w"){
        ghost.mover(0, -40);
    }else if(e.key === "s"){
        //rotação do fantasma
        ghost.r++;
    }
});

//reinicia os valores de distorção
document.addEventListener("keyup", function(){
    setTimeout(() => {
        ghost.r = 0;
        ghost.s = 1;
    }, 1000);
});

//aumetar e diminuir o fantasma
document.addEventListener("wheel", function(whell){
    console.log(whell.deltaY)
    if(whell.deltaY > 0){
        ghost.s = ghost.s - 0.1;
        console.log(ghost.s)
    }else if(whell.deltaY < 0){
        ghost.s = ghost.s + 0.1;
    }
});


