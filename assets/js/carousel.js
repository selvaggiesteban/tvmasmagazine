$(document).ready(function() {
    var first = $(".loc-wrap .loc-item:first-child");
    var last;
  
    function lastIcons() {
      var width = $(window).width();
      if (width < 991) {
        last = $(".loc-wrap .loc-item:nth-last-child(2)");
      } else if (width > 992 && width < 1199) {
        last = $(".loc-wrap .loc-item:nth-last-child(3)");
      } else if (width > 1200) {
        last = $(".loc-wrap .loc-item:nth-last-child(4)");
      }
    }
    lastIcons();
    $(window).resize(function() {
      lastIcons();
    });
    first.addClass("selected");
    $("#icons-left").click(function() {
      if (!first.hasClass("selected")) {
        $(".selected").removeClass("selected").prev().addClass("selected");
      } else if (first.hasClass("selected")) {
        $(".selected").removeClass("selected");
        last.addClass("selected");
      }
      $(".loc-wrap").animate({
        scrollLeft: $(".selected").position().left
      }, '500');
    });
    $("#icons-right").click(function() {
      if (!last.hasClass("selected")) {
        $(".selected").removeClass("selected").next().addClass("selected");
      } else if (last.hasClass("selected")) {
        $(".selected").removeClass("selected");
        first.addClass("selected");
      }
      $(".loc-wrap").animate({
        scrollLeft: $(".selected").position().left
      }, '500');
    });
  });