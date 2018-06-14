<template>
  <v-layout row wrap>
    <v-flex d-flex xs12>
      <v-card>
        <v-card-media
          class="white--text"
          height="50%"
          src="https://vuetifyjs.com/static/doc-images/cards/docks.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{post.title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <p>{{post.body}}</p>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "SinglePost",
  data: () => ({
    post:{},
  }),
  created() {
    this.$http.get(`https://jsonplaceholder.typicode.com/posts/`+this.$route.params.id)
    .then(response => {
      this.post = response.data
    })
    .catch(e => {
       this.$toasted.error(e,{duration : 1000,fullWidth:true})
    })
  }
}
</script>
