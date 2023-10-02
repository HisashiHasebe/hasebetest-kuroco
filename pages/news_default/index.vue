<template>
    <div>
      <p>ニュース一覧ページ</p>
      <div v-for="n in response.list" :key="n.slug">
        <nuxt-link :to="`/news_default/${n.topics_id}`">
          {{ n.ymd }} {{ n.subject }}
        </nuxt-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ $axios }) {
      return {
        response: await $axios.$get('/rcms-api/1/news'),
      };
    },
  };
  </script>