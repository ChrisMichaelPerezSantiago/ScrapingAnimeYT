<template>
  <v-app>
    <v-toolbar dark>
    <v-toolbar-title>Anime</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down" v-if="!user">
      <v-btn flat :to="{name: 'signup'}">SignUp</v-btn>
      <v-btn flat :to="{name: 'login'}">LogIn</v-btn>
    </v-toolbar-items>
     <v-toolbar-items  class="hidden-sm-and-down" v-if="user">
      <v-btn primary flat @click="logout">Logout</v-btn>
    </v-toolbar-items>
       <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-btn flat :to="{name: 'signup'}"></v-btn>
          <v-btn flat :to="{name: 'login'}">LogIn</v-btn>
          <v-list v-if="user">
            <v-btn primary flat @click="logout">Logout</v-btn>
          </v-list>
        </v-list>
      </v-menu>
  </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span> &copy; 2018 - Made with ❤ by Chris M. Perez </span>
    </v-footer>
  </v-app>
</template>

<script>  
  import { mapState , mapActions } from 'vuex';

  export default {
    name: 'App',
    data () {
      return {
        fixed: false
      }
    },

    computed:{
      ...mapState('auth' , {user: 'payload'}),
    },

    methods:{
      ...mapActions('auth' , { authLogout: 'logout' }),
      logout(){
        this.authLogout().then(() =>{
          this.$router.push('/login');
        })
      }
    }
  }
</script>

<!--
<style>
  #app{
      background: #18212D;
  }
</style>
-->