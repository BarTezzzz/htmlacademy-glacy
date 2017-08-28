/*global $, jQuery*/

$(document).ready(function () {
  'use strict';

  /*SLIDER*/
  $.fn.sliderSwitcherManual = function () {
    $('.slider__switch_1').on('click', function () {
      $('body').removeClass('bg-2 bg-3').addClass('bg-1');
    });
    $('.slider__switch_2').on('click', function () {
      $('body').removeClass('bg-1 bg-3').addClass('bg-2');
    });
    $('.slider__switch_3').on('click', function () {
      $('body').removeClass('bg-1 bg-2').addClass('bg-3');
    });
  };
  
  $.fn.sliderSwitcherManual();
  
  $.fn.sliderSwitcherAuto = function () {
    var
      $currentInput = $('.slider__input:checked'),
      $nextInput = $currentInput.next(),
      $prevInput = $currentInput.prev();

    $currentInput.removeAttr('checked');
    if ($nextInput.prop('type') === 'radio') {
      $nextInput.prop('checked', 'checked');
      if (!$('body').hasClass('bg-2')) {
        $('body').removeClass('bg-1 bg-3').addClass('bg-2');
      } else {
        $('body').removeClass('bg-1 bg-2').addClass('bg-3');
      }
    } else {
      $nextInput = $('.slider__input').first().prop('checked', 'checked');
      $('body').removeClass('bg-2 bg-3').addClass('bg-1');
    }
  };
  
  setInterval($.fn.sliderSwitcherAuto, 3000);

/*Modal-Window*/
  $('.js-modal-show').on('click', function (event) {
    event.preventDefault(event);
    $('.overlay').show();
    if ($(this).hasClass('glacy-btn_feedback')) {
      $('.feedback-modal-window').fadeIn('slow');
    } else if ($(this).hasClass('contacts__map-link')) {
      $('.map-modal-window').fadeIn('slow');
    }
  });
  
  $('.modal__close-btn').on('click', function (event) {
    event.preventDefault(event);
    $('.feedback-modal-window').fadeOut('fast');
    $('.map-modal-window').fadeOut('fast');
    $('.overlay').hide();
  });
  
});