import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'


Vue.use(VueResource);

Vue.filter('nepoznat', function(value){
  if (value == ""){
    return value = "Nepoznat";
  }else{
    return value;
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
