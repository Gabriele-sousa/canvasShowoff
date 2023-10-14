const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const obj = document.getElementById('obj');
const ghost = new Ghost();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
w = canvas.width;
h = canvas.height;

ghost.obj = obj;
ghost.w = 50;
ghost.h = 50;

obj.style.width = ghost.w + "px";
obj.style.height = ghost.h + "px";
obj.style.position = "absolute";
ghost.w = parseInt(obj.style.width);
ghost.w = parseInt(obj.style.height);

function piso(x, y){
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, 150, 15);
}

ctx.fillStyle = "black";
ctx.fillRect(0, 0, w, h);

ghost.desenhar(250, 850);
piso(300,800);

document.addEventListener("keypress", function(e){
    obj.style.translate = "300px, 500px";
    console.log(parseInt(obj.style.width));
});