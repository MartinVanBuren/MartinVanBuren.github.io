$(document).ready(function(){
      $('.brand-slider').slick({
      	infinite: false,
 		slidesToShow: 5,
  		slidesToScroll: 1,
  		variableWidth: true,
  		adaptiveHeight: true,
  		responsive: [
    {
      breakpoint: 1900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
  		adaptiveHeight: true,
  		infinite: false
      },
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
  		adaptiveHeight: true,
  		infinite: false
      }
    },
  ]
      });
    });