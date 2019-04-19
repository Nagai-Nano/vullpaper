<template>
  <v-img v-bind="$attrs" :lazy-src="require('@/assets/loading.png')">
    <template v-slot:placeholder>
      <v-layout fill-height align-center justify-center ma-0 pa-0>
        <v-progress-circular indeterminate color="primary" />
      </v-layout>
    </template>

    <slot />
  </v-img>
</template>

<script></script>
