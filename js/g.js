// ================================================
// PORTFÓLIO (página portfolio.php) - Carrossel Slick
// Só roda se a classe existir, então não afeta a index
// ================================================
$(document).ready(function () {
  if (!$('.portfolio-carrossel').length) return;

  $('.portfolio-carrossel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

/* ===== VITRINE DE PROJETOS (o slick.js precisa do jQuery) ===== */
$(function () {
  // Quem pediu menos movimento no sistema não recebe troca automática
  var reduzir = false;

  $('.vitrine_carrossel').slick({
    slide: 'article',        // os slides são <article> (o padrão do slick é <div>)
    vertical: true,          // a coluna desliza para cima e para baixo
    verticalSwiping: true,   // dá para arrastar com o dedo
    infinite: true,          // depois do último volta o primeiro
    autoplay: !reduzir,      // troca sozinho
    autoplaySpeed: 5000,     // a cada 5 segundos
    pauseOnHover: true,      // mouse em cima = pausa
    speed: reduzir ? 0 : 600,
    prevArrow: '.vitrine_botao_sobe',    // os botões ▲ e ▼ que já estão no HTML
    nextArrow: '.vitrine_botao_desce'
  });
});
