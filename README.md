##Swiper
Make a swipable element.

##Usage

```javascript
<script src="dist/swiper.js"></script>

<script type="text/javascript">


		$('div').on('swipeleft', function(e, Dx, Dy){
			console.log("swipeleft");
			console.log(Dx, Dy);
		});
		$('div').on('swiperight', function(e, Dx, Dy){
			console.log("swiperight");
			console.log(Dx, Dy);
		});
		$('div').on('swipetop', function(e, Dx, Dy){
			console.log("swipetop");
			console.log(Dx, Dy);
		});
		$('div').on('swipedown', function(e, Dx, Dy){
			console.log("swipebottom");
			console.log(Dx, Dy);
		});

</script>

```

##Demo

```
git clone https://github.com/plasmashadow/swiper.git
cd swiper
npm install http-server
//run
http-server
//visit localhost:8080

```

##License
MIT