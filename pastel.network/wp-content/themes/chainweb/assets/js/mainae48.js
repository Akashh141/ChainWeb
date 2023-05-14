jQuery(document).ready(function() {

    // Show the menu sidebar on mobile 


    var getIMGPath = jQuery('.hidden_dropdownImg').attr('src');
    var hidden_Topdropdown = jQuery('.hidden_Topdropdown').attr('src');


    // Add the class in submenu class 

    jQuery('.pas_nav_main .sub-menu li a').addClass('dropdown-item');
    jQuery(".pas_nav_main .dropdown-toggle.nav-link").append(`<span><img src=${getIMGPath} class='img-fluid'></span>`);




    jQuery(".mobile_menu img").click(function() {

        jQuery(".menu_close").toggleClass("active-toggle");
        jQuery(".mobile_navigation_menu").toggleClass("active");
        jQuery("#overlay-div").toggleClass("overlay");

    });


    jQuery(".overview").click(function() {


        jQuery(".menu_close").removeClass("active-toggle");
        jQuery(".mobile_navigation_menu").removeClass("active");
        jQuery("#overlay-div").removeClass("overlay");

    });

    jQuery("#overlay-div").click(function() {
        jQuery(this).removeClass("overlay");
        jQuery(".menu_close").toggleClass("active-toggle");
        jQuery(".mobile_navigation_menu").removeClass("active");
        jQuery('.mobile_menu_navbar .nav-item.dropdown span img').attr('src', getIMGPath)
    });

    jQuery(".menu_close").click(function() {
        jQuery(this).toggleClass("active-toggle");
        jQuery(".mobile_navigation_menu").removeClass("active");
        jQuery("#overlay-div").removeClass("overlay");
    });


    jQuery('.mobile_menu_navbar .nav-item.dropdown a').on('click', function(e) {
        $this = jQuery(this);

        jQuery('.mobile_menu_navbar a.dropdown-toggle').removeClass("show");
        jQuery('.mobile_menu_navbar .dropdown-menu').removeClass("show");


        $this.closest('li').find('.dropdown-menu').toggleClass('opened');

        if ($this.closest('li').find('.dropdown-menu').hasClass("opened")) {
            $this.closest('li').find('.dropdown-menu').addClass('show');
            $this.find('span img').attr('src', hidden_Topdropdown);
        } else {
            $this.closest('li').find('.dropdown-menu').removeClass('show');
            $this.find('span img').attr('src', getIMGPath);
        }

        // if (jQuery(".mobile_menu_navbar a.dropdown-toggle").hasClass("show")) {

        //     jQuery(".mobile_menu_navbar a.dropdown-toggle span img").attr('src', hidden_Topdropdown);

        // } else {
        //     jQuery('.mobile_menu_navbar .nav-item.dropdown span img').attr('src', getIMGPath);
        // }

    });

    jQuery(document).click(function(event) {
        var jQuerytarget = jQuery(event.target);
        if (!jQuerytarget.closest('.nav-item.dropdown').find('#navbarDropdown').length) {
            jQuery('.mobile_menu_navbar .nav-item.dropdown span img').attr('src', getIMGPath)
        }
    });

    // End Show the menu sidebar on mobile 

    jQuery('p:empty').remove();



});