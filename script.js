const caixaPrincipal = document.querySelector(“.caixa-principal”);
const caixaPerguntas = document.querySelector(“.caixa-perguntas”);
const caixaAlternativas = document.querySelector(“.caixa-alternativas”);
const caixaResultado = document.querySelector(“.caixa-resultado”);
const textoResultado = document.querySelector(“.texto-resultado”);
qual e o seus filmes favoritos= [
  {
 
      {
        texto: meu filme favorito é enroldos, tinkerbell e frozen 2
        texto: "Isso é maravilhoso!",
        afirmacao: [
          "esses filmes fizeram parte da minha infancia mas so de pois de mais velha eu fui entender a MENSAGEM deles
    ],
  },
];
function aleatorio(lista) {
        const posicao = Math.random()* lista.length;
}function aleatorio (lista){
        const posicao = Math.floor(Math.random()* lista.length);
        return lista[posicao];
}function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
}function respostaSelecionada(opcaoSelecionada){
        const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
}
