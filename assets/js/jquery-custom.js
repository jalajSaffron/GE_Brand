$(".slider").slick({
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
});

//ticking machine
var percentTime;
var tick;
var time = .1;
var progressBarIndex = 0;

$('.progressBarContainer .progressBar').each(function (index) {
    var progress = "<div class='inProgress inProgress" + index + "'></div>";
    $(this).html(progress);

});

function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 10);
}

function interval() {
    if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
        progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
        startProgressbar();
    } else {
        percentTime += 1 / (time + 5);
        $('.inProgress' + progressBarIndex).css({
            width: percentTime + "%"
        });
        var sliderText = $('.inProgress' + progressBarIndex).parent().parent().find(".wrapper__slider__text");     
        if (percentTime >= 100) {
            sliderText.removeClass("active");
        } else {
            sliderText.addClass("active");
        }
        if (percentTime >= 100) {
            $('.single-item').slick('slickNext');
            progressBarIndex++;
            if (progressBarIndex > 2) {
                progressBarIndex = 0;
            }
            startProgressbar();
        }
    }
}

function resetProgressbar() {
    $('.inProgress').css({
        width: 0 + '%'
    });
    $(".progressBarContainer").find('.wrapper__slider__text').removeClass("active");
    clearInterval(tick);
}

startProgressbar();
// End ticking machine

$('.item').click(function () {
    clearInterval(tick);
    var goToThisIndex = $(this).find("span").data("slickIndex");
    $('.single-item').slick('slickGoTo', goToThisIndex, false);
    startProgressbar();
});


  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .addClass("fa-minus")
      .removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-plus")
        .addClass("fa-minus");
    })
    .on("hide.bs.collapse", function () {
      $(this)
        .prev(".card-header")
        .find(".fa")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    });

    // AOS

    AOS.init();


    /*      jjjjjjjjjjjjjjjjjjjjjjjjjjjj  j open  jjjjjjjjjjjjjjjjjjjjjjjjjjjj       */
    // mobile menu

    $("#site_menu_toggle").click(function(){
    	$('body').addClass("desktop-megaMenu-open");
    	$('#desktop_mega_menu').addClass('show');
    })

    $("#close_mega_menu").click(function(){
    	$('body').removeClass("desktop-megaMenu-open");
    	$('#desktop_mega_menu').removeClass('show');
    })

    $("#mobile_menu_toggle").click(function(){
    	$('body').toggleClass("mobile-megaMenu-open");
    	$('#mobile_menu_toggle').toggleClass('mobileToggleClick');
    	$('#mobile_mega_menu').toggleClass('show');
    	if($('.mobileMenu_link_overlay').hasClass('show')){

    		$('.mobileMenu_link_overlay').removeClass('show');
    		$('body').removeAttr('class');
    	}
    })

    $("#has_child_about").click(function(){
    	$('body').addClass("mobile-linkOverlay-open-1");
    	$('#menu_link_overlay-1').addClass('show');
    })

    $("#back_toggle_link-1").click(function(){
    	$('body').removeClass("mobile-linkOverlay-open-1");
    	$('#menu_link_overlay-1').removeClass('show');
    })

    $("#has_child_design").click(function(){
    	$('body').addClass("mobile-linkOverlay-open-2");
    	$('#menu_link_overlay-2').addClass('show');
    })

    $("#back_toggle_link-2").click(function(){
    	$('body').removeClass("mobile-linkOverlay-open-2");
    	$('#menu_link_overlay-2').removeClass('show');
    })

    $("#has_child_exp").click(function(){
    	$('body').addClass("mobile-linkOverlay-open-3");
    	$('#menu_link_overlay-3').addClass('show');
    })

    $("#back_toggle_link-3").click(function(){
    	$('body').removeClass("mobile-linkOverlay-open-3");
    	$('#menu_link_overlay-3').removeClass('show');
    })

    /*      jjjjjjjjjjjjjjjjjjjjjjjjjjjj  j close  jjjjjjjjjjjjjjjjjjjjjjjjjjjj       */