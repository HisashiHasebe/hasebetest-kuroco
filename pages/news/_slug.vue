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
  head() {
    if (process.browser) {
      const slug = this.$route.params.slug // ページのURLなどからslugを取得(実際の構成に合わせて変更して下さい)

      // Google Analyticsのトラッキングコードを生成
      return {
        script: [
          {
            src: `https://www.googletagmanager.com/gtag/js?id=G-T39XGR8R0Y`,
            async: true
          },
          {
            innerHTML: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T39XGR8R0Y', {
                'page_path': window.location.pathname,
                'slug': '${slug}'
              });
            `,
            type: 'text/javascript',
            charset: 'utf-8'
          }
        ]
      };
    } else {
      return {}; // サーバーサイドではヘッド部に追加しないため空のオブジェクトを返す
    }
  }
}
</script>