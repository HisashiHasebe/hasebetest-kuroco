<template>
  <div>
    <h1 class="title">{{ response.details.subject }}</h1>
    <div>{{ response.details.ext_col_01 }}</div>
    <div>
    <audio ref="audioRef" controls>
      <source :src="audioSrc" type="audio/mp3">
    </audio>
    <button @click="playAudio">再生</button>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false // 音声が再生中かどうかを示すフラグ
    };
  },
  methods: {
    playAudio() {
      if (!this.isPlaying) {
        this.$refs.audioRef.play();
        this.isPlaying = true;
      } else {
        this.$refs.audioRef.pause();
        this.isPlaying = false;
      }
    }
  },
  async asyncData({ $axios }) {
    const response = await $axios.$get(`/rcms-api/1/test/1248`)
    // base64エンコードされたmp3ファイルのデータをデコードして設定
    const base64EncodedData = response.details.ext_col_02;
    const decodedData = window.atob(base64EncodedData);
    const uint8Array = new Uint8Array(decodedData.length);
    for (let i = 0; i < decodedData.length; i++) {
      uint8Array[i] = decodedData.charCodeAt(i);
    }
    const blob = new Blob([uint8Array], { type: 'audio/mp3' });
    const audioSrc = URL.createObjectURL(blob);
    return { response, audioSrc };
  },
};
</script>