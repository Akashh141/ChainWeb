jQuery( document ).ready(function() {
  // Home Page Slider

  if(jQuery('.slider_items_wrapper.row')[0]){
    jQuery('.slider_items_wrapper.row').slick({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      // nextArrow: '.slider_arrows .arrows_left',
      // prevArrow: '.slider_arrows .arrows_right',

      nextArrow: '.slider_arrows .arrows_right',
      prevArrow: '.slider_arrows .arrows_left',
      
      autoplay: false,
      arrows: true,
      rtl: false,
      responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
         breakpoint: 400,
         settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
         }
      }]
       
    });

    jQuery('.slider_arrows .arrows_right ').on('click',function(){
        jQuery('.slider_items_wrapper.row').slick('slickNext');
    });
    jQuery(' .slider_arrows .arrows_left ').on('click',function(){
        jQuery('.slider_items_wrapper.row').slick('slickPrev');
    });

    jQuery('.slider_arrows .arrows_right ').addClass('current');
    jQuery(' .slider_arrows .arrows_left ').on('click' , function () {
        jQuery(this).addClass('current').parent().siblings().children().removeClass('current');
        jQuery('.slider_arrows .arrows_right ').removeClass('current');
    });
    jQuery('.slider_arrows .arrows_right ').on('click' , function () {
        jQuery('.slider_arrows .arrows_left ').removeClass('current');
        jQuery(this).addClass('current').parent().siblings().children().removeClass('current');
    });
}





if (window.matchMedia("(max-width: 768px)").matches) {
  // 
  jQuery('.experienced_images_item .row').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

} 
// End The Home Page Slider 
});