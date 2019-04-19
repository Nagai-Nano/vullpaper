<template>
  <v-layout row wrap class="p-relative">
    <v-flex xs12>
      <Imagex v-bind="$attrs" />
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
  }
};
</script>

<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.5);
}
</style>
