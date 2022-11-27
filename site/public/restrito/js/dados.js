// Obtendo componentes para criar a tela
function obterComponentes(idMaquina) {
    fetch(`/medidas/getComponentesServidor/${idMaquina}`)
        .then(response => {
            if (response.ok) {
                response.json().then(resposta => {

                    // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    // console.log(typeof resposta)
                    // console.log(resposta)
                    criarCards(resposta)
                });
            } else {

                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
        });
}

function criarCards(vtComponentes){
    var cards = document.getElementById("container_cards") 
    console.log('vt: ', vtComponentes)
    for(var i = 0; i < vtComponentes.length; i++){
        var componente = vtComponentes[i]
        var icone;
        var viewName = "mediaPorDia"

        if(componente.nomeView.startsWith("disk")){
            icone = "fas fa-solid fa-hard-drive fa-2x text-warning"
        } else if (componente.nomeView.startsWith("ram")){
            icone = "fas fa-memory fa-2x text-info"
        } else if (componente.nomeView.startsWith("cpu")){
            icone = "fas fa-light fa-microchip fa-2x text-primary"
        }

        cards.innerHTML += `<div onclick="obterDadosGrafico('${sessionStorage.MAC_SERVIDOR}', '${viewName}', ${componente.idComponente}, '${componente.nomeMetrica}', '${componente.idMetrica}', '${new Date().getMonth()}', false)" class="col-xl-3 col-md-6 mb-4">
        <div class="card h-100">
            <div id="card_componentes" class="card-body">
                <div class="row align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-uppercase mb-1">${componente.tipoComponente} | ${componente.nomeComponente} (${componente.unidadeMedida})</div>
                        <div id="${tratarId(componente.nomeView)}${componente.idComponente}" class="h5 mb-0 font-weight-bold text-gray-800">0%
                        </div>
                        <div class="mt-2 mb-0 text-muted text-xs">

                            <span id="status_${tratarId(componente.nomeView)}${componente.idComponente}">ESTÁVEL</span> 
                        </div>
                    </div>
                    <div class="col-auto">
                        <i class="${icone}"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    }
}

// Obtendo dados dos cards
function obterDadosCards(idMaquina, metrica) {
    fetch(`/medidas/cards-tempo-real/${idMaquina}/${metrica}`)
        .then(response => {
            if (response.ok) {
                response.json().then(resposta => {

                    // console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    // console.log(typeof resposta)
                    // console.log(resposta)
                    // console.log(metrica)

                    plotarCards(metrica, resposta);
                });
            } else {

                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

// Obtendo dados grafico
function obterDadosGrafico(idMaquina, metrica, idComponente, nomeMetrica, idMetrica, mes, isSegundoEixo) {    
    if(mes == null) { mes = document.getElementById('selecionar-mes').value }
    if(idMetrica == null) { idMetrica = document.getElementById('selecionar-metrica').value; }
    console.log(idMaquina, metrica, idComponente, nomeMetrica, idMetrica, mes)
    fetch(`/medidas/grafico-tempo-real/${idMaquina}/${metrica}/${idComponente}/${idMetrica}/${mes}`)
        .then(response => {
            if (response.ok) {
                response.json().then(resposta => {

                    // console.log(`Dados recebidos Gráfico: ${JSON.stringify(resposta)}`);
                    // console.log(typeof resposta)
                    console.log(resposta)
                    
                    plotarGrafico(metrica, resposta, idComponente, nomeMetrica, idMetrica, mes, isSegundoEixo)
                    obterDadosAnalytics(idComponente, idMetrica, mes)
                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

}

function receberMetricas(idMetricaAtual, idComponente, nomeMetrica) {

    fetch(`/metricas/${sessionStorage.MAC_SERVIDOR}/${idComponente}/${idMetricaAtual}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => {
            if(response.ok) {
                response.json().then(resposta => {
                    listarMetricasDisponiveis(resposta, idComponente, idMetricaAtual, nomeMetrica)
                })
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        }).catch(function(error) {
            console.error(`Erro na obtenção das métricas: ${error.message}`);
        });
}

function obterDadosAnalytics(idComponente, idMetrica, mes) {
    fetch(`/medidas/getDadosAnalytics/${sessionStorage.ID_TORRE}/${sessionStorage.MAC_SERVIDOR}/${idComponente}/${idMetrica}/${mes}`)
        .then(response => {
            if(response.ok) {
                response.json().then(res => {
                    exibirDadosAnalytics(res)
                })
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        }).catch(function(error) {
            console.error(`Erro na obtenção das métricas: ${error.message}`);
        })
}

function tratarId(metrica){
    return "card_" + metrica.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`); 
}