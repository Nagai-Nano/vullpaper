<template>
  <header>
    <v-toolbar app flat>
      <v-toolbar-title class="letter-spacing headline">
        <router-link
          to="/"
          class="decoration-none d-flex justify-center align-center black--text"
        >
          <img :src="require('@/assets/logo.png')" width="45" />
          <span style="margin-left: -4px">ullpaper</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer />
      <v-text-field
        append-icon="search"
        solo
        flat
        clearable
        color="#41b883"
        placeholder="Search tags..."
      />
      <v-spacer />

      <v-toolbar-items>
        <v-btn class="p-relative" to="/" flat active-class="router-active">
          Home
        </v-btn>
        <v-btn
          class="p-relative"
          to="/images/?q=newest"
          flat
          active-class="router-active"
        >
          Images
        </v-btn>
        <v-btn class="p-relative" to="/tags" flat active-class="router-active">
          Tags
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </header>
</template>

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
