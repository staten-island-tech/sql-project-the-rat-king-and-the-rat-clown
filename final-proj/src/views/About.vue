<template>
  <div v-if="userSession.session">
   You are logged in!!!!
  </div>
</template>

<script setup>
import { userSessionStore } from '../stores/userSession'
const userSession = userSessionStore()
</script>

<style lang="scss" scoped>

</style>
