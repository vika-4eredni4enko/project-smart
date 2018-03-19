$(function(){
  $('.tab-nav li:first').addClass('select');                // Первой вкладке добавляетсякласс select
  $('.tab-panels>div').hide().filter(':first').show();      // Скрываются все блоки с описанием вкладок кроме первого
  $('.tab-nav a').click(function(){                         // При клике на вкладку
    $('.tab-panels>div').hide().filter(this.hash).show();   // - показывается блок с описанием текущей вкладки
    $('.tab-nav li').removeClass('select');                 // - удаляется класс 'select' у активной ранее вкладки
    $(this).parent().addClass('select');                    // - добавляется класс 'select' для выбранной вкладки
    return (false);                                         // - прерывается обработка события onClick
  })
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    items:2,
    navText:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

// nav
$('.open-menu').on('click', function () {
    $('#overlay, .main-menu').show();
    $(this).hide();
    $('.close-menu').show();
});
$('.close-menu').on('click', function () {
    $('#overlay, .main-menu').hide();
    $(this).hide();
    $('.open-menu').show();
});

$('.main-menu a').on('click', function () {
    $('#overlay, .main-menu').hide();
    $('.close-menu').hide();
    $('.open-menu').show();
});