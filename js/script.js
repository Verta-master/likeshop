//Mobile menu
$('.header__catalog').click(function() {
  $(this).toggleClass('header__catalog--close');
  $('.menu').slideToggle();
})

if (window.innerWidth < 1200) {
  $('.footer__title').click(function() {
    $(this).next().slideToggle();
    $(this).toggleClass('footer__title--top');
  })
}

//Search
$('.search__open').click(function() {
  $(this).toggleClass('search__open--close');
  $('.search__wrap').slideToggle();
})