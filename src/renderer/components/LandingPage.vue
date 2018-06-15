<template>
  <v-layout justify-center align-center>
    <div>
      <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <v-btn color="info" @click="setFullScreen">Full Screen using Electron :)</v-btn>
    </div>
  </v-layout>
</template>

<script>
  const {remote} = require("electron")
  export default {
    name: 'landing-page',
    data: () => ({
      source:"",
    }),
   methods: {
      setFullScreen() {
        if(remote.getCurrentWindow().isFullScreen()){
          remote.getCurrentWindow().setFullScreen(false);
        }else{
          remote.getCurrentWindow().setFullScreen(true);
        }
      }
    }
  }
</script>

<style >

</style>
