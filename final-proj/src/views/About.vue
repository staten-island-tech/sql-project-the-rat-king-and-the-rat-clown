<template>
  <div v-if="userSession.session">
    
  </div>
  <div v-else>
    Please log in to continue. 
  </div>
</template>

<script setup>
import { userSessionStore } from '../stores/userSession'
const userSession = userSessionStore()
</script>

<style lang="scss" scoped>

</style>
