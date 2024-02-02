<template>
  <div>
    <div v-html="processedHTML"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const list = await $axios.$get('/rcms-api/1/topics/list/69');
    const list_template = await $axios.$get('/rcms-api/1/test/2448');

    // 1. プレースホルダーを別のAPIから取得したHTMLに差し替える
    const content1_html = list.list[0].html_title;
    const content2_html = list.list[1].html_title;
    const content3_html = list.list[2].html_title;

    // 2. HTMLを差し替えたものをセットする
    list_template.details.list_html = list_template.details.list_html
      .replace('<!--content1-->', content1_html)
      .replace('<!--content2-->', content2_html)
      .replace('<!--content3-->', content3_html);

    return {
      list_template,
    };
  },
  computed: {
    processedHTML() {
      return this.list_template.details.list_html;
    },
  },
};
</script>
