<template>
  <Hero :src="require('@/assets/bg-pattern.png')" height="32rem">
    <v-layout
      row
      wrap
      class="d-flex text-xs-center fill-height align-content-center"
      style="background: rgba(17, 17, 17, .9);"
    >
      <Title
        title="otaku sanctuary"
        light
        line-space="mx-auto"
        :font="bp.smAndDown ? 'display-1' : 'display-2'"
      />
      <span class="white--text">{{ bp }}</span>
      <div class="container d-flex pt-2 justify-space-around layout wrap">
        <div
          v-for="(s, i) in socials"
          :key="s.link"
          class="rounded white cursor-pointer hover-color"
          :class="{
            'mr-3': bp.mdAndUp && i < 3,
            'pa-5': bp.lgOnly,
            'pa-4': bp.mdOnly,
            'pa-2': bp.smAndDown,
            'mt-2': bp.smAndDown && i > 1,
            'mr-2': bp.smAndDown && i % 2 === 0
          }"
        >
          <i
            :style="{ 'font-size': bp.mdAndUp ? '5rem' : '4rem' }"
            style="transition: all .3s"
            :class="s.icon"
          />
          <v-btn
            tag="a"
            :href="s.link"
            large
            block
            target="_blank"
            class="bg-primary letter-spacing mt-3"
            color="white"
            flat
          >
            truy cập
          </v-btn>
        </div>
      </div>
      <p
        :class="{ headline: bp.mdAndUp, subheading: bp.smAndDown }"
        class="white--text text-uppercase letter-spacing ma-0 font-weight-regular"
      >
        Nhớ ấn Like để ủng hộ Page nhé :)
      </p>
    </v-layout>
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
