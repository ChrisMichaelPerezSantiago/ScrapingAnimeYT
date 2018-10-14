<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <form @submit.prevent="searchAnime()">
          <input v-model="search" type="text" placeholder="search ..."/>
          <button type="submit">search</button>
        </form>      
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  import db from '../db/db';

  export default {
    data(){
      return{
        search: '',
        anime: []
      }
    },

    methods:{
      searchAnime(){
        db.collection('animes').where('title' , '==' , this.search).get()
        .then(data =>{
          data.forEach((doc) =>{
            console.log(doc.id , " => " , doc.data());
          })
        })
      }
    }
  }
</script>