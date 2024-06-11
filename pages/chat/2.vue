<template>
    <div>
      <h1>自作のチャットテスト</h1>
    </div>
  </template>
  
  <script>
  export default {
    head() {
      return {
        script: [
          {
            src: 'https://hasebetest.g.kuroco-img.app/files/user/chat/embed.js',
            async: true,
            defer: true,
          },
        ],
      };
    },
  };
  </script>
  