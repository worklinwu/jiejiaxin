$(function(){$(document).on("scroll",function(){var e=$(".js-header");$("body").scrollTop()>100?e.hasClass("active")||(e.addClass("active"),console.log()):e.removeClass("active")}).trigger("scroll"),$("#js-team-slides").flexslider({prevText:'<i class="am-icon-angle-left"></i>',nextText:'<i class="am-icon-angle-right"></i>'}),commonJs.initNav(),commonJs.initSideControl()});