<template>
    <div id="animal-list">
        <h1>All Animals</h1>
            <div v-for="(animal, index) in animals"
                :key="animal.id" class="animals">
                <p class="zivotinje">{{ animal.ime }} | {{ animal.vrsta }} | {{ animal.datum | nepoznat}}
                    <button v-on:click = "removeElement(index)">Remove</button>
                    <button v-on:click = "moveToTop(animal,index)">Move To Top</button>
                </p>
            </div>
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
        removeElement(index){
            this.animals.splice(index,1);
        },
        
        moveToTop(value,index){
            this.animals.unshift(value);
            this.removeElement(index+1);
        }
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

button{
    vertical-align: middle;
    left: 30%;
    border-radius: 25px;
    height: 40px;
    text-align: center;
    background-color: #333;
    color: #ff0000;
}
</style>