<template>
    <div>
      <h1 class="title">{{ response.details.subject }}</h1>
      <div class="post" v-html="response.details.contents"></div>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ $axios, params }) {
      return {
        response: await $axios.$get(`/rcms-api/1/newsdetail/${params.slug}`),
      };
    },
    mounted() {
    if (process.browser) {
      const slug = this.$route.params.slug // ページのURLなどからslugを取得(実際の構成に合わせて変更して下さい)
      this.$gtag('event', 'page_view', {
        'slug': slug
      })
    }
  }
  };
  </script>