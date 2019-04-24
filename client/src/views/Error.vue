<template>
  <v-container mt-5>
    <v-layout column class="text-xs-center">
      <v-flex xs12 mb-2>
        <Imagex :src="image" contain height="128" />
      </v-flex>
      <v-flex xs12>
        <h1 class="ma-0 font-weight-regular text-uppercase">
          {{
            code === 403
              ? 'Vô đây làm gì?'
              : code === 404
              ? 'Không tìm thấy trang bạn tìm kiếm'
              : 'Đã có lỗi xảy ra, vui lòng thử lại sau'
          }}
        </h1>
        <p class="mt-1 headline">
          {{ code === 403 ? 'Cút về' : 'Trở về' }}
          <router-link to="/" style="color: #41b883" class="decoration-none">
            trang chủ
          </router-link>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Imagex from '@/components/common/Imagex';

export default {
  props: {
    code: {
      type: Number,
      default: 403
    }
  },
  computed: {
    image() {
      if (this.code === 404 || this.code === 403)
        return 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.1997-6/s168x128/14279490_1804313623147203_1346244953_n.png?_nc_cat=1&_nc_ht=scontent.fsgn2-2.fna&oh=1c1f29a75852d4ac05bbbc4446432228&oe=5D35FCCA';
      return 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.1997-6/s168x128/851578_387545534704664_1337680792_n.png?_nc_cat=1&_nc_ht=scontent.fsgn2-3.fna&oh=965ff65dd97622b0a9e438bbd5c67702&oe=5D7681A1';
    }
  },
  components: {
    Imagex
  }
};
</script>
