<template>
  <v-layout column class="p-relative">
    <v-flex xs12>
      <v-text-field
        append-icon="search"
        :loading="loading"
        solo
        flat
        color="#41b883"
        placeholder="Search tags..."
        v-model="input"
        @keyup.esc="clearInput"
      />
    </v-flex>
    <v-flex
      v-if="tags.length"
      xs12
      class="p-absolute l-0 fill-width px-2 py-2 search-results"
      style="top: 56px;"
    >
      <v-btn
        v-for="tag in tags"
        :key="tag.id"
        :small="bp.smAndDown"
        flat
        block
        :to="`/images/?q=${encodeURIComponent(tag.name)}`"
        active-class=""
        class="ma-0 pa-0 "
      >
        <p class="ma-0 fill-width text-xs-left pl-2 text-truncate">
          {{ tag.name }}
        </p>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { debounced } from '@/lib/functions';
import request from '@/lib/request';
import breakpointMixin from '@/lib/breakpointMixin';

export default {
  mixins: [breakpointMixin],
  data() {
    return {
      input: '',
      tags: [],
      loading: false
    };
  },
  methods: {
    clearInput() {
      this.input = [];
      this.loading = false;
    },
    clearTags(e) {
      if (
        e.target.tagName === 'INPUT' ||
        e.target.classList.contains('v-input__slot') ||
        e.target.classList.contains('v-icon') ||
        e.target.classList.contains('search-results')
      )
        return;

      this.tags = [];
    },
    handleSearch: debounced(async self => {
      const { tags } = await request(
        `/tags/search?q=${encodeURIComponent(self.input.trim())}`
      );

      self.tags = tags;
      self.loading = false;
    }, 500)
  },
  watch: {
    input(newVal) {
      if (!newVal.length || !newVal.trim()) {
        this.tags = [];

        return;
      }

      this.loading = true;
      this.handleSearch();
    }
  },
  created() {
    window.addEventListener('click', this.clearTags);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.clearTags);
    this.clearInput();
  }
};
</script>

<style scoped>
.search-results {
  border: 1px solid #bdbdbd;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  background: #fff;
}
</style>
