// define header for headroom.js
// var header = document.querySelector("header");
// new Headroom(header, {
//   tolerance: 0,
//   offset : 10,
// }).init();

// navigation menu
(function() {
  $(".menu").on("click", function() {
    $(this).toggleClass('open');
    $('nav').toggleClass('open');
    $('.layer').toggleClass('layer-active');
    $("#logo").toggleClass('white');
    // $("body").toggleClass('remove-scrollbar');
    // $("html").toggleClass('keep-bar');
    
    return $(this).toggleClass('clicked');
  });
}).call(this);

// handle links started with '#'
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

// auto resize form textarea
(function(){

var textareas = document.querySelectorAll('.expanding'),
    
    resize = function(t) {
      t.style.height = 'auto';
      t.style.height = (t.scrollHeight + t.offset + 1 ) + 'px';
    },
    
    attachResize = function(t) {
      if ( t ) {
        // console.log('t.className',t.className);
        t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));

        resize(t);

        if ( t.addEventListener ) {
          t.addEventListener('input', function() { resize(t); });
          t.addEventListener('mouseup', function() { resize(t); }); // set height after user resize
        }

        t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
      }
    };

  // IE7 support
  if ( !document.querySelectorAll ) {

    function getElementsByClass(searchClass,node,tag) {
      var classElements = new Array();
      node = node || document;
      tag = tag || '*';
      var els = node.getElementsByTagName(tag);
      var elsLen = els.length;
      var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
      for (i = 0, j = 0; i < elsLen; i++) {
        if ( pattern.test(els[i].className) ) {
          classElements[j] = els[i];
          j++;
        }
      }
      return classElements;
    }
    
    textareas = getElementsByClass('expanding');
  }

  for (var i = 0; i < textareas.length; i++ ) {
    attachResize(textareas[i]);
  }

})();

// current year
document.getElementById("year").innerHTML = (new Date().getFullYear());

// service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
      // successful
      console.log('Service Worker registered:', registration.scope);
    }).catch(function(err) {
      // failed
      console.log('Service Worker registration failed:', err);
    });
  });
}

// console signature
console.log('\n%cLucasm.dev', 'background:#000;color:#fff;padding:5px 10px;');