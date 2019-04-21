<template>
  <v-container>
    <InfiniteScroll :loading="loading" :has-more="hasMore" @loadmore="loadmore">
      <ImageGrid v-if="images.length" :images="images" />
    </InfiniteScroll>
    <Spinner v-if="loading" style="min-height: 10rem" size="medium" />
  </v-container>
</template>

<script>
import InfiniteScroll from '../images/InfiniteScroll';
import ImageGrid from '../common/ImageGrid';
import Spinner from '../common/Spinner';
import request from '@/lib/request';

export default {
  props: {
    q: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      page: 1,
      hasMore: false,
      images: []
    };
  },
  components: {
    ImageGrid,
    Spinner,
    InfiniteScroll
  },
  methods: {
    async loadmore() {
      this.loading = true;
      this.page++;

      const response = await request(
        `/images/${encodeURIComponent(this.q)}?page=${this.page}`
      );
      this.images = [...this.images, ...response.images];
      this.hasMore = response.hasMore;

      this.loading = false;
    }
  },
  async created() {
    this.loading = true;

    const response = await request(`/images/${encodeURIComponent(this.q)}`);
    this.images = response.images;
    this.hasMore = response.hasMore;

    this.loading = false;
  }
};
</script>
