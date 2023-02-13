<template>
  <div class="drag-dom"
       @click="$_click"
       v-dragging="{ prevent: false }"></div>
</template>

<script>
export default {
  methods: {
    $_click () {
      console.log(111)
    }
  }
}
</script>
<style>
body {
  position: relative;
  user-select: none;
}
.drag-dom {
  width: 100px;
  height: 100px;
  background-color: bisque;
  user-select: none;
  position: fixed;
  top: 200px;
}
</style>