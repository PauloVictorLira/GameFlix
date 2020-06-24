function abrirJanela(link) {
    window.open(link, "_self");    
}

//PLAY GAMES

var p = $(".popup__overlay");

$(".popup__close").click(
  function() {
    $("iframe").attr("src", "");  }
);

$(".module").click( function(e){
	var link = $(this).data("jogo");
	
	$("iframe").attr("src", link);
	$(".popup__overlay").css("display","block");
	
});

$(".popup__close").click(function () {
  p.css("display", "none");
});