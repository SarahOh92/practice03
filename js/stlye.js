$(function () {
    const acc = $(".btn");
    acc.mouseover(function () {
      acc.removeClass("active");
      $(this).addClass("active");
    });
    acc.mouseout(function () {
      $(this).removeClass("active");
    });
  });