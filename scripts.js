const ptBtn = document.getElementById('pt-btn');
const enBtn = document.getElementById('en-btn');
const traducao = document.querySelectorAll('.lang');

// Função que aplica o idioma
function aplicarIdioma(idioma) {
  traducao.forEach(el => {
    const texto = el.getAttribute('data-' + idioma);
    const tag = el.tagName.toLowerCase();

    if (!texto) return;

    if (tag === 'input' || tag === 'textarea') {
      el.placeholder = texto;
    } else {
      el.textContent = texto;
    }
  });
}
// Detecta idioma padrão ao carregar o site
document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("pt"); // ou "en" se quiser começar em inglês
});

// Eventos de clique nas bandeiras
ptBtn.addEventListener('click', () => aplicarIdioma("pt"));
enBtn.addEventListener('click', () => aplicarIdioma("en"));


function enviarMensagem() {
      const nome = document.getElementById('nome').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      if (nome === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return;
      }

      const texto = 'Olá, meu nome é ' + nome + '. ' + mensagem;
      const telefone = '5594984046320'; // <-- Coloca seu número com DDD AQUI
      const link = 'https://wa.me/' + telefone + '?text=' + encodeURIComponent(texto);

      window.open(link, '_blank');
    }
