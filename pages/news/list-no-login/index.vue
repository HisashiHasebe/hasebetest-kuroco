<template>
  <div>
    <p>ニュース一覧ページ{{ this.$route.params.page }}</p>
    <div v-for="n in response.list" :key="n.topics_id" class="test">
      <nuxt-link :to="`/news/${n.topics_id}/`">{{ n.ymd }} {{ n.subject }}</nuxt-link>
    </div>

    <ul style="list-style: none; display: flex">
      <li v-if="response.pageInfo.pageNo === 1">前へ</li>
      <li v-else><nuxt-link :to="'/news/list/' + (response.pageInfo.pageNo -1) +'/'">前へ</nuxt-link></li>
      <li v-for="i in response.pageInfo.totalPageCnt" :key="i">        
        <nuxt-link :to="'/news/list/' + i +'/'">{{i}}</nuxt-link>
      </li>
      <li v-if="response.pageInfo.pageNo === response.pageInfo.totalPageCnt">次へ</li>
      <li v-else><nuxt-link :to="'/news/list/' + (response.pageInfo.pageNo +1) +'/'">次へ</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params}) {
    try {
      const response = await $axios.$get(
        '/rcms-api/13/news',
        {
          params: {
            pageID: params.page,
          },
        }
      )
      return { response }
    } catch (e) {
      console.log(e.message)
    }
  },
  mounted : function(){
    console.log('mounted')
    console.log(this.$el)
    console.log(document.querySelector('.test'));
  }
}
</script>