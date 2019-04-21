<template>
  <div>{{ code }}</div>
</template>

<script>
export default {
  props: {
    code: {
      type: Number,
      default: 403
    }
  }
};
</script>
