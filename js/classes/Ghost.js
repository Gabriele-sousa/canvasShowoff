class Ghost{
    constructor(x, y, w, h, obj){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.obj = obj;
    }

    desenhar(x, y){
        ctx.fillStyle = "white";
        ctx.fillRect(x, y, this.w, this.h)
    }
    mover(tecla){
        if (tecla === "w"){

        }
    }

    mudarCor(tecla){
        
    }
}