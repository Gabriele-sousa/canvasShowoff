const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gst = canvas.getContext('2d');
const ghost = new Ghost();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
w = canvas.width;
h = canvas.height;

function piso(x, y){
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, 150, 15);
    ghost.trava(x, y)
}

ctx.fillStyle = "black";
ctx.fillRect(0, 0, w, h);

ghost.desenhar(250, 850, "white");
piso(300,800);

document.addEventListener("keypress", function(e){
    console.log(e.key)
    ghost.mover(e.key);
});