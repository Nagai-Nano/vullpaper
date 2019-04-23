<template>
  <v-container grid-list-md fluid px-0 pb-2 pt-0>
    <v-layout row wrap>
      <v-flex v-for="image in images" :key="image.id" xs4 sm2 d-flex>
        <Imagex
          :src="image.preview"
          aspect-ratio=".7"
          position="top center"
          class="p-relative bordered rounded"
        >
          <router-link
            :to="`/image/${image.id}`"
            class="p-absolute fill-height fill-width overlay t-0 l-0 hover-overlay"
          />
          <div class="p-absolute r-0 b-0">
            <a
              @click.prevent="heart(image)"
              class="d-inline-block pr-1 mb-1 white--text hover-color"
              :class="{ 'mr-2': bp.mdAndUp }"
            >
              <i
                class="fas fa-heart"
                :style="{ 'font-size': bp.mdAndUp ? '1.5rem' : '1rem' }"
              />
            </a>
            <a
              @click.prevent="download(image)"
              class="d-inline-block mr-2 mb-1 white--text hover-color"
            >
              <i
                class="fas fa-download"
                :style="{ 'font-size': bp.mdAndUp ? '1.5rem' : '1rem' }"
              />
            </a>
          </div>
        </Imagex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Imagex from './Imagex';
import { heart, download } from '@/lib/functions';
import breakpointMixin from '@/lib/breakpointMixin';

export default {
  mixins: [breakpointMixin],
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  components: {
    Imagex
  },
  methods: {
    heart,
    download
  }
};
</script>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.15);
  transition: background-color 0.5s;
}

.bordered {
  border: 1px solid #bdbdbd;
}

.hover-overlay:hover {
  background: rgba(0, 0, 0, 0.4);
}
</style>
