<template>
  <div>
    <div  class="text-center mt-4 shadow-lg font-bold text-2xl rounded bg-gray-300 mx-auto max-w-md p-3">
        <h3 class="text-center"> {{ counter }}</h3>
        <button @click="subFromCounter(value)" class="bg-red-400 px-4 rounded-3xl shadow-md">-</button>
        <input class="rounded text-center bg-gray-200 mx-7" v-model="value" type="number" name="" id="">
        <button @click="addToCounter(value)" class="bg-green-400 but px-4 rounded-3xl cursor-pointer shadow-md">+</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex' 
export default {
    data() {
        return {
            value: ''
        }
    },
    computed: {
        ...mapState(["counter"])
    },
    methods: {
        ...mapMutations(["addToCounter"]),
        ...mapMutations(["subFromCounter"]),
    }
}
</script>