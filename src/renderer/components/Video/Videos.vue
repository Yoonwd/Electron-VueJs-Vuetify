<template>
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"

                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)"
                 @ended="onPlayerEnded($event)"
                 @waiting="onPlayerWaiting($event)"
                 @playing="onPlayerPlaying($event)"
                 @loadeddata="onPlayerLoadeddata($event)"
                 @timeupdate="onPlayerTimeupdate($event)"
                 @canplay="onPlayerCanplay($event)"
                 @canplaythrough="onPlayerCanplaythrough($event)"
                 @statechanged="playerStateChanged($event)"
                 @ready="playerReadied">
  </video-player>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  // Similarly, you can also introduce the plugin resource pack you want to use within the component
  // import 'some-videojs-plugin'
  export default {
    data() {
      return {
        playerOptions: {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "http://www.rolandalla.com/wp-content/themes/rolandalla/inc/assets/images/rol_back.jpg",
        }
      }
    },
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        //console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      },
      onPlayerCanplaythrough(player){
          //console.log('the onPlayerCanplaythrough', player)
      },
      onPlayerCanplay(player){
          //console.log('the onPlayerCanplay', player)
      },
      onPlayerLoadeddata(data){
         //console.log('the onPlayerLoadeddata', data)
      },
      onPlayerPlaying(data){
          //console.log('the onPlayerPlaying', data)
      },
      onPlayerEnded(data){
          //console.log('the onPlayerEnded', data)
      },
      onPlayerTimeupdate(){
          //console.log('the onPlayerTimeupdate', data)
      }
    }
  }
</script>
