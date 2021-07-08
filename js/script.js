$('.hero__row').slick({
    arrows:true,
    slidesToScroll:1,

})


$('.burger').on('click', ()=>{
    $('.burger').toggleClass('show-menu')
    $('.header__nav').toggleClass('show')
})

$('.header__nav').on('click', ()=>{
    $('.burger').removeClass('show-menu')
    $('.header__nav').removeClass('show')
})