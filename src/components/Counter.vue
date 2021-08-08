<template>
  <div>
    <div  class="text-center mt-4 shadow-lg font-bold text-2xl rounded bg-gray-300 mx-auto max-w-md p-3">
        <h3 class="text-center"> {{ counter }}</h3>
    </div>
    <div  class="text-center mt-4 shadow-lg font-bold text-2xl rounded bg-gray-400 mx-auto max-w-md p-3">
        <button @click="subFromCounter(value)" class="bg-red-400 px-4 hover:bg-red-500 rounded-3xl shadow-md">-</button>
        <input class="rounded text-center  bg-gray-200 mx-7" v-model="value" type="number" name="" id="">
        <button @click="addToCounter(value)" class="bg-green-400 hover:bg-green-500 but px-4 rounded-3xl cursor-pointer shadow-md">+</button>
        <h2></h2>
    </div>
    <div  class="text-center mt-4 shadow-lg font-bold text-2xl rounded bg-gray-200 mx-auto max-w-md p-3">
        <h2 class="mb-2 text-base text-gray-600">Random Number <small class="text-xs text-gray-400">(with counter)</small></h2> 
        <button @click="addRandomNo" class="hover:bg-green-600 grid-cols-3 mr-2 font-extrabold text-white  bg-green-500 text-lg py-2 px-4 hover:border-transparent rounded">+</button>
        <button @click="subRandomNo" class="hover:bg-green-600 grid-cols-3 font-extrabold text-white  bg-green-500 text-lg py-2 px-4 mr-2 hover:border-transparent rounded">-</button>
        <button @click="mulRandomNo" class="hover:bg-green-600 grid-cols-3 font-bold text-white  bg-green-500 text-lg py-2 px-4 mr-2 hover:border-transparent rounded">x</button>
        <button @click="divRandomNo" class="hover:bg-green-600 grid-cols-3 font-extrabold text-white  bg-green-500 text-lg py-2 px-4 hover:border-transparent rounded">÷</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex' 
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
        ...mapMutations(["addToCounter", "subFromCounter"]),
        ...mapActions(["addRandomNo", "subRandomNo", "mulRandomNo", "divRandomNo"]),
    }
}
</script>