class Cenario{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    janela(w, h){
        //define a forma da janela
        gst.beginPath();
        gst.arc(w / 2, h / 2, (h / 2) + h / 2, 0, Math.PI * 2, true);
        gst.clip();
    }
    chuva(){
        //montando as gotas
        const gotas = ["l","|", "I"];
        const tamanho = 17;
        const colunas = canvas.width / tamanho;
        const quedas = new Array(Math.floor(colunas)).fill(1);
        function chuvisco(){
            // definindo a cor da fonte
            let c;
            let num = Math.floor(Math.random() * 10);
            if(num % 2 === 0){
                c = "#001133";
            }else{
                c = "#3366cc";
            }
            ctx.fillStyle = c;
            ctx.font = `${tamanho}px arial`;
            //cria a chuva
            for (let i = 0; i < quedas.length; i++) {
              // escolhe um dos caracteres de gotas para escrever na tela
              const chuva = gotas[Math.floor(Math.random() * gotas.length)];
          
              // desenha
              ctx.fillText(chuva, i * tamanho, quedas[i] * tamanho);
    
              if (quedas[i] * tamanho > canvas.height && Math.random() > 0.95){
                quedas[i] = 0;
              }  
              quedas[i]++;
          }
          //deixa mais fluido
          window.requestAnimationFrame(chuvisco);
        }
        chuvisco();
    }
    
}