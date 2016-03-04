(function($){

  $ = $ || require('jquery-mobile');

  function getChilders(element){
     return $(element).children('li');
  };

  var _directions = {
    "left": "-=",
    "right": "+="
  }

  $.fn.initSwiper = function(){
    var childs = getChilders($(this));
    
  };






})(JQuery);
