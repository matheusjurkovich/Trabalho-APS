var btn = document.querySelector('#back-to-top')
btn.addEventListener('click', function () {
  window.scrollTo(0, 0)
})

ScrollReveal({
  origin: 'bottom',
  distance: '30px',
  duration: 700
}).reveal(`
  #cultura,
  #cultura #principal img,
  #secundaria,
  #secundaria iframe,
  #cultivo,
  #cultivo p,
  #contatos,
  .zap,
  #integrantes,
  .unip`)
