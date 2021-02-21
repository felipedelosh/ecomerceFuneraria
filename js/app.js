//Wait to charge all html+css
$(document).ready(function(){

    //Goto to main page
    $('#goToMainPage').click(function(){
        location.reload();
    //End go to facebbok    
    });

    //Go to facebook
    $('#goToFacebook').click(function(){
        url = "http://www.facebook.com";
        window.open(url, "_blank");
    //End go to facebbok    
    });

    //Go to Instagram
    $('#goToInstagram').click(function(){
        url = "http://www.instagram.com";
        window.open(url, "_blank");
    //End go to Instagram   
    });


    //Put a currently year on the page
    var currentlyDate = new Date();
    $("#copyright").text(currentlyDate.getFullYear());

});