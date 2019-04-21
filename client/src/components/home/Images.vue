<template>
  <v-container id="images">
    <v-layout wrap>
      <v-flex xs12>
        <Title
          class="text-xs-center mt-4 pt-2"
          line-space="mx-auto"
          :title="sort[activeIndex].title"
        />
      </v-flex>

      <v-flex md6 offset-md3 class="text-xs-center">
        <ul class="d-flex pt-2">
          <li
            v-for="(s, i) in sort"
            :key="s.value"
            class="cursor-pointer title letter-spacing text-uppercase hover-underline"
            :class="{ disabled: i === activeIndex }"
            @click="handleClick(i)"
          >
            {{ s.title }}
          </li>
        </ul>
      </v-flex>

      <v-flex xs12>
        <Spinner v-if="loading" size="large" style="min-height: 35rem" />
        <template v-else>
          <ImageGrid :images="images" />
          <v-btn
            :to="`/images/?q=${sort[activeIndex].value}`"
            flat
            block
            class="bg-primary white--text letter-spacing"
          >
            Xem thêm
          </v-btn>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Title from '@/components/common/Title';
import ImageGrid from '@/components/common/ImageGrid';
import Spinner from '@/components/common/Spinner';
import request from '@/lib/request';

export default {
  components: {
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
      images: [],
      loading: false
    };
  },
  methods: {
    async getImages() {
      this.loading = true;

      const response = await request(
        `/posts/${this.sort[this.activeIndex].value}`
      );
      this.images = response.posts;

      this.loading = false;
    },
    handleClick(index) {
      this.activeIndex = index;
      this.getImages();
    }
  },
  created() {
    this.getImages();
  }
};
</script>

<style scoped>
.disabled {
  pointer-events: none;
  opacity: 0.6;
}
</style>
