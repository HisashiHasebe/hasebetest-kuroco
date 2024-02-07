<template>
	<div>
		<pdf
			src="https://hasebetest.g.kuroco-img.app/files/user/test_file.pdf"
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
}

</script>