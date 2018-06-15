import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import LoginView from '@/components/Login.vue'
import Posts from '@/components/Posts/Posts.vue'
import SinglePosts from '@/components/Posts/SinglePost.vue'
import Video from '@/components/Video/Videos.vue'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/LandingPage').default
    },
    {
      path: 'video',
      name: 'video',
      component: Video,
    },
    {
      path: 'posts',
      name: 'posts',
      component: Posts,
    },
    {
      path: 'post/:id',
      name: 'singlePosts',
      component: SinglePosts,
    },
    {
      path: 'login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
