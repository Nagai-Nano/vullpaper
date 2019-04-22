<template>
  <Hero max-height="35rem">
    <v-container>
      <Title title="vullpaper" light />

      <span class="headline white--text letter-spacing font-weight-regular">
        Nơi tổng hợp ảnh Anime & Manga mới nhất
      </span>
      <div class="mt-2">
        <v-btn
          class="bg-primary white--text letter-spacing"
          flat
          large
          style="margin-left: auto"
          @click="scrollToImages"
        >
          Xem ngay
        </v-btn>
        <v-btn
          tag="a"
          outline
          large
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

export default {
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
