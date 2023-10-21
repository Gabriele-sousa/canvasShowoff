class Ghost{
    constructor(x, y, h, vel){
        this.x = x;
        this.y = y;
        this.h = h;
        this.v = vel;
    }

    desenhar(x, y, c){
        gst.fillStyle = c;
        this.x = x;
        this.y = y;
        gst.fillRect(this.x, this.y, 40, 40)
    }
    mover(tecla){
        this.trava();
        if (tecla === "d"){
            //apaga o ultimo desenho
            gst.fillStyle = "black";
            gst.fillRect(this.x, this.y, -1000, 40);

            this.desenhar(this.x, this.y, "white");
            gst.translate(20,0);
        }else if (tecla === "a"){
            //apaga o ultimo desenho
            gst.fillStyle = "black";
            gst.fillRect(this.x, this.y, 1000, 40);
            
            this.desenhar(this.x, this.y, "white");
            gst.translate(-20,0);
        }
    }
    trava(x, y){
        if(this.x > x && this.y > y){
            return;
        }
    }
    mudarCor(tecla){
        
    }
}