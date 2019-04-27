<template>
    <div id="animal-list">
        <h1>All Animals</h1>
            <div v-for="animal in animals"
            :key="animal.id" class="animals"><p class="zivotinje">{{ animal.ime }} | {{ animal.vrsta }} | {{ animal.datum }}</p></div>
    </div>
</template>


<script>

import json from '../data.json'

export default{
    data(){
        return{
            animals: json
        }
    },
    methods: {

    },
    
}

</script>

<style>
.zivotinje{
    box-sizing: border-box;
    text-align: left;
    font-size: 200%;
    padding: 20px;
    background: rgb(144, 241, 144);
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color: blue;
}
</style>