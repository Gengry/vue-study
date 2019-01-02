<template>
  <div class="about">
    <h1>This is a {{ food }} </h1>
  </div>
</template>
<script>
export default {
  props: {
    food: {
      type: String,
      default: '苹果'
    }
  }
}
</script>
