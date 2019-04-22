<template>
  <v-app>
    <Header />
    <v-content>
      <router-view :key="$route.path" />
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/layout/Header';

export default {
  components: {
    Header
  }
};
</script>
