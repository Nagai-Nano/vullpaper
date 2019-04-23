<template>
  <Hero :height="bp.smAndDown ? '20rem' : '35rem'">
    <v-container>
      <Title
        :font="bp.smAndDown ? 'display-1' : 'display-2'"
        title="vullpaper"
        light
      />

      <span
        :class="bp.smAndDown ? 'title' : 'headline'"
        class="white--text letter-spacing font-weight-regular"
      >
        Nơi tổng hợp ảnh Anime & Manga
      </span>
      <div>
        <v-btn
          class="bg-primary white--text letter-spacing"
          flat
          :large="bp.mdAndUp"
          style="margin-left: auto"
          @click="scrollToImages"
        >
          Xem ngay
        </v-btn>
        <v-btn
          tag="a"
          outline
          :large="bp.mdAndUp"
          color="white"
          class="ml-1 letter-spacing"
          href="https://github.com/nagai-Nano/vullpaper"
          target="_blank"
        >
          Source code
          <i class="ml-2 fab fa-github" />
        </v-btn>
      </div>
    </v-container>
  </Hero>
</template>

<script>
import Hero from '../common/Hero';
import Title from '../common/Title';
import breakpointMixin from '@/lib/breakpointMixin';

export default {
  mixins: [breakpointMixin],
  components: {
    Hero,
    Title
  },
  methods: {
    scrollToImages() {
      const imagesView = document.querySelector('#images');
      imagesView.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>
