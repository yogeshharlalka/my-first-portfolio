// Wait till the DOM is ready.
$(function () {
  var roles = ["I am a Student", "I am a VITian","I am a Coder","I love playing basket ball"];
  var count = 0;
  var $typeSpan = $("#intro .content h2 span").typist({
    text: roles[count]
  });
  setInterval(() => {
    $typeSpan
      .typistRemove(roles[count++ % roles.length].length)
      .typistPause(2000)
      .typistAdd(roles[count % roles.length]);
  }, 6500);
  $(".navbar").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 40) {
      $(".navbar").slideDown(100);
    } else {
      $(".navbar").slideUp(100);
    }
  });
});
