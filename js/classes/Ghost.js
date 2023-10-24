class Ghost{
    constructor(x, y, h, r, s, t, travaY){
        this.x = x;
        this.y = y;
        this.h = h;
        this.r = r;
        this.s = s;
        this.t = t;
        this.travaY = travaY;
    }

    //desenho do fantasma
    desenhar(x, y){
        gst.scale(this.s, this.s);
        gst.beginPath();
        gst.rotate((this.r * Math.PI) / 180);
        gst.strokeStyle="black";
        gst.lineWidth="1";
        gst.fillStyle="white";
        
        gst.beginPath(); 
        gst.moveTo(x, y);
        gst.quadraticCurveTo(x + 19, y - 90, x + 40, y);
        gst.moveTo(x, y);
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
            gst.fillStyle = "black"; 
            gst.translate(i * 10 ,0);
            gst.beginPath();
            gst.arc(x + 14, y - 29, 2, 0, Math.PI * 8, true);
            gst.fill();
            gst.restore();
        }
    }
    mover(x, y){
        //faz o fantasma cair e impede que atravesse o chão
        if(y<0){
            this.trava();
        }

        //apaga o ultimo desenho
        gst.clearRect(this.x, this.y+2, 40, -48);
        
        //desenha o boneco novamente
        this.x += x;
        this.y += y;
        this.desenhar(this.x, this.y);

        //se o boneco estiver abaixo do chão, retorna ele para cima
        if(ghost.y < ghost.travaY + canvas.height && ghost.y + 40 > ghost.travaY){
            gst.fillStyle = "red";
            gst.clearRect(this.x, this.y, w, 40);
            ghost.y = canvas.height - 60;
        }

        //passa para o outro lado da tela quando clicado
        if(this.x < 0){
            gst.fillStyle = "#001133";
            gst.clearRect(this.x, this.y+2, 40, -48);
            this.x = canvas.width - 40;
            this.desenhar(this.x, this.y)
        }else if (this.x > canvas.width){
            gst.fillStyle = "#001133";
            gst.clearRect(this.x, this.y+2, 40, -48);
            this.x = 40;
            this.desenhar(this.x, this.y)
        }
    }
    trava(){
        //verifica se o boneco esta acima do chão
        if(this.y <= canvas.height - 60){
            setTimeout(() => {
                //apaga o boneco
                gst.fillStyle = "#001133";
                gst.clearRect(this.x, this.y+2, 40, -48);
                //reposiciona acima do chão
                this.y += 40;
                this.desenhar(this.x, this.y);
            }, 300);
        }
    }
}