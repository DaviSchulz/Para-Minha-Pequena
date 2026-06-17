const encontro = new Date("2026-06-22T12:00:00");

function atualizar() {

    const agora = new Date();

    const diferenca = encontro - agora;

    const dias =
        Math.floor(diferenca / (1000*60*60*24));

    const horas =
        Math.floor((diferenca/(1000*60*60))%24);

    const minutos =
        Math.floor((diferenca/(1000*60))%60);

    const segundos =
        Math.floor((diferenca/1000)%60);

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;
}

setInterval(atualizar,1000);

atualizar();

function criarCoracao(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*100+"vw";
    heart.style.bottom = "-50px";
    heart.style.fontSize = (Math.random()*20+15)+"px";

    document.body.appendChild(heart);

    const anim = setInterval(()=>{

        let atual =
        parseInt(heart.style.bottom);

        heart.style.bottom =
        atual + 3 + "px";

        if(atual > window.innerHeight){

            clearInterval(anim);
            heart.remove();

        }

    },20);
}

setInterval(criarCoracao,500);
