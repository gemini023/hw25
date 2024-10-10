<script setup>
import cars from '../data.json'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
import { ref, computed, onMounted} from 'vue'

const make = ref('All')

onMounted(()=>{
  make.value = route.query.make || 'All'  
})

function handleChange(){
  router.push({query: {make: make.value}})
}

const filteredCars = computed(() => {
  return cars.filter(car => car.make === make.value || make.value === 'All')
})
</script>

<template>
  <div class="container">
    <h1>Our Cars</h1>
     <label for="">Make:</label>
      <select @change="handleChange" v-model="make">
        <option value="All">All</option>
        <option value="Chevrolet">Chevy</option>
        <option value="Porsche">Porsche</option>
        <option value="Audi">Audi</option>
      </select>

    <div class="cards">
      <div class="card" v-for="car in filteredCars" :key="car.id" @click="router.push(`/cars/${car.id}`)">
        <h1>{{ car.make }}</h1>
        <p>${{ car.price }}</p>
      </div>
    </div>


    <RouterView/>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  margin-top: 50px;
  justify-content: center;
}

.card {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.207);
  padding: 15px;
  width: 150px;
  margin-right: 15px;
  cursor: pointer;
  margin-bottom: 20px;
}

.links {
  padding: 20px;
}

.links a {
  margin: 0 5px;
}
</style>
