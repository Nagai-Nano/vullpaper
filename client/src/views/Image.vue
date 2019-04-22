<template>
  <v-container pt-5>
    <v-layout row wrap>
      <Spinner
        v-if="loading"
        size="medium"
        style="min-height: 80vh;width: 100%"
      />

      <template v-else>
        <v-flex xs12 md9>
          <ImageDetail :image="image" />
        </v-flex>

        <v-flex md3>
          <ArtistInfo :artist-name="image.artist" />
        </v-flex>
      </template>
    </v-layout>

    <template v-if="!loading">
      <v-divider class="my-3" />
      <RelatedImages :tags="image.relatedTags" />
    </template>
  </v-container>
</template>

<script>
import request from '@/lib/request';
import ImageDetail from '@/components/image/ImageDetail';
import ArtistInfo from '@/components/image/ArtistInfo';
import RelatedImages from '@/components/image/RelatedImages';
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
      loading: true,
      image: {}
    };
  },
  components: {
    ImageDetail,
    ArtistInfo,
    RelatedImages,
    Spinner
  },
  async created() {
    const response = await request(`/image/${this.id}`);

    this.image = response;
    this.loading = false;
  }
};
</script>
