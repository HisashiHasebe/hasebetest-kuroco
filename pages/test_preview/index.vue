<template>
  <div>
    <h1 class="title">{{ response.details.subject }}</h1>
    <div class="post" v-html="response.details.contents"></div>
    <div>
      <p>そのまま出力</p>
      <img :src="`${response.details.ext_col_17.url}`" alt="">
    </div>
    <div>
      <p>画像の動的変換でトリミング 1:1</p>
      <img :src="`${response.details.ext_col_17.url}?crop=1:1`" alt="">
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, route }) {
    return {
      response: await $axios.$get(`/rcms-api/13/news/preview`, {
        params: {
          preview_token: route.query.preview_token,
        },
      }),
    };
  },
};
</script>