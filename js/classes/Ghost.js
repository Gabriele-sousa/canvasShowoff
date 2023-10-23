class Ghost{
    constructor(x, y, h, vel, travaX, travaY){
        this.x = x;
        this.y = y;
        this.h = h;
        this.v = vel;
        this.travaX = travaX;
        this.travaY = travaY;
    }

    desenhar(x, y){
        gst.beginPath();
        gst.strokeStyle="black";
        gst.lineWidth="1";
        gst.fillStyle="white";
        gst.beginPath(); //upper part
        gst.moveTo(x, y);
        gst.quadraticCurveTo(x + 19, y - 90, x + 40, y);
        gst.moveTo(x, y);// now the bottom part
        gst.quadraticCurveTo(x + 3, y + 4, x + 10, y);
        gst.moveTo(x + 10, y);
        gst.quadraticCurveTo(x + 12, y - 2, x + 20, y);
        gst.moveTo(x + 20, y);
        gst.quadraticCurveTo(x + 22, y + 4, x + 30, y);
        gst.moveTo(x + 30, y);
        gst.quadraticCurveTo(x + 35, y - 2, x + 40, y);
        gst.strokeStyle = 'black';
        gst.stroke();
        gst.fill();
        gst.closePath();

        for(let i = 0; i <= 1; i++){
            gst.save();
            gst.fillStyle = "black"; // eye circles
            gst.translate(i * 10 ,0);
            gst.beginPath();
            gst.arc(x + 14, y - 29, 2, 0, Math.PI * 8, true);
            gst.fill();
            gst.restore();
        }
    }
    mover(x, y){
        //faz o fantasma cair e impede que atravesse
        if(y<0){
            this.trava();
        }

        //apaga o ultimo desenho
        if(this.y > this.travaY){
            gst.fillStyle = "red";        
        }else{
            gst.fillStyle = "#001133";
        }
        gst.fillRect(this.x, this.y+2, 40, -48);
        
        //desenha o boneco novamente
        this.x += x;
        this.y += y;
        console.log(this.x)
        this.desenhar(this.x, this.y);

        //se o boneco estiver abaixo do chão, retorna ele para cima
        if(ghost.y < ghost.travaY + canvas.height && ghost.y + 40 > ghost.travaY){
            gst.fillStyle = "red";
            gst.fillRect(this.x, this.y, w, 40);
            ghost.y = canvas.height - 60;
        }
    }
    trava(){
        //verifica se o boneco esta acima do chão
        if(this.y <= canvas.height - 60){
            setTimeout(() => {
                //apaga o boneco
                gst.fillStyle = "#001133";
                gst.fillRect(this.x, this.y+2, 40, -48);
                console.log("oi")
                //reposiciona acima do chão
                this.y += 40;
                this.desenhar(this.x, this.y);
            }, 300);
        }
    }
}