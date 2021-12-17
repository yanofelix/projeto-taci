const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => document.body.classList.toggle('nav-open'));

navLinks.forEach(link => {
    link.addEventListener('click', () => document.body.classList.remove('nav-open'));
})

/* Caixa de aviso (ação feita com sucesso)*/
function fecharModal() {
    document.getElementById('fundo').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal2').style.display = 'none';
    document.getElementById('modal3').style.display = 'none';
}

function abrirModal() {
    document.getElementById('fundo').style.display = 'block';
    document.getElementById('modal').style.display = 'grid';
}

function abrirModal2() {
    document.getElementById('fundo').style.display = 'block';
    document.getElementById('modal2').style.display = 'grid';
}

function modalConfirmacao() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal2').style.display = 'grid';
}

function modalConclusao() {
    document.getElementById('modal2').style.display = 'none';
    document.getElementById('modal3').style.display = 'grid';
}

var inputs = $('input').on('keyup', verificarInputs);

function verificarInputs() {
    const preenchidos = inputs.get().every(({ value }) => value)
    $('#botao').prop('disabled', !preenchidos);
}

/* Colapse do FAQ */
$('li.faq-resposta').hide();
$('li.faq-pergunta').click(function() {
    $(this).next().slideToggle();
});

/* Ativa o botão de login*/
function recaptcha_callBack() {
    var ctaBtn = document.querySelector('.cta-button');
    ctaBtn.removeAttribute('disabled');
    ctaBtn.style.cursor = 'pointer';
    ctaBtn.style.background = "#EB8FA9";
    ctaBtn.style.color = '#303030'
}

/* Controle de fluxo do login  */
function mySubmit(){
    var action = $('#option').val()
    if(action !== '') {
        document.getElementById('form-login').action = action;
        document.getElementById('form-login').submit();
    }
  }
