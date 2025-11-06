window.onload = function(){
        const moveConteudo = document.querySelector('.container-mae-todos');
        const btnHome = document.querySelector(".btn-home"); 
        moveConteudo.style.transform = "translateY(0)";
        
    btnHome.addEventListener("click", function(event){
        event.preventDefault(); 

        moveConteudo.style.transform = "translateY(100%)"; 

        setTimeout(function() {
            window.location.href = btnHome.href;
        }, 500);
    });

};