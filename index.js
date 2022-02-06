 // Menu
$(".menu-toggle").on("click", function (){
    $(".nav-block").toggleClass("pulldown");
    $(".menu-toggle").toggleClass("pulldown");
    $("#menu").slideToggle();
});
