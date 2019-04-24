<template>
  <v-footer light height="auto">
    <v-card tile flat class="bg-primary white--text fill-width fill-height">
      <v-container>
        <v-layout d-flex align-center justify-space-between>
          <v-flex xs12>
            <h1
              class="text-xs-left text-uppercase letter-spacing font-weight-regular"
              :class="{ subheading: bp.smAndDown }"
            >
              Otaku Santuary
            </h1>
          </v-flex>
          <v-flex xs12 class="text-xs-right">
            <v-btn
              v-for="social in socials"
              :key="social.link"
              flat
              icon
              class="white--text"
              href="https://google.com"
              target="_blank"
              :class="{
                'mx-3': social.icon !== 'fab fa-discord' && bp.mdAndUp,
                'mr-0': social.icon === 'fab fa-discord',
                'ma-0': bp.smAndDown
              }"
            >
              <v-icon :size="bp.mdAndUp ? '2.3rem' : '1.3rem'">
                {{ social.icon }}
              </v-icon>
            </v-btn>
          </v-flex>
        </v-layout>

        <v-divider class="grey lighten-2" :class="{ 'my-2': bp.mdAndUp }" />

        <v-layout>
          <v-flex xs12>
            <span
              :class="{ title: bp.mdAndUp }"
              class="d-block mt-2 font-weight-regular letter-spacing"
            >
              &copy; 2019 Vullpaper. Developed by
              <a
                href="https://www.facebook.com/Nanoooooooooooooooooooooooooooooooooooooooooooooox"
                target="_blank"
                class="grey--text text--lighten-4"
              >
                Nano
              </a>
            </span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-footer>
</template>

<script>
import breakpointMixin from '@/lib/breakpointMixin';

export default {
  mixins: [breakpointMixin],
  data() {
    return {
      socials: [
        {
          link: 'https://otakusan.net',
          icon: 'fab fa-chrome'
        },
        {
          link: 'https://www.facebook.com/OtakuSanc/',
          icon: 'fab fa-facebook-square'
        },
        {
          link: 'https://m.me/OtakuSanc',
          icon: 'fab fa-facebook-messenger'
        },
        {
          link: 'https://discord.gg/7hNdJHM',
          icon: 'fab fa-discord'
        }
      ]
    };
  }
};
</script>
