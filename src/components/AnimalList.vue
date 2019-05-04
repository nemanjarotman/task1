<template>
    <div id="animal-list">
        <form v-if="!submitted">
            <p>Ime: <input v-model="animal.ime" placeholder="Ime"></p>
            <p>Vrsta: <input v-model="animal.vrsta" placeholder="Vrsta"></p>
            <p>Datum: <input v-model="animal.datum" placeholder="Datum"></p>
            <label>Sektori</label>
            <select v-model="animal.sector">
                <option v-for="sector in sectors" :key="sector.id">{{ sector }}</option>    
            </select> 
                <button class="addanimal" v-on:click.prevent="addAnimal">Add Animal</button>
        </form>        
           
        <h1>All Animals</h1>
            <div v-for="(animal, index) in animals"
                :key="animal.id" class="animals">
                <p class="zivotinje">{{ animal.ime }} | {{ animal.vrsta }} | {{ animal.datum | nepoznat }} | {{animal.sector}}
                    <button v-on:click = "removeElement(index)">Remove</button>
                    <button v-on:click = "moveToTop(animal,index)">Move To Top</button>
                </p>
            </div>
        <h1>All Sektors</h1>    
            <div v-for="sector in sectors" :key="sector.id" class="sectors">
                <p class="sektori">{{sector}}
                    <button v-on:click = "vidiListuZivotinja(sector)">Vidi listu zivotinja</button>
                </p>
            </div>
    </div>
</template>


<script>

import json from '../data.json'

export default{
    data(){
        return{
            animals: json,
            animal: {ime:'', vrsta:'',datum:'',sector:''},
            sectors: ['Ptice', 'Polarne', 'Gmizavci', 'Sisari'],
            submitted: false
        }
    },
    methods: {
        removeElement(index){
            this.animals.splice(index,1);
        },
        
        moveToTop(value,index){
            this.animals.unshift(value);
            this.removeElement(index+1);
        },
        addAnimal(){
            let newAnimal = { 
                ime: this.animal.ime,
                vrsta: this.animal.vrsta,
                datum: this.animal.datum,
                sector: this.animal.sector
            }
            this.animals.push(newAnimal).then(function(data){
                this.submitted =true;
            });
        },
        vidiListuZivotinja(value){
            if(value == this.animal.sector){
                alert(this.animal.ime);
            }   
        }
    }
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

.sektori{
    box-sizing: border-box;
    text-align: left;
    font-size: 200%;
    padding: 20px;
    background: #ff1a1a;
    color: #333;
}

.addanimal{
    width:150px;
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