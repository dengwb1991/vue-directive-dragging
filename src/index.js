const events = {
  on (el, type, fn) {
    el.addEventListener(type, fn)
  },
  off (el, type, fn) {
    el.removeEventListener(type, fn)
  }
}

function install (Vue, options) {
  let _el = null
  let isTouch = true
  let diffTop = null
  let diffLeft = null
  let value = {}

  function handleDragStart (event) {
    value.prevent && event.preventDefault()
    diffLeft = event.touches[0].pageX - _el.offsetLeft
    diffTop = event.touches[0].pageY - _el.offsetTop
  }

  function handleDragMove (event) {
    event.preventDefault()
    const left = event.touches[0].pageX - diffLeft
    const top =  event.touches[0].pageY - diffTop

    _el.style.left = `${left}px`
    _el.style.top = `${top}px`
  }
  function saveDragItem (el, binding, vnode) {
    _el = el
    value = {
      prevent: binding.prevent === false ? false : true,
      ...binding.value
    }
    events.on(el, 'touchstart', handleDragStart)
    events.on(el, 'touchmove', handleDragMove)
  }
  
  function updateDragItem (el, binding, vnode) {
  }
  
  function removeDragItem (el, binding, vnode) {
    events.off(el, 'touchstart', handleDragStart)
    events.off(el, 'touchmove', handleDragMove)
  }

  Vue.directive('dragging', {
    bind: saveDragItem,
    update: updateDragItem,
    unbind: removeDragItem
  })
}

export default {
  install,
  version: '__VERSION__'
}
