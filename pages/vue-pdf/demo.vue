<template>
	<div>
		{{currentPage}} / {{pageCount}}
		<pdf
			src="https://hasebetest.g.kuroco-front.app/pdfjs-4.0.379-dist/web/compressed.tracemonkey-pldi-09.pdf"
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
	data() {
		return {
			currentPage: 0,
			pageCount: 0,
		}
	}
}

</script>