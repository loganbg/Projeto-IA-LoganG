const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você prefere ver um jogo de basquete ao vivo ou assistir pela televisão?",
        alternativas: [
            {
                texto: "Ver ao vivo",
                afirmacao: "Nada supera a adrenalina de gritar e torcer com pessoas que você não conhece, mas que agem como se fossem seus melhores amigos!"
            },
            {
                texto: "Assistir pela televisão ",
                afirmacao: "Onde você pode comer pipoca em casa e não precisa fingir que entende as regras quando alguém faz uma falta!"
            }
        ]
    },
    {
        enunciado: "Você acha que a sua equipe favorita vencerá o campeonato este ano?",
        alternativas: [
            {
                texto: "Sim, estou confiante! ",
                afirmacao: "Afinal, eles têm mais talento do que eu tenho para abrir um pacote de chips sem fazer barulho!"
            },
            {
                texto: "Não, estou preocupado.",
                afirmacao: "Parece que eles jogam como se estivessem tentando descobrir onde deixaram as chaves do carro!"
            }
        ]
    },
    {
        enunciado: " Você gosta mais de jogar basquete com amigos ou prefere praticar sozinho?",
        alternativas: [
            {
                texto: "Jogar com amigos",
                afirmacao: "Porque rir das falhas uns dos outros é a verdadeira razão para estarmos todos juntos... e sempre haverá alguém que vai errar aquele arremesso fácil!"
            },
            {
                texto: "Praticar sozinho",
                afirmacao: "Já que posso atirar a bola e ter uma conversa profunda com ela sobre como eu deveria ter sido um astro do basquete!"
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
    caixaPerguntas.textContent = "Você é uma pessoa que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
