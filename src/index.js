function saveDragItem (el, binding, vnode) {
}

function updateDragItem (el, binding, vnode) {
}

function removeDragItem (el, binding, vnode) {
}

function install (Vue, options) {

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
