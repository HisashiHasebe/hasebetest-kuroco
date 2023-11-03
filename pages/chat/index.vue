<template>
    <div>
      <h1>Hubspotのチャットテスト</h1>
    </div>
  </template>
  
  <script>
  export default {
    head() {
      return {
        script: [
          {
            src: '//js-na1.hs-scripts.com/39976355.js',
            async: true,
            defer: true,
          },
        ],
      };
    },
  };
  </script>
  