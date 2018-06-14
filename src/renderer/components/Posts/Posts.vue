<template>
  <v-layout row wrap>
    <v-flex d-flex xs12 sm6 md6 lg4  v-for="post in posts" :key="post.id">
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
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
            <span class="grey--text">UserId: {{post.userId}}</span><br>
            <span>{{post.body}}</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" :to="{ name: 'singlePosts', params: { id: post.id }}">Explore Post</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "Posts",
  data: () => ({
    posts:{},
  }),
  created: function () {
    this.$http.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      this.posts = response.data
      //this.$toasted.success('Loaded',{icon:'check_circle_outline',duration : 1000,fullWidth:false})
    })
    .catch(e => {
       this.$toasted.error(e,{duration : 1000,fullWidth:true})
    })
  }

}
</script>
