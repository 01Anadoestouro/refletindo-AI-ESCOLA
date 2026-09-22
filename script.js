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
export const perguntas = [
// Trecho de código suprimido
]export function aleatorio (lista){
// Trecho de código suprimidoimport {perguntas} from './perguntas.js';
}import {aleatorio} from './aleatorio.js';<!-- 
<script type="module" src="js/aleatorio.js"></script>
<script type="module" src="js/perguntas.js"></script>
<script type="module" src="js/script.js"></script>export const perguntas = [
{export function aleatorio (lista){
    const posicao = Math.floot(Math.random()* lista.length);
    return lista[posicao];import {aleatorio} from ‘./aleatorio.js’;<script type=”module” src=”js/script.js”></script>
import {perguntas} from ‘./perguntas.js;<script src="script.js"></script><script src=”js/script.js”></script><script type=”module” src=”js/aleatorio.js”></script>
<script type=”module” src=”js/perguntas.js”></script>
<script type=”module” src=”js/script.js”></script>const botaoJogarNovamente = document.querySelector(".novamente-btn");
function jogaNovamente(){
        atual = 0;
        historiaFinal = "";
        mostraPergunta();
}function mostraResultado() {
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
        botaoJogarNovamente.addEventListener("click", jogaNovamente());
}<div class= “caixa-resultado”>
    <p class=”texto-resultado”></p>function jogaNovamente(){
    atual = 0;
    historiaFinal = "";
    mostraPergunta();function mostraResultado() {
caixaPerguntas.textContent = "Em 2049...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
botaoJogarNovamente.addEventListener("click", jogaNovamente());

}
    <button class=”novamente-btn”></button>
</div>const botaoJogarNovamente = document.querySelector(“.novamente-btn”);
