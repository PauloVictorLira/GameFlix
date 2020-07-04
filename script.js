//Abre o link da grid "Destaque"
function abrirDestaque(link, e) {
  window.open(link, "_self");
}

//Abre o sidebar em Mobile
function openSidebar() {
  document.getElementsByClassName("sidebar")[0].style.width = "200px";
  document.getElementsByClassName("backgroundSide")[0].style.width = "100%";
}

//Fecha o sidebar em Mobile
document.addEventListener('click', evt => {
  var width = $(window).width();
  if (width <= 768) {
    if (evt.path.indexOf(document.querySelector('div.sidebar')) < 0) {
      document.getElementsByClassName("sidebar")[0].style.width = "0";
      document.getElementsByClassName("backgroundSide")[0].style.width = "0";
    }
  }
}, true);

//Reseta sidebar, em caso de redimensionamento de Mobile para Desktop
$(window).resize(function () {
  var width = $(window).width();
  if (width > 768) {
    $('.sidebar').css({
      width: '200px'
    })
  }
  else {
    $('.sidebar').css({
      width: '0'
    });
  }
});

//========= PLAY GAMES =========

var p = $(".popup__overlay");

//Abre o jogo
$(".module").click(function (e) {
  var link = $(this).data("jogo");

  $("iframe").attr("src", link);
  $(".popup__overlay").css("display", "block");

});

//Fecha o jogo
$(".popup__close").click(function () {
  
  $("iframe").attr("src", ""); 
  p.css("display", "none");
});