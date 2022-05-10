var btn = document.querySelector('#back-to-top')
btn.addEventListener('click', function () {
  window.scrollTo(0, 0)
})

ScrollReveal({
  origin: 'bottom',
  distance: '40px',
  duration: 700
}).reveal(`
  #cultura,
  .imagem,
  #secundaria,
  #secundaria iframe,
  #cultivo,
  #cultivo p,
  .fotos,
  #agropecuaria,
  #agropecuaria p,
  .lado-a-lado,
  #calendario,
  #calendario h1,
  #calendario h2,
  #calendario p,
  .lua,
  #contatos,
  .zap,
  #integrantes,
  .unip`)

const header = document.querySelector('#page-header')
const headerClassList = header.classList
window.addEventListener('scroll', () => {
  if (window.scrollY >= 80) {
    if (!headerClassList.contains('scrollHide')) {
      headerClassList.add('scrollHide')
    }
  } else {
    if (headerClassList.contains('scrollHide')) {
      headerClassList.remove('scrollHide')
    }
  }
})
