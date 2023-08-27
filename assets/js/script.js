jQuery(document).ready(($)=>{

    // документ загружен!

    $('.element-1').owlCarousel({
        center: false,
        items:2,
        loop:false,
        margin:10,
        responsive:{
            600:{
                items:4
            }
        }
  });
});
