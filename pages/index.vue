<template>
  <div>
    <h1>実装済み機能一覧</h1>
    <ul>
      <li><nuxt-link to="/easy_login/">SNSによるログイン(OAuth)</nuxt-link></li>
      <li><nuxt-link to="/form/">フォーム(ファイルアップロード込み・ドキュメント通り)</nuxt-link></li>
      <li><nuxt-link to="/form_with_confirmation_page/">フォーム(確認画面付き)</nuxt-link></li>
      <li><nuxt-link to="/login/">ログイン(Cookie)</nuxt-link></li>
      <li><nuxt-link to="/login/2step_login/">2ステップログイン(email)</nuxt-link></li>
      <li><nuxt-link to="/login/signup_cookie/">会員登録(Cookie)</nuxt-link></li>
      <li><nuxt-link to="/login/signup_token/">会員登録(動的アクセストークン)</nuxt-link></li>
      <li><nuxt-link to="/login/signup_with_set_default/">メルマガ拒否フラグ=falseで会員登録</nuxt-link></li>
      <li><nuxt-link to="/login/signup_pre_regist/">仮会員登録</nuxt-link></li>
      <li><nuxt-link to="/login/signup_pre_regist/done/">仮会員登録完了画面(32桁のキーがないと404)</nuxt-link></li>
      <li><nuxt-link to="/news_default/">記事一覧</nuxt-link></li>
      <li><nuxt-link to="/news/list/">記事一覧(要ログイン)</nuxt-link></li>
      <li><nuxt-link to="/news/list/1">記事一覧(要ログイン・ページネーション)</nuxt-link></li>
      <li><nuxt-link to="/news/list-no-login/1">記事一覧(ページネーション)</nuxt-link></li>
      <li><nuxt-link to="/news/test_with_comment/">記事詳細(コメント機能付き)</nuxt-link></li>
      <li><nuxt-link to="/news_preview/">プレビュー用ページ</nuxt-link></li>
      <li><nuxt-link to="/search_keyword/">キーワード検索</nuxt-link></li>
      <li><nuxt-link to="/subscribe/">配信購読・解除(非推奨になったエンドポイント)</nuxt-link></li>
      <li><nuxt-link to="/subscribe_with_key/">配信購読</nuxt-link></li>
      <li><nuxt-link to="/subscribe_with_key/unsubscribe/">配信解除(クエリでキーがないと404)</nuxt-link></li>
      <li><nuxt-link to="/subscribe_with_login/">配信購読・解除(要ログイン)</nuxt-link></li>
      <li><nuxt-link to="/test/iframely_kakunin/">iframe自動変換の確認ページ</nuxt-link></li>
      <li><nuxt-link to="/text-to-speech/">google text to speechのお試し(base64エンコードされたmp3ファイルのデータをデコードして表示するところまで実装済み)</nuxt-link></li>
      <li><nuxt-link to="/form_recaptcha/">reCAPTCHA対応フォーム</nuxt-link></li>
      <li><nuxt-link to="/recaptha_for_password_reminders/">reCAPTCHA対応パスワードリマインダー</nuxt-link></li>
      <li><nuxt-link to="/auto_contents_for_edge/">OpenAIがユーザー毎に最適なコンテンツを表示する(try中)</nuxt-link></li>
      <li><nuxt-link to="/assets/">assets画像の表示</nuxt-link></li>
      <li><nuxt-link to="/markdown_content/">markdown_content入力コンテンツの表示</nuxt-link></li>
      <li><nuxt-link to="/form_batch_sending/">複数回答の同時送信フォーム</nuxt-link></li>
    </ul>
    <div>test</div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
