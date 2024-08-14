const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "a sua missão e destruir as IA",
        alternativas: [
            {
                texto: "nem pensar!",
                afirmacao: "a IA ajudam muito atualmente. "
            },
            {
                texto: "pode contar comigo!",
                afirmacao: "as IA se tronaram um perigo."
            }
        ]
    },
    {
        enunciado: "mas qual caminho vc devera escolher, voce esta ou salvando ou destruindo o mundo?",
        alternativas: [
            {
                texto: "a humanidade não esta pronta para isso, não vale a pena a destruição .",
                afirmacao: "o mundo não iria resistir sem IA."
            },
            {
                texto: "eu farei isso para salvar o mundo mesmo comprometendo a economia global e gerar uma crise ao inves da dominação de robs.",
                afirmacao: "e preciso ter um recomeço."
            }
        ]
    },
    {
        enunciado: "você pode escolher, so não pode demorar?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "estamos discutindo e vc ainda não soube oque escolher??",
        alternativas: [
            {
                texto: "vale a pena ser dominado pelas novas IAS, elas nos salvaram.",
                afirmacao: "vc sera responsavel por suas escolhas."
            },
            {
                texto: "vale a pena.",
                afirmacao: "...!"
            }
        ]
    },
    {
        enunciado: "? ",
        alternativas: [
            {
                texto: "peço perdão pelo meu erro que custou o futuro.",
                afirmacao: ":(."
            },
            {
                texto: "salvei o mundo.",
                afirmacao: ":). "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();