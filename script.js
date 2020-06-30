//funções

function abrirJanela(link, e) {
  window.open(link, "_self");
}

//PLAY GAMES

var p = $(".popup__overlay");

$(".popup__close").click(
  function () {
    $("iframe").attr("src", "");
  }
);

$(".module").click(function (e) {
  var link = $(this).data("jogo");

  $("iframe").attr("src", link);
  $(".popup__overlay").css("display", "block");

});

$(".popup__close").click(function () {
  p.css("display", "none");
});


function openNav() {
  document.getElementsByClassName("sidebar")[0].style.width = "200px";
  document.getElementsByClassName("backgroundSide")[0].style.width = "100%";
}

document.addEventListener('click', evt => {
  var width = $(window).width();
  if (width <= 768) {
    if (evt.path.indexOf(document.querySelector('div.sidebar')) < 0) {
      document.getElementsByClassName("sidebar")[0].style.width = "0";
      document.getElementsByClassName("backgroundSide")[0].style.width = "0";
    }
  }
}, true);

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

// $('a').click( function(e) {
//   e.preventDefault();
//   return false;
// });