<template>
  <header>
    <v-toolbar
      app
      clipped-left
      scroll-off-screen
      :scroll-threshold="50"
      :extended="bp.smAndDown && toggleSearch"
    >
      <v-toolbar-side-icon
        v-if="bp.smAndDown"
        class="ma-0"
        style="margin-left: -8px !important"
        @click="toggleDrawer = !toggleDrawer"
      />
      <v-toolbar-title class="letter-spacing headline ma-0">
        <router-link
          to="/"
          class="decoration-none d-flex justify-center align-center black--text"
        >
          <img
            :src="require('@/assets/logo.png')"
            :width="bp.smAndDown ? 35 : 45"
          />
          <span style="margin-left: -4px">ullpaper</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer />
      <SearchBar v-if="bp.mdAndUp" />
      <v-spacer />

      <v-toolbar-items v-if="bp.mdAndUp">
        <v-btn
          v-for="nav in navItems"
          :key="nav.title"
          class="p-relative"
          :to="nav.to"
          flat
          active-class="router-active"
        >
          {{ nav.title }}
        </v-btn>
      </v-toolbar-items>

      <template v-if="bp.smAndDown && toggleSearch" v-slot:extension>
        <SearchBar class="mb-2" />
      </template>

      <i
        v-if="bp.smAndDown"
        @click="toggleSearch = !toggleSearch"
        class="grey--text text--darken-3 mt-1"
        :class="`fas fa-${toggleSearch ? 'times-circle' : 'search'}`"
        style="font-size: 1.2rem"
      />
    </v-toolbar>

    <Drawer v-if="bp.smAndDown" :drawer="toggleDrawer" :nav-items="navItems" />
  </header>
</template>

<script>
import Drawer from './Drawer';
import SearchBar from './SearchBar';
import breakpointMixin from '@/lib/breakpointMixin';

export default {
  mixins: [breakpointMixin],
  data() {
    return {
      toggleDrawer: false,
      toggleSearch: false,
      navItems: [
        { to: '/', title: 'Home', icon: 'home' },
        { to: '/images?q=newest', title: 'Images', icon: 'images' },
        { to: '/tags', title: 'Tags', icon: 'tags' }
      ]
    };
  },
  components: {
    Drawer,
    SearchBar
  }
};
</script>

<style scoped>
.router-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  background: #41b883;
}
</style>
