<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-progress-circular
           :size="7"
           :width="7"
           indeterminate
           color="primary"
        >
      </v-progress-circular>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>