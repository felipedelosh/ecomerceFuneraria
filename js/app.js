//Wait to charge all html+css
$(document).ready(function(){

    //Send whatsapp to seller
    $("#icoButtonWhatsapp").click(function(){
        url = "https://api.whatsapp.com/send?phone=+573104234025&text=test";
        window.open(url, "_blank");
    });

    //Goto to main page
    $('#icoMainPage').click(function(){
        location.reload();
    //End go to facebbok    
    });

    //Go to facebook
    $('#icoFacebook').click(function(){
        url = "http://www.facebook.com";
        window.open(url, "_blank");
    //End go to facebbok    
    });

    //Go to Instagram
    $('#icoInstagram').click(function(){
        url = "http://www.instagram.com";
        window.open(url, "_blank");
    //End go to Instagram   
    });


    //Carousel Control
    var imgItems = $('.slider li').length; // Get numbers of sliders 
	var imgPos = 1; // set a default slider to show
	//If you mouve a next or previus the page wait 1 min to move again
	var waitToMove = 0;
	$('.right').click(function(){
		waitToMove = 1;
	});
	$('.left').click(function(){
		waitToMove = 1;
	});


	// Add event to sliders li
	for(i = 1; i <= imgItems; i++){
		$('.pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//------------------------

	$('.slider li').hide(); // Hiden all sliders to show a first
	$('.slider li:first').show(); // show first slider
	$('.pagination li:first').css({'color': '#CD6E2E'}); // 

	// Ejecutamos todas las funciones
	$('.pagination li').click(pagination);
	$('.right').click(nextSlider);
	$('.left').click(prevSlider);

	


	//Set a time to change sider to slider
	//If you wait the page show others products
	setInterval(function(){

		if (waitToMove == 0){
			nextSlider();
		}else{
			waitToMove = 0;
		}

	}, 7000);

	// Funtion to jump sliderder/carousel
	function pagination(){
		var paginationPos = $(this).index() + 1; // get a current slider

		$('.slider li').hide(); // Ocultamos todos los slides
		$('.slider li:nth-child('+ paginationPos +')').fadeIn(); //show a current slider

		// set slyles
		$('.pagination li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		imgPos = paginationPos;
	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // hiden all sliders
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // show a current slider

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.pagination li').css({'color': '#858585'});
		$('.pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.slider li').hide(); // hidden all sliders
		$('.slider li:nth-child('+ imgPos +')').fadeIn(); // show a current slider
	}
   
});