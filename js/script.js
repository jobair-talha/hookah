// Banner slider

$('.banner-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  prevArrow: '<i class="fas fa-angle-left prev"></i>',
  nextArrow: '<i class="fas fa-angle-right next"></i>',
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// Font curver

var $headline = $('#headline').hide();

var $word1 = $('#arc-wrapper').find('h3').hide();
var $word2 = $('#arc-wrapper').find('h4').hide();

var $example1 = $('.example').hide();

google.load('webfont', '1');

google.setOnLoadCallback(function () {
  WebFont.load({
    google: {
      families: ['Montserrat', 'Concert One']
    },
    fontactive: function (fontFamily, fontDescription) {
      init();
    },
    fontinactive: function (fontFamily, fontDescription) {
      init();
    }
  });
});

function init() {

  $headline.show().arctext({
    radius: 400
  });

  $word1.show().arctext();
  $word2.show().arctext({
    radius: 140,
    dir: -1
  });

  $example1.show().arctext({
    radius: 400
  });
};


// Counter Down

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days 
  document.getElementById("hour").innerHTML = hours
  document.getElementById("min").innerHTML = minutes
  document.getElementById("sec").innerHTML = seconds

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// Team slider

$('.team-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  
});
$('.gallery-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 2,
  autoplay: true,
  arrows: false,
  
});


// Testimonial slider

$('.testi-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  prevArrow: '<i class="fas fa-angle-left prev"></i>',
  nextArrow: '<i class="fas fa-angle-right next"></i>',
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// Venu Box
$(document).ready(function(){
  $('.venobox').venobox(); 
});
$('.venobox').venobox({
  spinner: 'cube-grid',              
});

// Counter Up
jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});