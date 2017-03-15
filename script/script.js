/*global $, jQuery*/

$(document).ready(function () {
  'use strict';

  /*event.preventDefault() gor IE9(event.returnValue = false)*/
  $.fn.eventPreventDefaultSafe = function () {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  };
  /*-------------------------------------------------------*/

  /*SLIDER*/
  $.fn.sliderSwitcher = function () {
    var
      $currentInput = $('.slider__input:checked'),
      $nextInput = $currentInput.next(),
      $prevInput = $currentInput.prev();

    $currentInput.removeAttr('checked');
    if ($nextInput.prop('type') === 'radio') {
      $nextInput.prop('checked', 'checked');
    } else {
      $nextInput = $('.slider__input').first().prop('checked', 'checked');
    }
  };
  
  //setInterval($.fn.sliderSwitcher, 3000);

});