<script setup>

import Navbar from "./components/Navbar.vue"
import AboutUs from "./components/AboutUs.vue"
import ContactUs from "./components/ContactUs.vue"
</script>


<template>
  <v-app>
    <Navbar/>
    
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

