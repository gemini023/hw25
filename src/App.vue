<template>
    <Button :name="nameVaribale" />
    <div class="links">
        <RouterLink to="/" active-class="active">Home</RouterLink> | 
        <RouterLink to="/about" active-class="active">About</RouterLink>
    </div>
  <RouterView />
</template>

<script setup>
import { ref } from 'vue';
import Button from './components/Button.vue';
const nameVaribale = ref('dsfdsf')
</script>

<style scoped>
.active {
  color: brown
}

.links a{
  font-size: 19px;
}
</style>