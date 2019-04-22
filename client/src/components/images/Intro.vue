<template>
  <Hero height="30rem">
    <v-container>
      <Title :title="intro[0]" light />
      <span class="headline white--text letter-spacing font-weight-regular">
        {{ intro[1] }}
      </span>
    </v-container>
  </Hero>
</template>

<script>
import Hero from '../common/Hero';
import Title from '../common/Title';

export default {
  props: {
    q: {
      type: String,
      required: true
    }
  },
  components: {
    Hero,
    Title
  },
  computed: {
    intro() {
      switch (this.q) {
        case 'newest':
          return ['Mới nhất', 'Ảnh mới luôn được cập nhật liên tục'];
        case 'popular':
          return ['Nổi bật', 'Ảnh có nhiều lượt thích nhất'];
        case 'views':
          return ['Xem nhiều', 'Ảnh được xem nhiều theo ngày'];
        case 'random':
          return ['Ngẫu nhiên', 'Ảnh được sắp xếp ngẫu nhiên'];
        default:
          return [this.q.replace(/_/g, ' '), `Ảnh theo tag: ${this.q}`];
      }
    }
  }
};
</script>
