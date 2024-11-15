<script setup>
defineProps({
  backgroundImage: { 
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  breadcrumb: {
    type: String,
    required: true
  }
})
</script>

<template>
  <!-- Page Title -->
  <div :class="['page-title', 'dark-background']" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="container position-relative">
      <h1>{{ title }}</h1>
      <nav class="breadcrumbs">
        <ol>
          <li><a href="/">Startseite</a></li>
          <li class="current">{{ breadcrumb }}</li>
        </ol>
      </nav>
    </div>
  </div><!-- End Page Title -->
</template>