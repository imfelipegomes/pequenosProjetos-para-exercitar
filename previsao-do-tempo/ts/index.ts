const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null = document.querySelector("#input-localizacao");

const sectionTempoInfo = document.querySelector("#tempo-info");

form?.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!input || !sectionTempoInfo) return;

    const localizacao = input.value;

    if (localizacao.length < 3) {
        alert("O local precisa ter, pelo menos, 3 letras.");
        return;
    }

    try {
        const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=cdf659107f37ff4b0bcc8a36140df32e&lang=pt_br&units=metric`);

        const dados = await resposta.json();

        const infos = {
            temperatura: Math.round(dados.main.temp),
            local: dados.name,
            icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
        };

    sectionTempoInfo.innerHTML = `
        <div class="tempo-dados">
            <h2>${infos.local}</h2>
            <span>${infos.temperatura}°C</span>
        </div>

    <img src="${infos.icone}" />`;
    } catch (err) {
        console.log("Deu um erro na obtenção dos dados API.", err);
    }
})