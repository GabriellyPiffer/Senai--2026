const key = "e4e3ba9c402722e61d6bd8813e48f3f2";

let historico = [];

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";

    salvarHistorico(dados);
}

function salvarHistorico(dados) {
    historico.push({
        cidade: dados.name,
        temp: Math.floor(dados.main.temp),
        clima: dados.weather[0].description,
        umidade: dados.main.humidity
    });

    renderizarHistorico();
}

function renderizarHistorico() {
    const container = document.getElementById("historico");
    container.innerHTML = "";

    historico.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <strong>${item.cidade}</strong><br>
             ${item.temp}°C<br>
             ${item.clima}<br>
             ${item.umidade}%
        `;

        container.appendChild(card);
    });
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
        .then(resposta => resposta.json());

    colocarDadosNaTela(dados);
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}