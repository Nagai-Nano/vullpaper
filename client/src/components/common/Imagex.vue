<template>
  <v-img
    v-bind="$attrs"
    :lazy-src="require('@/assets/loading.png')"
    @load="onLoad"
    @error="onError"
  >
    <template v-if="loading" v-slot:placeholder>
      <v-layout fill-height align-center justify-center ma-0 pa-0>
        <Spinner style="min-height: auto" />
      </v-layout>
    </template>

    <slot v-if="!loading && !error" />
  </v-img>
</template>

<script>
import Spinner from './Spinner';

export default {
  components: {
    Spinner
  },
  data() {
    return {
      loading: true,
      error: false
    };
  },
  methods: {
    onLoad() {
      this.loading = false;
    },
    onError() {
      this.loading = false;
      this.error = true;
      this.$attrs.src = require('@/assets/error.jpeg');
    }
  }
};
</script>
