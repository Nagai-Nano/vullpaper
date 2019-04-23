<template>
  <v-container fluid ma-0 pa-0>
    <Hero :height="bp.smAndDown ? '15rem' : '28rem'">
      <v-container>
        <Title
          title="tags"
          light
          :font="bp.smAndDown ? 'display-1' : 'display-2'"
        />
        <span
          :class="bp.smAndDown ? 'title' : 'headline'"
          class="white--text letter-spacing font-weight-regular"
        >
          Danh sách tag có nhiều ảnh nhất
        </span>
      </v-container>
    </Hero>

    <v-container>
      <InfiniteScroll
        v-if="tags.length"
        :loading="loading"
        :has-more="hasMore"
        @loadmore="loadmore"
      >
        <v-layout row wrap>
          <v-flex xs12 v-for="tag in tags" :key="tag.id">
            <router-link
              tag="h1"
              :to="`/images?q=${tag.name}`"
              class="text-uppercase letter-spacing font-weight-regular hover-color"
              :class="{
                headline: bp.smAndDown,
                'mt-1': bp.smAndDown,
                'mb-2 pb-1': bp.mdAndUp
              }"
              style="line-height: 1!important; word-break: break-all;"
            >
              <a
                class="decoration-none hover-underline d-block grey--text text--darken-2"
              >
                {{ tag.name }} ({{ tag.count | formattedCount }})
              </a>
            </router-link>
            <ImageGrid :class="{ 'pt-2': bp.smAndDown }" :images="tag.images" />
            <v-divider :class="{ 'my-3': bp.mdAndUp, 'my-2': bp.smAndDown }" />
          </v-flex>
        </v-layout>
      </InfiniteScroll>

      <Spinner
        v-if="loading"
        style="min-height: 10rem; width: 100%"
        size="medium"
      />
    </v-container>
  </v-container>
</template>

<script>
import Hero from '@/components/common/Hero';
import Title from '@/components/common/Title';
import ImageGrid from '@/components/common/ImageGrid';
import Spinner from '@/components/common/Spinner';
import InfiniteScroll from '@/components/images/InfiniteScroll';
import breakpointMixin from '@/lib/breakpointMixin';
import request from '@/lib/request';

export default {
  mixins: [breakpointMixin],
  components: {
    Hero,
    Title,
    ImageGrid,
    InfiniteScroll,
    Spinner
  },
  data() {
    return {
      tags: [],
      loading: true,
      hasMore: true,
      page: 1
    };
  },
  methods: {
    async loadmore() {
      this.loading = true;
      this.page++;

      const response = await request(`/tags?page=${this.page}`);
      this.tags = [...this.tags, ...response.tags];
      this.hasMore = response.hasMore;

      this.loading = false;
    }
  },
  filters: {
    formattedCount(value) {
      const regex = /\B(?=(\d{3})+(?!\d))/g;
      return value.toString().replace(regex, '.');
    }
  },
  async created() {
    const response = await request(`/tags`);
    this.tags = response.tags;
    this.hasMore = response.hasMore;

    this.loading = false;
  }
};
</script>
