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

        <v-container grid-list-md fluid pt-3>
          <v-layout row wrap>
            <v-flex v-for="n in 9" :key="n" xs4 md2 d-flex>
              <v-img
                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                aspect-ratio=".7"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-layout fill-height align-center justify-center ma-0>
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-layout>
                </template>
              </v-img>
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import Intro from '@/components/home/Intro';
import Social from '@/components/home/Social';
import Title from '@/components/common/Title';

export default {
  components: {
    Intro,
    Social,
    Title
  },
  data() {
    return {
      sort: [
        { title: 'Mới nhất', value: 'newest' },
        { title: 'Nổi bật', value: 'popular' },
        { title: 'Xem nhiều', value: 'views' },
        { title: 'Ngẫu nhiên', value: 'random' }
      ],
      activeIndex: 0
    };
  },
  methods: {
    handleClick(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style scoped>
.disabled {
  pointer-events: none;
  opacity: 0.6;
}
</style>
