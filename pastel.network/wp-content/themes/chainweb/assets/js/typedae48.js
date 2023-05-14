jQuery( document ).ready(function() {

    var typed_TExt = jQuery('.home_typed_text').html();

    // Creators. 

    jQuery("#typed").typed({
        strings: [typed_TExt],
        typeSpeed: 100,
        startDelay: 0,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        cursorChar: "|",
        contentType: 'html'
    });

});