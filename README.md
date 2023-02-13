Implementing a drag-and-drop plugin based on the vue directive

```bash
$ npm i -S vue-directive-dragging
```

```js
// main.js
import dragging from 'vue-directive-dragging'
Vue.use(dragging)

// template
<div v-dragging="{ prevent: false }"></div>
```