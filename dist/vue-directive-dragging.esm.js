/**
 * vue-directive-dragging v0.0.2
 * (c) 2019 dengwb
 * @license MIT
 */
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

  function handleDragStart(event) {
    event.preventDefault();
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
  version: '0.0.2'
};

export default index;
