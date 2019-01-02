<template>
  <div>
    <!-- {{ $route.params.name }} -->
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      // type: [String, Number]
      type: String,
      default: 'geng'
    }
  }
}
</script>
