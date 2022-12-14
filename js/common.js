// 스크롤 모션 라이브러리
AOS.init();


// 클릭 시 top 이동
var mybutton = document.getElementById("myBtn");
      
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    // mybutton.style.display = "block";
  } else {
    // mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// 이미지 갤러리
$(document).ready(function(){
    var $dot = $("#dot ul li");
    var slideIndex = 0;
    var len = $(".slide li").length;

    $(".prev").on("click", function(){
      slideIndex -= 1; 
      if( slideIndex < 0 ) { slideIndex = len - 1; }
      if( slideIndex >= len ) { slideIndex = 0 ;} 
      console.log(slideIndex);
      $(".slide").animate({marginLeft:-1920 * slideIndex });
      $dot.css({background:"#DEDEDE"});
      $dot.eq(slideIndex).css({background:"#707070"});
    });

    $(".next").on("click", function(){
      slideIndex += 1; 
      if( slideIndex < 0 ) { slideIndex = len - 1; }
      if( slideIndex >= len ) { slideIndex = 0 ;} 
      $(".slide").animate({marginLeft:-1920 * slideIndex});
       $dot.css({background:"#DEDEDE"});
      $dot.eq(slideIndex).css({background:"#707070"});
    });

  $dot.on("click",function(){
    $(".slide").animate({marginLeft:-1920 * $(this).index()});
    $dot.css({"background":"#DEDEDE"});
    $(this).css({"background":"#707070"});
    slideIndex = $(this).index(); console.log(slideIndex);
  });

 });


// 롤러블 상단바
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
didScroll = true;
});
setInterval(function() {
if (didScroll) {
    hasScrolled();
    didScroll = false;
}
}, 250);
function hasScrolled() {
var st = $(this).scrollTop();
if(Math.abs(lastScrollTop - st) <= delta)
    return;
if (st > lastScrollTop && st > navbarHeight){
    $('header').removeClass('nav-down').addClass('nav-up');
} else {
    if(st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up').addClass('nav-down');
    }
}
lastScrollTop = st;
}
$(".scroll_move").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500,'swing');
});


// 카드 뒤집는 모션

$('.btn1').on('click', function () {
  $('.flip1').toggleClass('back');
});

$('.btn2').on('click', function () {
  $('.flip2').toggleClass('back');
});

$('.btn3').on('click', function () {
  $('.flip3').toggleClass('back');
});

