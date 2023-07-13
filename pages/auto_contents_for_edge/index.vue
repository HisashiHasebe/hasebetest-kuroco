<template>
  <div>
    <form>
      <h1>Auto contents for KurocoEdge</h1>
      <p v-if="resultMessage !== null">
        {{ resultMessage }}
      </p>
      <form @submit.prevent="login">
        <input v-model="email" name="email" type="email" placeholder="email" />
        <input v-model="password" name="password" type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
      <div id="auto-contents">
        <section>
            <h2>最新ニュース</h2>
            <p>ここに最新のニュースを表示します。</p>
        </section>
        <section>
            <h2>エンターテイメント情報</h2>
            <p>ここにエンターテイメント情報を表示します。</p>
        </section>
        <section>
            <h2>健康とウェルネス</h2>
            <p>ここに健康とウェルネスに関する情報を表示します。</p>
        </section>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      resultMessage: null,
    }
  },
  methods: {
    //Login
    async login() {
      try {
        const payload = {
          email: this.email,
          password: this.password,
        };
        await this.$axios.$post('/rcms-api/1/login', payload);
        this.resultMessage = 'Successful login';
      } catch (error) {
        this.resultMessage = error.response.data.errors[0].message
      }
    },
  }
}
</script>