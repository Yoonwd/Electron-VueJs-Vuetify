<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template v-for="(item, index) in menuItems">
             <v-list-tile :href="item.href" :to="{name: item.href}">
                 <v-list-tile-action>
                     <v-icon light v-html="item.icon"></v-icon>
                 </v-list-tile-action>
                 <v-list-tile-content>
                     <v-list-tile-title v-html="item.title"></v-list-tile-title>
                 </v-list-tile-content>
             </v-list-tile>
         </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
          <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      menuItems: [
              {
                href: 'home',
                router: true,
                title: 'Home',
                icon: 'home',
              },
              {
                href: 'video',
                router: true,
                title: 'video',
                icon: 'ondemand_video',
              },
              {
                href: 'posts',
                router: true,
                title: 'Posts',
                icon: 'rss_feed',
              },
              {
                href: 'login',
                router: true,
                title: 'Login',
                icon: 'fingerprint',
              }]
    })
  }
</script>
