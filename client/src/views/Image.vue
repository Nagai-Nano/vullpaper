<template>
  <v-container>
    <v-layout row wrap>
      <Spinner
        v-if="image.loading"
        size="medium"
        style="min-height: 75vh;width: 100%"
      />

      <template v-else>
        <v-flex xs12 md9>
          <ImageDetail :data="image.data" />
        </v-flex>

        <v-flex md3>
          <ArtistInfo :artist-name="image.data.artist" />
        </v-flex>
      </template>
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
