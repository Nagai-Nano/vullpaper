<template>
  <div class="pl-3">
    <h3 class="mb-2 headline letter-spacing" style="line-height: 1!important">
      Artist
    </h3>
    <Spinner v-if="loading" />
    <template v-if="!loading && artistName && hasArtistInfo">
      <h2
        class="pl-1 font-weight-regular letter-spacing d-flex align-center mb-2"
      >
        <i style="font-size: 1.8rem" class="fas fa-user-circle" />
        <span class="fill-width ml-2">{{ artistInfo.name }}</span>
      </h2>
      <a
        v-for="url in artistInfo.urls"
        :key="url.id"
        style="color: #41b883"
        class="pl-2 d-block decoration-none ma-0 mt-2 subheading font-weight-regular letter-spacing hover-underline text-truncate"
        :href="url.url"
        target="_blank"
      >
        <i class="fas fa-link" />
        {{ url.url }}
      </a>
    </template>
    <template v-if="!loading && !hasArtistInfo">
      <span class="grey--text subheading">Not found</span>
    </template>
  </div>
</template>

<script>
import Spinner from '../common/Spinner';
import request from '@/lib/request';

export default {
  props: {
    artistName: {
      type: String,
      required: true
    }
  },
  components: {
    Spinner
  },
  data() {
    return {
      loading: false,
      artistInfo: {}
    };
  },
  computed: {
    hasArtistInfo() {
      return !!Object.keys(this.artistInfo).length;
    }
  },
  async created() {
    if (this.artistName) {
      this.loading = true;

      const response = await request(
        `/artist/?name=${encodeURIComponent(this.artistName)}`
      );
      this.artistInfo = response;

      this.loading = false;
    }

    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
};
</script>
