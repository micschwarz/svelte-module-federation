<template>
  <div ref="contactRoot"></div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

const contactRoot = ref(null);

onMounted(() => {
  window.contact
      .get('./ContactForm')
      .then(module => module().default)
      .then(Component => {
        new Component({
          target: contactRoot.value
        });
      });
})
</script>


