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

//desenha o chão
piso(0, (h-20), w, h);

ghost.x = 270;
ghost.y = h - 60;
gst.beginPath();
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
        }
    });
    ghost.s = 0;
    document.addEventListener("wheel", function(whell){
        console.log(whell.deltaY)
        if(whell.deltaY > 0){
            ghost.s = ghost.s - 0.1;
            console.log(ghost.s)
            ghost.scale();
        }else if(whell.deltaY < 0){
            ghost.s = ghost.s + 0.1;
            ghost.scale();
        }
    });
gst.closePath();

