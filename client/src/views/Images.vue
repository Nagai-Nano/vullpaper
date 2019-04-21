<template>
  <v-container fluid ma-0 pa-0>
    <Intro :q="q" />

    <v-container>
      <InfiniteScroll
        :loading="loading"
        :has-more="hasMore"
        @loadmore="loadmore"
      >
        <ImageGrid v-if="images.length" :images="images" />
      </InfiniteScroll>
      <Spinner v-if="loading" style="min-height: 10rem" size="medium" />
    </v-container>
  </v-container>
</template>

<script>
import Intro from '@/components/images/Intro';
import ImageGrid from '@/components/common/ImageGrid';
import Spinner from '@/components/common/Spinner';
import InfiniteScroll from '@/components/images/InfiniteScroll';
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
    Intro,
    ImageGrid,
    Spinner,
    InfiniteScroll
  },
  methods: {
    async loadmore() {
      this.loading = true;
      this.page++;

      const response = await request(`/posts/${this.q}?page=${this.page}`);
      this.images = [...this.images, ...response.posts];
      this.hasMore = response.hasMore;

      this.loading = false;
    }
  },
  async created() {
    this.loading = true;

    const response = await request(`/posts/${this.q}`);
    this.images = response.posts;
    this.hasMore = response.hasMore;

    this.loading = false;
  }
};
</script>
