<template>
  <v-img v-bind="$attrs" :lazy-src="require('@/assets/loading.png')">
    <template v-slot:placeholder>
      <v-layout fill-height align-center justify-center ma-0 pa-0>
        <Spinner style="min-height: auto" />
      </v-layout>
    </template>

    <slot />
  </v-img>
</template>

<script>
import Spinner from './Spinner';

export default {
  components: {
    Spinner
  }
};
</script>
