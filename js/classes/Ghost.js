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
    mover(x, y){
        this.trava();
        //apaga o ultimo desenho
        if(this.y > this.travaY){
            gst.fillStyle = "red";        
        }else{
            gst.fillStyle = "#001133";
        }
        gst.fillRect(this.x, this.y, 40, 40);
        
        //desenha o boneco novamente
        this.x += x;
        this.y += y;
        this.desenhar(this.x, this.y, "white");

        //se o boneco estiver abaixo do chão, retorna ele para cima
        if(ghost.y < ghost.travaY + canvas.height && ghost.y + 40 > ghost.travaY){
            gst.fillStyle = "red";
            gst.fillRect(this.x, this.y, w, 40);
            ghost.y = canvas.height - 60;
        }
    }
    trava(){
        //verifica se o boneco esra acima do chão
        if(this.y + 40 < this.travaY){
            setTimeout(() => {
                //apaga o boneco
                gst.fillStyle = "#001133";
                gst.fillRect(this.x, this.y, 40, 40);

                //reposiciona acima do chão
                this.y += 45;
                this.desenhar(this.x, this.y, "white");
            }, 300);
        }
    }
}
//this.x < x + w && this.x + 40 > x && this.y < y + h && this.y + 40 > y