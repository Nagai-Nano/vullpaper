<template>
  <v-container fluid ma-0 pa-0>
    <Intro />

    <Images />
  </v-container>
</template>

<script>
import Intro from '@/components/home/Intro';
import Social from '@/components/home/Social';
import Images from '@/components/home/Images';

export default {
  components: {
    Intro,
    Social,
    Images
  }
};
</script>
