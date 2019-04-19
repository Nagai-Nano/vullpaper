<template>
  <v-container fluid ma-0 pa-0>
    <Intro />
    <Social />

    <v-container>
      <v-layout wrap>
        <v-flex xs12>
          <Title
            class="text-xs-center mt-2"
            line-space="mx-auto"
            :title="sort[activeIndex].title"
          />
        </v-flex>

        <v-flex md6 offset-md3 class="text-xs-center">
          <ul class="d-flex pt-2">
            <li
              v-for="(s, i) in sort"
              :key="s.value"
              class="cursor-pointer title letter-spacing text-uppercase"
              :class="{ disabled: i === activeIndex }"
              @click="handleClick(i)"
            >
              {{ s.title }}
            </li>
          </ul>
        </v-flex>

        <v-flex xs12>
          <Spinner size="medium" style="min-height: 500px" />
          <div v-if="loading">loading...</div>
          <ImageGrid v-else :posts="posts" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import Intro from '@/components/home/Intro';
import Social from '@/components/home/Social';
import Title from '@/components/common/Title';
import ImageGrid from '@/components/common/ImageGrid';
import Spinner from '@/components/common/Spinner';
import request from '@/lib/request';

export default {
  components: {
    Intro,
    Social,
    Title,
    ImageGrid,
    Spinner
  },
  data() {
    return {
      sort: [
        { title: 'Mới nhất', value: 'newest' },
        { title: 'Nổi bật', value: 'popular' },
        { title: 'Xem nhiều', value: 'views' },
        { title: 'Ngẫu nhiên', value: 'random' }
      ],
      activeIndex: 0,
      posts: [],
      loading: false
    };
  },
  methods: {
    handleClick(index) {
      this.activeIndex = index;
    }
  },
  async created() {
    this.loading = true;

    const response = await request(`/posts/${this.sort[0].value}`);
    this.posts = response.posts;

    this.loading = false;
  }
};
</script>

<style scoped>
.disabled {
  pointer-events: none;
  opacity: 0.6;
}
</style>
