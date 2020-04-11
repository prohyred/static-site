/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function(event) {
        if(event.currentTarget.innerText.toLowerCase() === 'recruiters' || event.currentTarget.innerText.toLowerCase() === 'job seekers') {
            $('.navbar-collapse').collapse('hide');
            $('.navbar-solutions-collapse').collapse('hide');
        } else if(event.currentTarget.innerText.toLowerCase() !== 'solutions') {
            $('.navbar-collapse').collapse('hide');

        }

    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });

    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink navbar-scrolled");
      } else {
        $("#mainNav").removeClass("navbar-shrink navbar-scrolled");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });

  })(jQuery); // End of use strict

// $(document).ready(function() {
//   $(document).on('submit', '#contactForm', function(e) {

//     e.preventDefault();
//     var values = {};
//     $.each($('#contactForm').serializeArray(), function(i, field) {
//         values[field.name] = field.value;
//     });

//     // Use Ajax to submit form data
//     var url = 'https://script.google.com/macros/s/AKfycby3JLci0ay5Elztdyj5DH2sl1XVMHOCbDqLGpHuq2GokJOIszo/exec';
//     url += `?callback=success&name=${values.name}&email=${values.email}&phone=${values.phone}&message=${values.message}&action=insert`;

//     $.ajax({
//       type: "GET",
//       crossDomain: true,
//       url: url, 
//       dataType: "jsonp"
//     })
//     .then(res => {
//       console.log(res.success());
//     })
//     .catch(res => {
//       console.log(res);
//     });

//   });
// });
