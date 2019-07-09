$(document).on("scroll", function () {

  var pixels = $(document).scrollTop()

  $("div").css("right", -0.5 * pixels)

})
