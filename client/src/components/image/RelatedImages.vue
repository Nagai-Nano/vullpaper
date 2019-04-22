<template>
  <v-layout row wrap>
    <v-flex xs12>
      <h1 class="headline letter-spacing text-uppercase">
        Có liên quan
      </h1>
    </v-flex>
    <v-flex xs12>
      <Spinner v-if="loading && !images.length" />
      <ImageGrid :images="images" />
    </v-flex>
  </v-layout>
</template>

<script>
import ImageGrid from '../common/ImageGrid';
import Spinner from '../common/Spinner';
import request from '@/lib/request';

export default {
  props: {
    tags: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      images: [],
      loading: true
    };
  },
  components: {
    ImageGrid,
    Spinner
  },
  async created() {
    const response = await request(`/images/${encodeURIComponent(this.tags)}`);
    this.images = response.images;
    this.loading = false;
  }
};
</script>
