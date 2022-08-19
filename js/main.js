$(document).ready(function (){
    $("#btn_menu").click(function () {
        $("#menu").toggle(1000);
    });

    $(window).resize(function (){
        if (window.innerWidth > 768) {
            $("#menu").css("display","block")
        }
        if (window.innerWidth < 768) {
            $("#menu").css("display","none")
        }
    });
});