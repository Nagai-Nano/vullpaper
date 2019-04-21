<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md9>
        <Spinner v-if="image.loading" size="medium" style="min-height: 75vh" />
        <ImageDetail v-else :data="image.data" />
      </v-flex>

      <v-flex md3>
        <ArtistInfo />
      </v-flex>
    </v-layout>

    <v-divider class="my-3" />
  </v-container>
</template>

<script>
import request from '@/lib/request';
import ImageDetail from '@/components/image/ImageDetail';
import ArtistInfo from '@/components/image/ArtistInfo';
import Spinner from '@/components/common/Spinner';

export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      image: {
        loading: true,
        data: {}
      }
    };
  },
  components: {
    ImageDetail,
    ArtistInfo,
    Spinner
  },
  async created() {
    const response = await request(`/image/${this.id}`);

    this.image.data = response;
    this.image.loading = false;
  }
};
</script>
