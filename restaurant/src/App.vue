<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Restaurant Yummy</span>
    </div>
  </nav>

  <div class="container mt-4">
    <Message/>
    <Contact/>
  </div>

</template>

<script setup>
import Contact from './components/Contact.vue'
import Message from './components/Message.vue';
</script>
