const key = "b36d6245a16e41f410be3ce7b48a1f23";

function colocarDadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em:" + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;

}

//Função, que vai buscar informação dentro de um servidor
async function buscarCidade(cidade){
    //await, fala para o JavaScript, esperar até que a informação do servidor, seja acessada
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    colocarDadosNaTela(dados);
}


function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}