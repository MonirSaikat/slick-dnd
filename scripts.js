$(document).ready(function () {
  function initSliders() {
    $('.sl-slider').not('.slick-initialized').each((index, item) => {
      $(item).slick({
        dots: false,
        infinite: true,
        slidesToShow: 2,
        autoplay: true,
        adaptiveHeight: true,
        speed: 2000,
        delay: 0,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
      });
    });
  }

  initSliders();

  $(".content").sortable({
    revert: true,
    update: function (event, ui) {}
  });

  $(".content").droppable({
    drop: function (event, ui) {
      const height = ui.helper.outerHeight();

      ui.helper
        .css('display', 'block ')
        // .css('height', `${height}px`)
        .removeClass('draggable-item ui-draggable ui-draggable-handle')
        .addClass('sl-slider');

      initSliders();
    }
  });

  $('.draggable-item').draggable({
    helper: "clone",
    connectToSortable: ".content",
    revert: "invalid",
    stop: function () {},
    start: function (event, ui) {
      // var h = $(this).outerHeight();
      // ui.helper.css('height', `${h}px`);
    }
  });
});