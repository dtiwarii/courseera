$(document).ready(function(){
  
    $("#reservebutton").click(function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
            }
        });
        $("#reservebutton").click(function(){
            $("#reserveModal").modal('toggle');
            });
            $("#login").click(function(){
            $("#loginModal").modal('toggle');
            });
});