$(function () {
    const acc = $(".btn");
    acc.mouseover(function () {
      acc.removeClass("active");
      $(this).addClass("active");
    });
    acc.mouseout(function () {
      $(this).removeClass("active");
    });
    $(".gnb_area").on("mouseenter", function(){
      $(".sub_bg, .depth2").addClass("on");
      $(".gnb_area").addClass("hover");
    });
      
    $(".gnb_area").on("mouseleave", function(){
      setTimeout(function(){
         $(".sub_bg, .depth2").removeClass("on");
         $(".gnb_area").removeClass("hover");
     }, 100);
  });
});