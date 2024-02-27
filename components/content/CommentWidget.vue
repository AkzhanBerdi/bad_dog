<!-- CommentWidget.vue -->

<template>
    <div>
      <!-- Your comment widget will be injected here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'CommentWidget',
    mounted() {
      // Insert the script to load the comment widget
      const script = document.createElement('script');
      script.src = 'https://utteranc.es/client.js';
      script.setAttribute('repo', 'AkzhanBerdi/bad_dog');
      script.setAttribute('issue-term', 'pathname');
      script.setAttribute('theme', 'boxy-light');
      script.setAttribute('crossorigin', 'anonymous');
      script.setAttribute('async', '');
  
      document.body.appendChild(script);
    },

    unmounted(){
      if(process.client){
      const commsBlock =  document.querySelector('.utterances')
      commsBlock?.setAttribute('style', 'display:none')
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  