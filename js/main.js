const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gst = canvas.getContext('2d');
const ghost = new Ghost();
const fundo = new Cenario();
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;
w = canvas.width;
h = canvas.height;
ctx.fillStyle = "black";
ctx.fillRect(0, 0, w, h);

function piso(x, y, w, h){
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, w, h);
}
ctx.beginPath();
    fundo.janela(w, h);
    fundo.chuva();
ctx.closePath()
ghost.r = 0;
ghost.t = 0;
//desenha o chão
piso(0, (h-20), w, h);

ghost.x = 270;
ghost.y = h - 60;
function fantasma(x,y){
    ghost.desenhar(x, y);
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
            ghost.r++;
        }
    });
    document.addEventListener("keyup", function(){
        setTimeout(() => {
            ghost.r = 0;
            ghost.s = 1;
            ghost.t = 0;
        }, 1000);
    });
    ghost.s = 1;
    document.addEventListener("wheel", function(whell){
        console.log(whell.deltaY)
        if(whell.deltaY > 0){
            ghost.s = ghost.s - 0.1;
            console.log(ghost.s)
        }else if(whell.deltaY < 0){
            ghost.s = ghost.s + 0.1;
        }
    });
}
fantasma(ghost.x, ghost.y);

