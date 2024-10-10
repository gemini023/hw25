<template>
    <div>
        <h1>CAR</h1>
        <h2>{{ car.make }}</h2>
        <p>{{ car.price }}</p>

        <button @click="router.next(-1)">Back</button>
    </div>
</template>

<script setup>
import { useRouter} from 'vue-router'
import { computed } from "vue"
import { reactive } from "vue"   
import data from "../data.json"
const router = useRouter()
const props = defineProps(['id'])
const cars = reactive(data)
const car = computed(()=>{
    return cars.find(car => car.id == props.id)
})
</script>

<style lang="scss" scoped>

</style>