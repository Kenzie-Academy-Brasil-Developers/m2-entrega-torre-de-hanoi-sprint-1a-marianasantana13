// VARIAVEIS
let main = document.getElementById('main');
let nomesDiscos = ["disco1", "disco2", "disco3", "disco4"]
let torre = null;
let disco = null;


// BLOCOS
function criarBlocos() {
    for (let i = 0; i < 3; i++) {
        let blocos = document.createElement('ul');
        blocos.className = 'caixa';
        blocos.id = `caixa${i + 1}`;
        main.appendChild(blocos);
    }
}
criarBlocos();

let torres = document.getElementsByClassName("caixa")

// TORRES
function criarTorres() {
    for (let i = 0; i < 4; i++) {
        let criarDisco = document.createElement("li")
        criarDisco.classList.add(nomesDiscos[i])
        criarDisco.classList.add("discos")
        criarDisco.id = `discos${i + 1}`;
        torres[0].appendChild(criarDisco)
    }
}
criarTorres()

// SELECIONAR 
function selecionarDisco(event) {
    let torreAtual = event.currentTarget
    let discoAtual = torreAtual.lastElementChild
    return discoAtual
}

function selecionarTorre(event) {
    let torreAtual = event.currentTarget
    return torreAtual
}

// MOVER 
function moverDiscos() {
    for (let i = 0; i < torres.length; i++) {
        let tower = torres[i]
        tower.addEventListener("click", function (e) {
            torre = selecionarTorre(e)
            let childElement = torre.childElementCount

            if (childElement > 0 && disco === null) {
                disco = selecionarDisco(e)
                disco.classList.add("selecionado")
            }
            else if (childElement > 0) {
                let filho = selecionarDisco(e)
                let tamanhoDiscoAtual = disco.clientWidth
                let tamanhoFilhoSelecionado = filho.clientWidth
                if (tamanhoDiscoAtual < tamanhoFilhoSelecionado) {
                    torre.appendChild(disco)
                    contarJogadas()
                    disco.classList.remove("selecionado")
                    disco = null
                    torre = null
                }
                else {
                    disco.classList.remove("selecionado")
                    disco = null
                    torre = null
                }
            }
            else if (disco !== null) {
                torre.appendChild(disco)
                contarJogadas()
                disco.classList.remove("selecionado")
                disco = null
                torre = null
            }


            if (i > 0 && tower.childElementCount == 4) {
                document.getElementById('result').innerText = 'Parabéns, você venceu!'

            }
        })

    }
}

moverDiscos();


// CONTAR JOGADAS 
let secaoContador = document.getElementById("contador")
let numero = 0

function contarJogadas() {
    numero = numero + 1
    secaoContador.innerText = `Você fez ${numero} jogadas`
}

