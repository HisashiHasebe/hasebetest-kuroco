<template>
    <div>
        <div v-if="signupDone">
            登録が完了しました。
        </div>
        <form @submit.prevent="registUser">
            <div>
                <label>name1</label>
                <input name="name1" type="text" :value=invitationRes.data.data.ext_info.name1 disabled>
            </div>
            <div>
                <label>name2</label>
                <input name="name2" type="text" :value=invitationRes.data.data.ext_info.name2 disabled>
            </div>
            <div>
                <label>email</label>
                <input name="email" type="email" :value=invitationRes.data.data.email disabled>
            </div>
            <div>
                <label>login_pwd</label>
                <input v-model="login_pwd" name="login_pwd" type="password" placeholder="login_pwd">
            </div>
            <div>
                <button type="submit">
                    サインアップ
                </button>
            </div>
        </form>
        <div v-if="error" :style="{ color: 'red' }">
            <p v-for="(error, idx) in error" :key="idx">
                {{ error.message }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    validate({ params }) {
        return /[!-~]{32}/.test(params.key)
    },
    data() {
        return {
            signupDone: false,
            login_pwd: "",
            error: null
        }
    },
    async asyncData({ $axios, params }) {
        const invitationRes = await $axios.post('/rcms-api/33/member_invite',
            {
                email_hash: params.key
            });
        return { invitationRes };
    },
    methods: {
        async registUser() {
            try {
                const payload = {
                    login_pwd: this.login_pwd,
                    email: this.invitationRes.data.data.email,
                    ...this.invitationRes.data.data.ext_info
                }
                // request registration to an API endpoint using custom function
                await this.$axios.post('/rcms-api/33/member_regist', payload);
                this.signupDone = true;
            } catch (error) {
                this.error = error.response.data.errors;
            }
        }
    },
}
</script>
