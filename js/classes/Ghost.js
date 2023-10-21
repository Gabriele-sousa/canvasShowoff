class Ghost{
    constructor(x, y, h, vel, travaX, travaY){
        this.x = x;
        this.y = y;
        this.h = h;
        this.v = vel;
        this.travaX = travaX;
        this.travaY = travaY;
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
            gst.fillRect(this.x, this.y, -50, 50);
            //desenha o boneco novamente
            this.desenhar(this.x, this.y, "white");
            gst.translate(20,0);
            
        }else if (tecla === "a"){
            //apaga o ultimo desenho
            gst.fillStyle = "black";
            gst.fillRect(this.x, this.y, 50, 50);
            //desenha o boneco novamente
            this.desenhar(this.x, this.y, "white");
            gst.translate(-20,0);

        }else if(tecla === "w"){
            gst.fillStyle = "black";
            gst.fillRect(this.x, this.y, 50, 50);
            
            this.desenhar(this.x, this.y, "white");
            gst.translate(0,-40);

            //voltar ao chão
            setTimeout(() => {
                gst.fillStyle = "black";
                gst.fillRect(this.x, this.y, 50, -50);
            
                this.desenhar(this.x, this.y, "white");
                gst.translate(0, 40);
                console.log("oi")
              }, 1000);
        }
    }
    trava(){
        if(this.x > this.travaX && this.x < (this.travaX + 150)){
            return;
        }
        if(this.y > this.travaY && this.y < (this.travaX + 15)){
            return;
        }
        console.log("block");
    }
    mudarCor(tecla){
        
    }
}