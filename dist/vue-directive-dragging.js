/**
 * vue-directive-dragging v0.0.4
 * (c) 2023 dengwb
 * @license MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueDirectiveDragging = factory());
}(this, (function () { 'use strict';

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var events = {
    on: function on(el, type, fn) {
      el.addEventListener(type, fn);
    },
    off: function off(el, type, fn) {
      el.removeEventListener(type, fn);
    }
  };

  function install(Vue, options) {
    var _el = null;
    var diffTop = null;
    var diffLeft = null;
    var value = {};

    function handleDragStart(event) {
      value.prevent && event.preventDefault();
      diffLeft = event.touches[0].pageX - _el.offsetLeft;
      diffTop = event.touches[0].pageY - _el.offsetTop;
    }

    function handleDragMove(event) {
      var left = event.touches[0].pageX - diffLeft;
      var top = event.touches[0].pageY - diffTop;

      _el.style.left = left + 'px';
      _el.style.top = top + 'px';
    }
    function saveDragItem(el, binding, vnode) {
      _el = el;
      value = _extends({
        prevent: binding.prevent === false ? false : true
      }, binding.value);
      events.on(el, 'touchstart', handleDragStart);
      events.on(el, 'touchmove', handleDragMove);
    }

    function updateDragItem(el, binding, vnode) {}

    function removeDragItem(el, binding, vnode) {
      events.off(el, 'touchstart', handleDragStart);
      events.off(el, 'touchmove', handleDragMove);
    }

    Vue.directive('dragging', {
      bind: saveDragItem,
      update: updateDragItem,
      unbind: removeDragItem
    });
  }

  var index = {
    install: install,
    version: '0.0.4'
  };

  return index;

})));
