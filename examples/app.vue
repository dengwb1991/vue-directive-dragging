<template>
  <div class="drag-dom"
       v-dragging></div>
</template>

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