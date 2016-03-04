/**
 * jQuery Plugin to add basic "swipe" support on touch-enabled devices
 *
 * @author plasmashadow
 *
 *  Special thanks to Yair Even of jqSwipe
 *
 * @version 1.0.0
 */


(function($){
	//if( 'ontouchstart' in document.documentElement )

  // $ = $ || require('jquery');
   if(!!!$)
     window.$  = $ = require('jquery');

	$.event.special.swipe = {
		setup: function(){
		  $(this).bind('touchstart', $.event.special.swipe.handler);
		},

		teardown: function(){
			$(this).unbind('touchstart', $.event.special.swipe.handler);
		},


		handler: function(event){
			var args = [].slice.call( arguments, 1 ), // clone arguments array, remove original event from cloned array
				touches = event.originalEvent.touches,
				startX, startY,
				deltaX = 0, deltaY = 0,
				that = this;

			event = $.event.fix(event);

			if( touches.length == 1 ){
				startX = touches[0].pageX;
				startY = touches[0].pageY;
				this.addEventListener('touchmove', onTouchMove, false);
			}

			function cancelTouch(){
				that.removeEventListener('touchmove', onTouchMove);
				startX = startY = null;
			}

			function onTouchMove(e){
				e.preventDefault();

				var Dx = startX - e.touches[0].pageX,
					Dy = startY - e.touches[0].pageY;

				console.log(Dx,Dy);

				if( Math.abs(Dx) >= 20 ){
					cancelTouch();
					deltaX = (Dx > 0) ? -1 : 1;
				}
				else if( Math.abs(Dy) >= 20 ){
					cancelTouch();
					deltaY = (Dy > 0) ? 1 : -1;
				}
				var side = (Dx < 0) ? 'left' : (Dx > 0) ? 'right' : (Dy > 0) ? 'top' : (Dy < 0) ? 'down' : '';
				var eventType = event.type = "swipe"+side;
			  $(this).trigger(eventType, Dx, Dy);
			}
		}
	};
})(window.jQuery || window.Zepto || window.$);
