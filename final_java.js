jQuery(document).ready(function() {

  var navOffset = jQuery("nav").offset().top;

  jQuery("nav").wrap('<div class="nav-placeholder"></div>');
  jQuery(".nav-placeholder").height(jQuery("nav").outerHeight());

  jQuery(window).scroll(function() {
  var scrollPosition = jQuery(window).scrollTop();

  if (scrollPosition >= navOffset) {
    jQuery("nav").addClass("fixed");
  } else {
    jQuery("nav").removeClass("fixed");
  }

  });
});

jQuery(document).ready(function() {

  /*var sideOffset = jQuery(".sidebarProperties").offset().top;*/

  jQuery(".sidebarProperties").wrap('<div class="sidebar-placeholder"></div>');
  jQuery(".sidebar-placeholder").height(jQuery(".sidebarProperties").outerHeight());

  jQuery(window).scroll(function() {
  var scrollPosition = jQuery(window).scrollTop();

  if (scrollPosition >= 267.8) {
    jQuery(".sidebarProperties").addClass("fixedSidebar");
  } else {
    jQuery(".sidebarProperties").removeClass("fixedSidebar");
  }

  });
});
