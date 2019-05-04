<template>
  <div>
    <animal-list></animal-list>
  </div>
</template>

<script>

import AnimalList from './components/AnimalList.vue'

export default {
  components: {
    'animal-list': AnimalList,
      
  },
  data () {
    return {

    }

  }
}
</script>

<style>

</style>
