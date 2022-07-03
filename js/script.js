//Mobile menu
$('.header__catalog').click(function() {
  $(this).toggleClass('header__catalog--close');
  $('.menu').slideToggle();
})

//if (window.innerWidth < 766) {
//  $('.menu__link').click(function() {
//    $('.menu__list').slideToggle();
//    $('.menu').removeClass('menu--opened');
//  })
//}

//Search
$('.search__open').click(function() {
  $(this).toggleClass('search__open--close');
  $('.search__wrap').slideToggle();
})