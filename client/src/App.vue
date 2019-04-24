<template>
  <v-app>
    <Header />
    <v-content>
      <router-view :key="$route.fullPath" />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

export default {
  components: {
    Header,
    Footer
  }
};
</script>
