<template>
  <v-layout
    row
    wrap
    class="p-relative"
    :style="{ 'max-height': $attrs.maxHeight || $attrs.height || 'auto' }"
  >
    <v-flex xs12>
      <Imagex v-bind="$attrs" position="top right" />
    </v-flex>
    <v-flex
      xs12
      class="p-absolute fill-width fill-height d-flex align-center overlay"
    >
      <slot />
    </v-flex>
  </v-layout>
</template>

<script>
import Imagex from '@/components/common/Imagex';

export default {
  components: {
    Imagex
  },
  data() {
    return {
      imageCount: 29
    };
  },
  computed: {
    randomIndex() {
      return Math.floor(Math.random() * this.imageCount) + 1;
    }
  },
  created() {
    if (!this.$attrs.src) {
      this.$attrs.src = `https://res.cloudinary.com/nanu/image/upload/${
        this.randomIndex
      }.jpg?v=2`;
    }
  }
};
</script>

<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.5);
}
</style>
