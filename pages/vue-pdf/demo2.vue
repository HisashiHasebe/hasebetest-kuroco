<template>
	<div>
		<pdf
			:src=response.details.ext_col_20.url
			@num-pages="pageCount = $event"
			@page-loaded="currentPage = $event"
		></pdf>
	</div>
</template>

<script>

import pdf from 'vue-pdf'

export default {
	components: {
		pdf
	},
    async asyncData({ $axios }) {
    return {
      response: await $axios.$get('/rcms-api/1/test/2797'),
    };
  },
}

</script>