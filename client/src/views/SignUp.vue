<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-form 
          v-model="valid"
          @submit.prevent="signUp"
          @keydown.prevent.enter 
          >
          <v-text-field
            v-model="user.email"
            :rules="notEmptyRules"
            label="E-mail"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="user.password"
            :rules="notEmptyRules"
            label="Password"
            type="password"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="user.confirmPassword"
            :rules="confirmPasswordRules"
            label="Confirm Password"
            type="password"
            required
          ></v-text-field>
          <v-btn type="submit" :disabled="!valid">SignUp</v-btn>
        </v-form>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    name:'signup',
    data: (vm) => ({
      valid: false,
      user:{
        email: '',
        password: '',
        confirmPassword: '',
      },
      notEmptyRules: [
        (value) => !!value || 'Cannot be empty.'
      ],
      confirmPasswordRules: [
        (confirmPassword) => confirmPassword === vm.user.password || 'Password must match.'
      ]
    }),
    methods:{
      signUp(){
        if(this.valid){
          console.log('this form is valid!!');
        }
      }
    }
  }
</script>
