AOS.init();

document.addEventListener("DOMContentLoaded", function() {
    OverlayScrollbars(document.querySelectorAll('body'), {
        className  : "os-theme-light",
     });
});

var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
  $hamburger.toggleClass("is-active");
});
