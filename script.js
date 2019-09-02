$(document).on("scroll", function () {

  var pixels = $(document).scrollTop()

  $("section").css("right", -0.5 * pixels)

})
