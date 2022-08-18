<template>
  <div v-if="response">
    <h1 class="title">{{ response.details.subject }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="post" v-html="response.details.ext_col_04"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    return {
      response: await $axios.$get(
        `/rcms-api/13/test2/1064`
      ),
    }
  },
  data() {
    return {
      response: null,
    }
  },
  head() {
    return {
      script: [
        {
          async: true,
          charset: 'utf-8',
          src: 'https://iframely.kuroco-front.app/embed.js?cancel=0',
        },
      ],
    }
  },
}
</script>

<style>
.post figure.media {
  display: block;
}
</style>
