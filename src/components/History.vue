<template>
    <div  class="text-center mt-4 shadow-2xl font-bold text-2xl rounded bg-gradient-to-r from-gray-400 to-gray-900 mx-auto max-w-md p-3">
        <h4 class="mb-2 text-base text-white">History</h4>
        <div class="grid grid-cols-4 gap-2 place-content-start">
            <div  v-for="(n,i) in history" :key="i">
                <div :class=" activeIndexes(parseInt(value)).includes(i) && 'text-red-600'" class="m-1 bg-gray-800 shadow text-sm text-white rounded-full">{{ n }}</div>
            </div>
        </div>
        <div class="mt-2">
            <input placeholder="search history" class="rounded  text-sm shadow-2xl text-center mx-auto max-w-screen-md" type="number" v-model="value">
        </div>
    </div>    
</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
    data() {
        return {
            value: 0
        }
    },
    computed: {
        ...mapState(["history"]),
        ...mapGetters(["activeIndexes"])
    }
}
</script>

<style scoped>

</style>