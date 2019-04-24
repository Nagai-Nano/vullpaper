<template>
  <Hero
    :src="require('@/assets/bg-pattern.png')"
    :height="bp.xsOnly ? '62rem' : bp.smOnly ? '22rem' : '25rem'"
  >
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
      <div class="container d-flex pt-2 pb-0 justify-space-around layout wrap">
        <a
          v-for="(social, index) in socials"
          :key="social.link"
          class="white py-5 rounded grey--text text--darken-4 hover-color"
          :href="social.link"
          target="_blank"
          :class="{
            'fill-width mb-3': bp.xsOnly,
            'mr-3': bp.smAndUp && index < 3,
            'mt-1 mb-3': bp.smAndUp
          }"
        >
          <i
            :class="social.icon"
            style="transition: .3s all"
            :style="{
              'font-size': bp.xsOnly ? '5rem' : bp.smOnly ? '4.5rem' : '5.5rem'
            }"
          />
        </a>
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
import socials from '@/lib/socials';
import breakpointMixin from '@/lib/breakpointMixin';

export default {
  mixins: [breakpointMixin],
  components: {
    Hero,
    Title
  },
  data() {
    return {
      socials
    };
  }
};
</script>
