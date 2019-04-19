<template>
  <Hero
    src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.0-9/52598936_2630826093624064_7193281505890664448_n.jpg?_nc_cat=100&_nc_eui2=AeHbUIv5X4Dfs61NTp2rpz5M6LEuOEcKSO-qe-uJgqXbgrvKy0XUp0mjecJOqsZkqQ9OGAXMsleCN3Nd4chK3tKP1gWZ0ABYC6U5609Bnj--Aw&_nc_oc=AQm9LBrEX7LYZfoDzc1MsAwR7pAq48IzE3cedRZuGySSxXiz0Ik3ZRr882cJddXMVpY&_nc_ht=scontent.fsgn2-2.fna&oh=2c7cce153ae47ec7d354b49d6eb1738c&oe=5D72A470"
    max-height="35rem"
  >
    <v-container>
      <Title title="vullpaper" light />

      <span class="title white--text letter-spacing font-weight-regular">
        Nơi tổng hợp ảnh Anime & Manga mới nhất
      </span>
      <div class="mt-2">
        <v-btn
          class="bg-primary white--text letter-spacing"
          flat
          style="margin-left: auto"
        >
          Xem ngay
        </v-btn>
        <v-btn
          tag="a"
          outline
          color="white"
          class="ml-1 letter-spacing"
          href="http://google.com"
          target="_blank"
        >
          Source code
          <i class="ml-2 fab fa-github" />
        </v-btn>
      </div>
    </v-container>
  </Hero>
</template>

<script>
import Hero from '../common/Hero';
import Title from '../common/Title';

export default {
  components: {
    Hero,
    Title
  }
};
</script>
