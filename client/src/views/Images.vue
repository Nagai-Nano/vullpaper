<template>
  <v-container fluid ma-0 pa-0>
    <Intro :q="q" />

    <Images :q="q" />
  </v-container>
</template>

<script>
import Intro from '@/components/images/Intro';
import Images from '@/components/images/Images';

export default {
  props: {
    q: {
      type: String,
      required: true
    }
  },
  components: {
    Intro,
    Images
  }
};
</script>
