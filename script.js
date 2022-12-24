
function scrollSuave() {
  const linksInternos = document.querySelectorAll('.js-scrollSuaveLinkInterno a[href^="#"]');
  if(linksInternos.length) {
    function scrollSuaveLinkInterno(event) {
      event.preventDefault();
      const href = this.getAttribute('href'),
            section = document.querySelector(href);
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      })
    }
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollSuaveLinkInterno);
    })
  }
}
scrollSuave();

function navegacaoTab() {
  const origemMenu = document.querySelectorAll('.js-origemmenu li'),
        origemConteudo = document.querySelectorAll('.js-origemconteudo li');

  origemConteudo[0].classList.add('ativo');

  if(origemMenu.length && origemConteudo.length) {
    function ativarConteudo(index) {
      origemConteudo.forEach((conteudo) => {
        conteudo.classList.remove('ativo');
      })
      origemConteudo[index].classList.add('ativo');
    }

    origemMenu.forEach((menu, index) => {
      menu.addEventListener('click', () => {
        ativarConteudo(index);
      })
    })
  }
}
navegacaoTab();


function accordion() {
  const diversaoDt = document.querySelector('.js-accordion dt');

  if(diversaoDt) {
    function adicionarAtivoDd() {
      this.nextElementSibling.classList.toggle('ativo');
    }

    diversaoDt.addEventListener('click', adicionarAtivoDd)
  }
}
accordion();

function animacaoScroll() {
  const itensParaAnimar = document.querySelectorAll('.js-scroll');

  if(itensParaAnimar.length) {
    function animarAoScroll() {
      itensParaAnimar.forEach((item) => {
        if((item.getBoundingClientRect().top - (window.innerHeight * 0.8)) < 0) {
          item.classList.add('animar');
        } else {
          item.classList.remove('animar');
        }
      })
    }

    window.addEventListener('scroll', animarAoScroll);
    animarAoScroll();
  }
}
animacaoScroll();