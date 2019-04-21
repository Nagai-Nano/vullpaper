<template>
  <div class="pl-3">
    <h3
      class="mb-2 headline letter-spacing font-weight-bold"
      style="line-height: 1!important"
    >
      Artist
    </h3>
    <h2
      class="pl-1 font-weight-regular letter-spacing d-flex align-center mb-2"
    >
      <i style="font-size: 1.8rem" class="fas fa-user-circle" />
      <span class="fill-width ml-2">Sword art online</span>
    </h2>
    <a
      v-for="link in [
        'http://facebook.com',
        'http://google.com',
        'http://pivix.com'
      ]"
      :key="link"
      style="color: #41b883"
      class="pl-2 d-block decoration-none ma-0 mt-1 subheading font-weight-regular letter-spacing hover-underline text-truncate"
      :href="link"
      target="_blank"
    >
      <i class="fas fa-link" />
      {{ link }}
    </a>
  </div>
</template>
