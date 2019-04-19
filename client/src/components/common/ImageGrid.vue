<template>
  <v-container grid-list-md fluid pt-3>
    <v-layout row wrap>
      <v-flex v-for="image in images" :key="image.id" xs4 md2 d-flex>
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
            <a @click.prevent class="d-inline-block mr-2 pr-1 mb-1 white--text">
              <i class="fas fa-heart" style="font-size: 1.5rem" />
            </a>
            <a @click.prevent class="d-inline-block mr-2 mb-1 white--text">
              <i class="fas fa-download" style="font-size: 1.5rem" />
            </a>
          </div>
        </Imagex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Imagex from './Imagex';

export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  components: {
    Imagex
  }
};
</script>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.2);
  transition: background-color 0.5s;
}

.bordered {
  border: 1px solid #bdbdbd;
}

.hover-overlay:hover {
  background: rgba(0, 0, 0, 0.4);
}
</style>
