const imagens = document.querySelectorAll(".slide");
const setaVoltar = document.getElementById("seta-voltar");
const setaAvancar = document.getElementById("seta-avancar");
let imagemAtual = 0;

function trocarImagem(novaPosicao) {
  if (novaPosicao < 0 || novaPosicao >= imagens.length) return;
  imagens[imagemAtual].classList.remove("mostrar");
  imagemAtual = novaPosicao;
  imagens[imagemAtual].classList.add("mostrar");
  atualizarSetas();
}

function atualizarSetas() {
  setaVoltar.classList.toggle("opacidade", imagemAtual === 0);
  setaAvancar.classList.toggle("opacidade", imagemAtual === imagens.length - 1);
}

setaAvancar.addEventListener("click", () => trocarImagem(imagemAtual + 1));
setaVoltar.addEventListener("click", () => trocarImagem(imagemAtual - 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") trocarImagem(imagemAtual + 1);
  if (event.key === "ArrowLeft") trocarImagem(imagemAtual - 1);
});

atualizarSetas();