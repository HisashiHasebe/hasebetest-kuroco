<template>
  <form @submit.prevent="login">
    <p v-if="loginStatus !== null" :style="{ color: resultMessageColor }">
      {{ resultMessage }}
    </p>

    <input v-model="email" name="email" type="email" placeholder="email" />
    <input
      v-model="password"
      name="password"
      type="password"
      placeholder="password"
    />
    <button type="submit">ログイン</button>
    <button type="button" @click="logout">
      ログアウト
    </button>
    <div>
      <nuxt-link to="/news/list/"> ニュース一覧ページへ </nuxt-link>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',

      loginStatus: null,
      resultMessage: null,
    };
  },
  computed: {
    resultMessageColor() {
      switch (this.loginStatus) {
        case 'success':
          return 'green';
        case 'failure':
          return 'red';
        default:
          return '';
      }
    },
  },
  methods: {
    async login() {
      try {
        const payload = {
          email: this.email,
          password: this.password,
        };
        await this.$store.dispatch('login', payload);

        this.loginStatus = 'success';
        this.resultMessage = 'ログインに成功しました。';
      } catch (e) {
        this.loginStatus = 'failure';
        this.resultMessage = 'ログインに失敗しました。';
      }
    },
    async logout({ commit }) {
    try {
      await this.$axios.$post('/rcms-api/18/logout')
    } catch {
      /** No Process */
      /** エラーが返却されてきた場合は、結果的にログアウトできているものとみなし、これを無視します。 */
    }
    commit('setProfile', { profile: null })
    commit('updateLocalStorage', { authenticated: false })

    this.$router.push('/login')
    },
  },
};
</script>
