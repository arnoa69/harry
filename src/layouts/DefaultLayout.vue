<template>
  <Heads />
  <main class="main flex-shrink-0 mb-4">
    <router-view />
  </main>
  <Footer />
</template>

<script setup>
import Heads from "@/components/Heads.vue";
import Footer from "@/components/Footer.vue";
</script>
