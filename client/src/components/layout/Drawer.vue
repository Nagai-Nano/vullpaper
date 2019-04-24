<template>
  <v-navigation-drawer app clipped width="250" :value="drawer" floating>
    <v-container>
      <v-list subheader>
        <v-list-tile
          v-for="nav in navItems"
          :key="nav.title"
          :to="nav.to"
          class="p-relative"
          active-class="drawer-nav-active"
        >
          <v-list-tile-action>
            <i style="font-size: 1.5rem" :class="`fas fa-${nav.icon} pl-2`" />
          </v-list-tile-action>
          <v-list-tile-title class="text-uppercase">
            {{ nav.title }}
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: true
    },
    navItems: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
.drawer-nav-active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 8px;
  height: 100%;
  background: #41b883;
}
</style>
