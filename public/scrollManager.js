var prev_scroll       = 0;
var is_scrolling_down = false;

function scrollManager() {
  var scroll = document.documentElement.scrollTop;

  if((scroll > prev_scroll && !is_scrolling_down) || (scroll < prev_scroll && is_scrolling_down)) {
    var navbar_query = document.querySelectorAll(".navbar");
    if(navbar_query.length > 0) {
      var navbar = navbar_query[0];
      if(is_scrolling_down) {
        navbar.classList.remove("navbar-hide");
      } else {
        navbar.classList.add("navbar-hide");
      }
    }
  }

  is_scrolling_down = scroll > prev_scroll;
  prev_scroll       = scroll;
}

window.addEventListener("scroll", scrollManager);