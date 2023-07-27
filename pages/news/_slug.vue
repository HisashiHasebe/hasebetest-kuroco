<template>
  <div>
    <h1 class="title">{{ response.details.subject }}</h1>
    <div class="post" v-html="response.details.contents"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params, redirect }) {
    const response = await $axios.$get(`/rcms-api/1/newsdetail/${params.slug}`)
    if (response.details.slug !== '' && /^\d+$/.test(params.slug)) {
      redirect(`/news/${response.details.slug}`);
    }
    return { response };
  },
  methods: {
    async sendGA() {
      const slug = this.$route.params.slug
      console.log(slug)
      this.$gtag('event', 'page_view', {
        'dimension1': slug
      })
    }
  },
  mounted() {
    this.sendGA();
  }
}
</script>