## 0.0.6
2023-06-07

支持 vue.extend 组件引入使用

```js
import dragging from 'vue-directive-dragging'

let D3KitConstrutor = Vue.extend({
  directives: {
    dragging: dragging.draggingDirective
  }
})
```

## 0.0.5
2023-02-13

拖拽时，禁止触发页面滚动等默认事件

## 0.0.4
2023-02-13

支持传参 prevent，允许/禁止默认行为