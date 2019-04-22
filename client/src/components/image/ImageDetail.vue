<template>
  <div>
    <Imagex
      v-once
      :src="imageUrl"
      height="75vh"
      contain
      class="grey lighten-3"
    />
    <Spinner v-if="loading" />
    <template v-else>
      <h1
        v-if="desc.title"
        class="font-weight-regular mt-3 mb-2"
        style="line-height: 1!important"
      >
        {{ desc.title }}
      </h1>
      <h3
        v-if="desc.description"
        class="font-weight-regular letter-spacing mt-2"
      >
        {{ desc.description }}
      </h3>
    </template>
    <div class="mt-2 d-flex align-content-space-between align-center">
      <span
        class="grey--text text--darken-2 my-2 subheading font-weight-regular"
      >
        Ngày đăng: {{ image.created | formattedDate }}
      </span>
      <div class="text-xs-right">
        <a
          v-for="action in ['heart', 'download', 'link']"
          :key="action"
          :class="{ 'mx-3': action === 'download' }"
          class="grey--text text--darken-2 hover-color"
          :title="action"
          @click.prevent="onClick(action)"
        >
          <i style="font-size: 1.8rem;" :class="`fas fa-${action}`" />
        </a>
      </div>
    </div>

    <v-divider class="mb-3" />

    <div>
      <h1 class="headline letter-spacing text-uppercase">
        Tags
      </h1>
      <v-btn
        v-for="tag in image.tags.split(' ')"
        :key="tag"
        depressed
        class="ml-0 mr-2 mb-1 bg-primary white--text"
        :to="`/images/?q=${encodeURIComponent(tag)}`"
      >
        <i class="fas fa-tag mr-2" />{{ tag }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import Imagex from '../common/Imagex';
import Spinner from '../common/Spinner';
import { download, heart, link } from '@/lib/functions';
import request from '@/lib/request';

export default {
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      desc: {},
      loading: true
    };
  },
  components: {
    Imagex,
    Spinner
  },
  methods: {
    download,
    heart,
    link,
    onClick(action) {
      this[action](this.image);
    }
  },
  computed: {
    imageUrl() {
      const { uri, large } = this.image;
      return `/api/image/download?uri=${large || uri}`;
    }
  },
  filters: {
    formattedDate(value) {
      const date = new Date(Date.parse(value)).toLocaleDateString('en-US', {
        year: 'numeric',
        day: '2-digit',
        month: '2-digit'
      });

      const [month, day, year] = date.split('/');
      return [day, month, year].join('/');
    }
  },
  async created() {
    const response = await request(`/image/${this.image.id}/description`);
    this.desc = response;
    this.loading = false;
  }
};
</script>
