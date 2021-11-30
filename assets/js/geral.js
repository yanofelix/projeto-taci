const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => document.body.classList.toggle('nav-open'));

navLinks.forEach(link => {
    link.addEventListener('click', () => document.body.classList.remove('nav-open'));
})

/* Caixa de aviso (ação feita com sucesso)*/ 
function fecharModal()
{
  document.getElementById('fundo').style.display = 'none';
  document.getElementById('modal').style.display = 'none';
}

function abrirModal()
{
  document.getElementById('fundo').style.display = 'block';
  document.getElementById('modal').style.display = 'block';
}

var inputs = $('input').on('keyup', verificarInputs);

function verificarInputs() {
    const preenchidos = inputs.get().every(({value}) => value)
    $('#botao').prop('disabled', !preenchidos);
}

$('li.faq-resposta').hide();
$('li.faq-pergunta').click(function () {
  $(this).next().slideToggle();
});