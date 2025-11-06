$(document).ready(function(){

    let carrosell = $(".carrousel");
    let btnEntrar = $("#btn-entrar");

    btnEntrar.click(function(){
        $('body,html').css("transform", "translateX(-100%)");

        setTimeout(function() {
            window.location.href = "viagens.html";
        }, 500);
    
    });

    carrosell.slick({
            autoplay: true,
            slidesToShow: 1, 
            dots:false,
            arrows:false,
    });

});