function abrirDestaque(link, e) {
  window.open(link, "_self");
}

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

//========= PLAY GAMES =========

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

  var width = $(window).width();
  if (width < 768) {
    if (!!window.performance && window.performance.navigation.type === 2) {
      // value 2 means "The page was accessed by navigating into the history"
      console.log('Reloading');
      window.location.reload(); // reload whole page
    }

    window.onpageshow = function (event) {
      if (event.persisted) {
          window.location.reload();
        }
    };
  }

});

$(".popup__close").click(function () {
  p.css("display", "none");
});