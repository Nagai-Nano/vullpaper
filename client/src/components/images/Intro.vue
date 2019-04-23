<template>
  <Hero :height="bp.smAndDown ? '15rem' : '28rem'">
    <v-container>
      <Title
        :font="bp.smAndDown ? 'display-1' : 'display-2'"
        :title="intro[0]"
        light
      />
      <span
        :class="bp.smAndDown ? 'title' : 'headline'"
        class="mt-2 white--text letter-spacing font-weight-regular d-block"
      >
        {{ intro[1] }}
      </span>
    </v-container>
  </Hero>
</template>

<script>
import Hero from '../common/Hero';
import Title from '../common/Title';
import breakpointMixin from '@/lib/breakpointMixin';

export default {
  mixins: [breakpointMixin],
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
