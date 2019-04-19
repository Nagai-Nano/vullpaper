<template>
  <Hero :src="require('@/assets/bg-pattern.png')" max-height="27.8rem">
    <div
      class="fill-height text-xs-center"
      style="background: rgba(17, 17, 17, .9);"
    >
      <div>
        <Title
          title="otaku sanctuary"
          light
          line-space="mx-auto"
          class="mt-4"
        />

        <div class="container d-flex pt-2">
          <div
            v-for="s in socials"
            :key="s.link"
            class="rounded white mx-2 pa-5 cursor-pointer hover-color"
          >
            <i style="font-size: 5rem" :class="s.icon" />
            <v-btn
              tag="a"
              :href="s.link"
              target="_blank"
              class="d-block bg-primary letter-spacing mt-3"
              color="white"
              flat
            >
              truy cập
            </v-btn>
          </div>
        </div>
        <p class="headline white--text text-uppercase letter-spacing ma-0">
          Nhớ ấn Like để ủng hộ Page nhé :)
        </p>
      </div>
    </div>
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
  data() {
    return {
      socials: [
        {
          icon: 'fas fa-globe',
          link: 'https://otakusan.net'
        },
        {
          icon: 'fab fa-facebook-square',
          link: 'https://facebook.com/OtakuSanc/'
        },
        {
          icon: 'fab fa-facebook-messenger',
          link: 'https://m.me/OtakuSanc'
        },
        {
          icon: 'fab fa-discord',
          link: 'https://discord.gg/7hNdJHM'
        }
      ]
    };
  }
};
</script>

<style scoped>
.hover-color:hover > i {
  color: #41b883 !important;
}
</style>
