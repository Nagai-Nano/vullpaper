<template>
  <header>
    <v-toolbar app>
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
        <v-btn to="/" flat>Home</v-btn>
        <v-btn to="/login" flat>Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </header>
</template>

<script></script>
