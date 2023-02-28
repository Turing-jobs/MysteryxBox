const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;
    
    HrAM = 192 - hr;
    Mr = 60 - min;
    Se = 60 - s;

    
    horas.textContent = HrAM;
    minutos.textContent = Mr;
    segundos.textContent = Se;

}) 

var ba = 0;

if (ba == 0){
    ola.classList.remove("animar2");
    oi.classList.remove("animar"); 
    alert("Olá viajante do universo. Seja bem vindo ao clube de astronomia. Aqui se encontra um botão chamado 'abra a caixa', cada vez que apertar nele, vai mostrar surpresas diferentes. inclusive qr code de pix de 20 reais. boa sorte!!")
    alert("site feito por: Gabriel Sales @gabriel_turing")
}

let x;


ativar.addEventListener("click", () => {

    oi.classList.toggle("animar");
    ativar.classList.toggle("animar3");
    wh.classList.toggle("animar4");
    x = Math.floor(Math.random() * 11) + 1;
    if (x==1){
        ola.classList.toggle("animar2");
        x = "<i> Um pequeno passo para um homem mas <br>um gigantesco passo para a humanidade <br><b>Neil Astromg</b> </i>";
        
    };
    if (x==2){
        ola.classList.toggle("animar2");
        x = "<i> O universo não parece ser nem benevolente <br>nem hostil, apenas indiferente<br><b>Carl Sagan</b></i>"
    }
    if (x==3){
        wh.classList.remove("animar4");
        ativar.classList.remove("animar3");
        ola.classList.remove("animar2");
        oi.classList.remove("animar");
        alert("Uma cantada de astronomia para voce!!");
        alert("Pra que estudar astronomia? Se o unico corpo celeste que eu quero estudar é você. Por Gabriel Sales 27/02/2023")  
    }
    if(x==4){
        ola.classList.toggle("animar2");
        x = "<a href='terraplanista.html'> <b>Saiba mais sobre a terraplana  </b></a>"
    }
    if(x==5){
        ola.classList.toggle("animar2");
        x = "<audio controls><source src='winx.mp3' type='audio/mpeg'></audio>"
    }
    if(x==6){
        ola.classList.toggle("animar2");
        x = "<i>Todos nós sabemos que a luz viaja mais rápido que o som. É por isso que algumas pessoas parecem brilhantes até você ouvi-las falando<br><b>Albert Einstein</b></i>"
    }   
    if (x==7){
        ola.classList.toggle("animar2");
        x = "<i> As estrelas cintilam ao pondera seus olhos <br> Aurora te anuncia quando te vê passar <br>mas você reflete o cosmos Dentro do seu olhar<br><b>Apolo</b></i>"
    }
    if (x==8){
        ola.classList.toggle("animar2");
        x = "<i>@gabriel_turing</i>"
    }
    if (x==9){
        wh.classList.remove("animar4");
        ativar.classList.remove("animar3");
        ola.classList.remove("animar2");
        oi.classList.remove("animar");
        alert("Ja que você é física me chama de e=mc2, vamos aquecer essa nossa massa aqui na minha cama e produzir energia. Por Samuel o sensual");
    }
    if(x==10){
        ola.classList.toggle("animar2");
        x = "<a href='signo.html'> <b>o que o seu signo diz sobre voce </b></a>"
    }
    if(x==11){
        ola.classList.toggle("animar2");
        x = "<a href='admin.html'> <b>segredo do ifpb shiuuu!!! </b></a>"
    }
    document.getElementById("xlabel").innerHTML = x;
    ba = 1;
});

