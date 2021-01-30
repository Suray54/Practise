import $ from "jquery";
$(window).scroll(function () {
  if ($(document).scrollTop() > 90) {
    $(".navbar").addClass("affix");
  } else {
    $(".navbar").removeClass("affix");
  }
});
