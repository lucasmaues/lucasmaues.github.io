// register service worker

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
      // registration was successful
      console.log('Service Worker registration successful, with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed
      console.log('Service Worker registration failed, error: ', err);
    });
  });
}

// define header for headroom.js

var header = document.querySelector("header");

new Headroom(header, {
  tolerance: {
    down : 2,
    up : 5
  },
  offset : 10,
  classes: {
    initial: "slide",
    pinned: "slide--reset",
    unpinned: "slide--up"
  }
}).init();

$(window).on("scroll", function() {
    if($(window).scrollTop() > 10) {
        $("header").addClass("scroll");
    } else {
        //remove class (changes defined in css)
       $("header").removeClass("scroll");
    }
});

// navigation menu

$('#menu').on('click', function() {
  $('nav').addClass('show');
});

$('#close').on('click', function() {
  $('nav').removeClass('show');
});

$(window).on('scroll', function() {
  $('nav').removeClass('show');

  // for headroom
  if($(window).scrollTop() > 10) {
        $("#close").addClass("scroll");
    } else {
       $("#close").removeClass("scroll");
    }

});

// handle links with @href started with '#' only

$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    // top position relative to the document
    var pos = $(id).offset().top;
    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});

// console signature

console.log('\n%cmade by @LucasMauess', 'background:#000;color:#fff;padding:5px 10px;');
// console.log('%cwww.lucasmauess.com\n', 'margin:0 5px;text-decoration:underline;');