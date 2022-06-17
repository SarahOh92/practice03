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
  $(function(){
    $(".gnb").on("mouseenter", function(){
      $(".sub_bg, .depth2").addClass("on");
    });
      
    $(".gnb").on("mouseleave", function(){
      setTimeout(function(){
         $(".sub_bg, .depth2").removeClass("on");
     }, 100);
  });
  });