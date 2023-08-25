jQuery(document).ready(($)=>{

    // документ загружен!

    $('.element-1').owlCarousel({
    items: 3,
    merge: true,
    loop: true,
    margin: 10,
    video: true,
    lazyLoad: true,
    center: true,
  });
});
