<script>
export default {};
</script>

<style scoped>
div.memory {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px #666;
  padding: 20px 20px;
  margin-top: 20px;
}
</style>

<template>
  <div>
    <div class="memory">
      <slot name="title"></slot>
    </div>
    <div class="memory">
      <slot name="content"></slot>
    </div>
    <div class="memory">
        <h2>Author</h2>
        <h4>Can Canbolat</h4>
    </div>
  </div>
</template>