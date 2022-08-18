var $header = $("header");
var $sticky = $header.before($header.clone().addClass("sticky"));

$(window).on("scroll", function () {
  var scrollFromTop = $(window).scrollTop();
  $("body").toggleClass("scroll", scrollFromTop > 300);
});
// parallax.js page settings
var scene = document.getElementById("scene");
var parallax = new Parallax(scene);
// masonry grid js

$(".grid").masonry({
  // options you can get on the website of masonry js
  itemSelector: ".grid-item",
  horizontalOrder: true,
  columnWidth: 120,
  fitWidth: true,
  gutter: 10,
});
// for making pics bigger or smaller when we click on them

// var $grid = $(".grid");
// $grid.on("click", ".grid-item", function () {
//   $(this).toggleClass("gigante");
//   $grid.masonry("layout");
// });

// scroll to top function details

// document.addEventListener("click", function (event) {
//   var Event = console.log(this.event);
//   window.scrollTo(0, 0);
// });

// slick slider js
$(".slider").slick({
  arrows: true,
  autoplay: true,
  autoplaySpeed: 500,
  centerMode: true,
  slidesToShow: 3,
  focusOnSelect: true,
  prevArrow: '<button type="button" class="slick-prev">Previous</button>',
  nextArrow: '<button type="button" class="slick-next">Previous</button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unSlick at a given breakpoint now by adding:
    // settings: "unSlick"
    // instead of a settings object
  ],
});

// smooth scroll
$('.menu li a[href^="#"]').on("click", function (e) {
  e.preventDefault();
  var target = $(this.hash);
  if (target.length) {
    $("html , body")
      // .stop()
      .animate(
        {
          scrollTop: target.offset().top - 60,
        },
        1000
      );
  }
});

// responsive menu start
var body = $("body");
var menuTrigger = $(".menu-trigger");
var mainOverlay = $(".main-overlay");
var menu = $(".menu");

menuTrigger.on("click", function () {
  menu.addClass("menu-active");
  mainOverlay.addClass("overlay-active");
  menuTrigger.addClass("trigger-off");
});
menu.on("click", function () {
  menu.removeClass("menu-active");
  mainOverlay.removeClass("overlay-active");
  menuTrigger.removeClass("trigger-off");
});
mainOverlay.on("click", function () {
  menu.removeClass("menu-active");
  mainOverlay.removeClass("overlay-active");
  menuTrigger.removeClass("trigger-off");
});

// hello
const svgPath = document.querySelectorAll(".path");

const svgText = anime({
  targets: svgPath,
  loop: true,
  direction: "alternate",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1200,
  delay: (el, i) => {
    return i * 200;
  },
});
var html = $("html");
